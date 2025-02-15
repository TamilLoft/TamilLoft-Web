const express = require("express");
const router = express.Router();
const { registerUser, upload } = require("../controllers/infoController");

// Route for registering user with file upload
router.post("/home/register/info/set", registerUser);

module.exports = router;
