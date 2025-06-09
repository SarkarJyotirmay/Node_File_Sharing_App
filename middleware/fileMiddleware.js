const multer  = require('multer')
const { v4: uuid } = require("uuid");
const path = require("node:path")

const fileStoragePath = path.join(__dirname, "../uploads")

const storage = multer.diskStorage({
  destination:  (req, file, cb) => {
    cb(null, fileStoragePath)
  },

  filename:  (req, file, cb) =>{
    const fileName = uuid() + path.extname(file.originalname)
    cb(null, fileName)
  }
})

const uploader = multer({ storage: storage })

module.exports = uploader