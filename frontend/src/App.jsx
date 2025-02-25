import { Routes, Route } from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import StudentList from "./Pages/Students/StudentList"
import SideNav from "./Components/SideNav"
import Document from "./Pages/Document"
import AddDocument from "./Components/Document/AddDocument"

function App() {
  return <SideNav>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/studentList" element={<StudentList />} />
      <Route path="/document" element={<Document />} />
      <Route path="/addDocument" element={<AddDocument />} />
    </Routes>
  </SideNav>
}

export default App
