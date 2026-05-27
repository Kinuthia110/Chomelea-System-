import express from "express";
import multer from "multer";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({
  storage
});

router.post(
  "/image",
  upload.single("image"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          message: "No image uploaded"
        });
      }

      const folder =
        req.body.folder || "chomelea/uploads";

      const base64 = req.file.buffer.toString("base64");

      const dataURI = `data:${req.file.mimetype};base64,${base64}`;

      const result = await cloudinary.uploader.upload(
        dataURI,
        {
          folder
        }
      );

      res.status(200).json({
        success: true,
        url: result.secure_url
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
);

export default router;