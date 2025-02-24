const express = require("express")
const studentController = require("../Controller/StudentController")

const routes = express.Router()


routes.post("/create/student", studentController.CreateStudent)
routes.get("/read/student", studentController.readData)
routes.delete("/delete/student/:id", studentController.deleteData)

module.exports = routes