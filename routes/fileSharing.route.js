const express = require("express");
const FileModel = require("../model/fileMode.js")
const fileControllers = require("../controller/fileController.js")
const fileUploader = require("../middleware/fileMiddleware.js")


const router = express.Router();

router.post("/upload", fileUploader.single('uploaded_file'), fileControllers.uploadFile);
router.post("/share", fileControllers.shareFile);

module.exports = router
