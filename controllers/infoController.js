const { Registration } = require("../models/infoModel");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

// Directory for file uploads
const uploadDir = "uploads/";

// Ensure the upload directory exists
const ensureUploadDirectory = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Directory ${dir} created`);
  } else {
    console.log(`Directory ${dir} already exists`);
  }
};

// Filter to accept only certain file types
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "application/pdf",
    "application/msword",
  ];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"), false);
  }
};

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    ensureUploadDirectory(uploadDir);
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Save with timestamp and original extension
  },
});

// Set up Multer upload
const upload = multer({ storage, fileFilter });

// Controller function to handle file upload and user registration
const registerUser = async (req, res) => {
  try {
    // Receive response from HTML form
    const { name, email, whtnumber } = req.body;
    const InPutFiles = req.file ? req.file.filename : null;

    console.log(name, email, whtnumber, InPutFiles);

    // Check if user already exists
    const userExists = await Registration.findOne({
      $or: [{ name }, { whatsappNumber: whtnumber }, { email }],
    });
    if (userExists) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    // Save user data to the database
    const newUser = new Registration({
      name,
      email,
      whatsappNumber: whtnumber,
      InPutFiles,
    });
    await newUser.save();

    console.log(newUser);
    res.redirect("/home/register/info/success");
  } catch (err) {
    console.error(`Error: ${err}`);
    return res.status(500).json({ message: `An error occurred: ${err.message}` });
  }
};

module.exports = { registerUser, upload };
