const { Registration } = require('../models/infoModel');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Controller function to handle file upload and user registration
const registerUser = async (req, res) => {
  try {
    //recive responce for html
    const { name, email, whtnumber, InPutFiles } = req.body;

    //const Imfile = req.InPutFiles.body;
    console.log(name, email, whtnumber, InPutFiles);


    const userExiste1 = await Registration.findOne({ name });
    const userExiste2 = await Registration.findOne({ whtnumber });
    const userExiste3 = await Registration.findOne({ email });
    if (userExiste1 || userExiste2 || userExiste3) {
      return res.status(400).json({ msg1: 'User Already Exists' });
    }



















    const data = new Registration({ name, email, whatsappNumber: whtnumber, InPutFiles });
    await data.save();
    console.log(data);
    res.redirect(300, '/home/register/info/success');

  } catch (err) {
    console.error(`Error is: ${err}`);
    return res.status(500).json({ msg2: `An error occurred ${err}` });
  }
};


// Filter to accept only certain file types
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/msword'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type'), false);
  }
};


// Set up Multer storage file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'uploads/';
    ensureUploadDirectory(uploadDir);
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(InPutFiles.req.body));
  }
});

// Function to ensure upload directory exists
const ensureUploadDirectory = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Directory ${dir} created`);
  } else {
    console.log(`Directory ${dir} already exists`);
  }
};



// Set up Multer upload
const upload = multer({ dest: storage, fileFilter: fileFilter });




module.exports = { registerUser, upload };
