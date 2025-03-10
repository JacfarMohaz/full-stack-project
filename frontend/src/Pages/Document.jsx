import { useEffect, useState } from "react"
import axios from "axios"
import DocumentData from "../Components/DocumentData"
import { Link } from "react-router-dom"

function Document() {

    const [document, setDocument] = useState([])

    const handleGetDocument = () => {
        axios.get("http://localhost:3000/read/document").then((res) => {
            setDocument(res.data)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        handleGetDocument()
    }, [])

    return <div>
        <Link to="/addDocument"><button className="bg-blue-500 text-white mb-10 px-8 mt-20 py-2 rounded-lg text-xl"><i className="fa-solid fa-upload text-3xl mr-5 "></i>Upload Document</button></Link>
        {
            document.map((item) => {
                return <DocumentData title={item.title} file={`http://localhost:3000/allDocuments/${item.file}`} />
            })
        }
        
    </div>
}

export default Document