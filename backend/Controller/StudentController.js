const StudentModel = require("../model/StudentModel")

// creater data
const CreateStudent = async (req, res) => {
    const newData = StudentModel(req.body)
    const saveData = await newData.save()
    if(saveData){
        res.send(saveData)
    }
}

const readData = async (req, res) => {
    const readData = await StudentModel.find()
    if(readData){
        res.send(readData)
    } 
}


const deleteData = async (req, res) => {
    const removeData = await StudentModel.deleteOne({_id: req.params.id})
    if(removeData){
        res.send(removeData)
    } 
}

module.exports = {CreateStudent, readData, deleteData}