const multer = require("multer")


const uplaodFile = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "document")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const saveFile = multer({
    storage: uplaodFile
})


module.exports = saveFile