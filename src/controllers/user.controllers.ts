import { Request, Response } from "express";
import { User } from "../models/user.models";

// Register a user
export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password, confirmPassword } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    //create a new user
    const newUser = await User.create({ name, email, password });
    await newUser.save();

    //Generate token
    const accessToken = newUser.generateAccessToken();
    const refreshToken = newUser.generateRefreshToken();

    newUser.refreshToken = refreshToken;
    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      accessToken,
      newUser,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login a user
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const isPasswordCorrect = await user.isPasswordCorrect(password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    //Generate token
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save();

    res.status(200).json({ accessToken, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
