import dotenv from "dotenv";
dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

import express from "express";
import cloudinary from "./config/cloudinary.js";
import cors from "cors";
import mongoose from "mongoose";
import RegistrationRoute from "./routes/registrationRoute.js";
import LoginRoute from "./routes/loginRoute.js";
import EditProfileRoute from "./routes/editProfileRoute.js"
import GetProfileRoute from "./routes/getProfileRoute.js"

const app = express();
const PORT = process.env.PORT || 5000;

// 🔥 MIDDLEWARE MUST COME FIRST
app.use(cors());
app.use(express.json());

// For JSON bodies (base64 images)
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// 🔥 ROUTES AFTER MIDDLEWARE
app.use("/", RegistrationRoute);
app.use("/", LoginRoute);
app.use("/", EditProfileRoute);
app.use("/", GetProfileRoute);

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

