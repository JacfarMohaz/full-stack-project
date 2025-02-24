const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const StudentRoutes = require("./routes/StudentRoutes")
const documentRouter = require("./routes/DocumentRoutes")
const cors = require("cors")
const app = express()

app.use(express.json())

app.use(cors())

mongoose.connect(process.env.MongoDB_Url).then(() => {
    console.log("Coonected Database")
}).catch((error) => console.log(error))

// student Routes
app.use(StudentRoutes)

// dicument router
app.use(documentRouter)


app.use("/allDocuments", express.static("document"))

app.listen(process.env.Port, () => console.log(`Server is Running on port ${process.env.Port}`))