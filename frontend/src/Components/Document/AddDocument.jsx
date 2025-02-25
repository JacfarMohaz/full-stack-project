import axios from "axios"
import { useState } from "react"

function AddDocument(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState("")

    const formData = new FormData()

    formData.append("title", title)
    formData.append("description", description)
    formData.append("document", file)

    const handlePostData = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/create/document", formData).then(() => {
            alert("success")
        }).catch((error) => console.log(error))
    }

    return <div className="flex justify-center items-center h-screen">
        <form className="bg-blue-600 w-[64%] rounded-3xl p-20 h-96">
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-80 h-10 text-2xl rounded-lg pl-2" type="text" placeholder="Title" />
            <input value={description} onChange={(e) => setDescription(e.target.value)} className="w-80 h-10 text-2xl rounded-lg pl-2 mt-4" type="text" placeholder="Description" />
            <input onChange={(e) => setFile(e.target.files[0])} className="mt-5 file:40 file:h-10 file:bg-yellow-500 file:border-none file:rounded-lg file:text-2xl" type="file" accept=".pdf" />
            <button onClick={handlePostData} className="bg-yellow-500 px-20 py-2 rounded-xl font-semibold mt-10">Save</button>
        </form>
    </div>
}

export default AddDocument