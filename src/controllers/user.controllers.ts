import { Request, Response, NextFunction } from "express";
import { User } from "../models/user.models";
import ApiError from "../utils/APIError";
import { uploadFile } from "../utils/cloudinary";

// Register a user
export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password, confirmPassword } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new ApiError(409, "User already exists");
    }

    if (password !== confirmPassword) {
      throw new ApiError(400, "Passwords do not match");
    }

    const avatarLocalPath = req.file?.path;
    if (!avatarLocalPath) {
      throw new ApiError(400, "Avatar is required");
    }

    // Upload avatar to Cloudinary
    const avatar = await uploadFile(avatarLocalPath);
    if (!avatar) {
      throw new ApiError(500, "Error uploading avatar");
    }

    // Create a new user
    const newUser = await User.create({
      name,
      email,
      password,
      avatar: avatar.secure_url,
    });

    // Generate tokens
    const accessToken = newUser.generateAccessToken();
    const refreshToken = newUser.generateRefreshToken();

    newUser.refreshToken = refreshToken;
    await newUser.save();

    // Return user without password and refreshToken
    const createdUser = await User.findById(newUser._id).select(
      "-password -refreshToken"
    );
    if (!createdUser) {
      throw new ApiError(500, "Error creating user");
    }

    res.status(201).json({
      message: "User created successfully",
      accessToken,
      user: createdUser,
    });
  } catch (error) {
    throw new ApiError(500, error.message);
  }
};

// Login a user
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new ApiError(404, "User not found");
    }
    const isPasswordCorrect = await user.isPasswordCorrect(password);
    if (!isPasswordCorrect) {
      throw new ApiError(400, "Invalid credentials");
    }

    //Generate token
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save();

    res.status(200).json({ accessToken, user });
  } catch (error) {
    throw new ApiError(500, error.message);
  }
};

//handle refresh token
export const refreshAccessToken = async (req: Request, res: Response) => {
  const { refreshToken } = req.body;
  if (!refreshToken) throw new ApiError(400, "Refresh token is required");

  try {
  } catch (error) {
    throw new ApiError(500, error.message);
  }
};
