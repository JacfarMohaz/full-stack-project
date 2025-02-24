import { useEffect, useState } from "react"
import StudentData from "../../Components/Students/StudentData"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

function StudentList() {

    const [getStudent, setGetStudnet] = useState([])

    const handleReadStudnet = () => {
        axios.get("http://localhost:3000/read/student").then((res) => {
            setGetStudnet(res.data)
        }).catch(error => console.log(error))
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/delete/student/${id}`).then(() => {
            toast("Delete Success", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false
            })
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        handleReadStudnet()
    }, [])

    return (<div>
        <div className="flex pt-20 justify-between px-20">
            <button className="bg-blue-500 px-14 py-2 rounded-lg text-white">Add Student</button>
            <form>
                <input className="w-52 border-2 border-blue-400 outline-none h-10 rounded-lg pl-2 text-2xl" type="Search" placeholder="Search Student" />
            </form>
        </div>

        <table className="mt-10">
            <thead>
                <tr className="bg-blue-500 text-white">
                    <th className="px-8 py-4 text-xl">FullName</th>
                    <th className="px-8 py-4 text-xl">Address</th>
                    <th className="px-8 py-4 text-xl">Gender</th>
                    <th className="px-8 py-4 text-xl">Class</th>
                    <th className="px-8 py-4 text-xl">Phone</th>
                    <th className="px-8 py-4 text-xl">Data</th>
                    <th className="px-8 py-4 text-xl">Actions</th>
                </tr>
            </thead>
            {
                getStudent.map((data) => {
                    return <StudentData remove={() => handleDelete(data._id)} fullName={data.fullName} address={data.address} gender={data.gender} class={data.claas} phone={data.phone} data={new Date(data.createdAt).toDateString() } />
                })
            }
            
        </table>
        <ToastContainer />
    </div>
    
    )
}

export default StudentList