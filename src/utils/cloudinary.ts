import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config(); // Load .env variables

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadFile = async (path: string) => {
  try {
    if (!path) return;
    const result = await cloudinary.uploader.upload(path, {
      resource_type: "auto",
      folder: "TodoUsers",
    });
    console.log("File uploaded successfully", result.secure_url);

    // Delete file after upload
    fs.unlinkSync(path);
    return result;
  } catch (error) {
    console.log("Error uploading file to Cloudinary", error);
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
    return null;
  }
};
