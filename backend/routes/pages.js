const express = require("express");
const router = express.Router();
const path = require("path");

 
router.use("/", express.static(path.join(__dirname, "../../frontend/dist/"))); 
router.use("/home", express.static(path.join(__dirname, "../../frontend/dist/"))); 


module.exports = router;