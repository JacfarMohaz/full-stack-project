const express = require("express")
const documentController = require("../Controller/DocumentController")
const uploadFile = require("../middleware/uploadFIle")


const route = express.Router()


route.post("/create/document", uploadFile.single("document"), documentController.createData)
route.get("/read/document", documentController.readDocument)

module.exports = route