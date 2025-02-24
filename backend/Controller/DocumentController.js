const DocumentModel = require("../model/DocumentModel")

// create data
const createData = async (req, res) => {
    const newData = DocumentModel({
        title: req.body.title,
        description: req.body.description,
        file: req.file.filename
    })
    const saveData = await newData.save()
    if(saveData){
        res.send(saveData)
    }
}

const readDocument = async (req, res) => {
    const getData = await DocumentModel.find()
    if(getData){
        res.send(getData)
    }
} 

module.exports = {createData, readDocument}