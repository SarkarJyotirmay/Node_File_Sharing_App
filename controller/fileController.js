const FileModel = require("../model/fileMode.js")

const uploadFile = async (req, res) => {
    console.log(req.file);
    FileModel.create({
        originalFileName: req.file.originalname,
        modifiedFileName: req.file.filename,
        size: req.file.size,
        user: "Jhon Doe",
        path: req.file.path
    })
  res.json({
    status: "Success",
    message: "File uploaded successfully"
  });
}

const shareFile = async (req, res) => {
  res.json({
    status: "Success",
     message: "File shared successfully"
  });
}

const fileControllers = {
    uploadFile,
    shareFile
}

module.exports = fileControllers