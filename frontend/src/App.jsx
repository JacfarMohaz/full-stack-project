import { Routes, Route } from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import StudentList from "./Pages/Students/StudentList"
import SideNav from "./Components/SideNav"
import Document from "./Pages/Document"

function App() {
  return <SideNav>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/studentList" element={<StudentList />} />
      <Route path="/document" element={<Document />} />
    </Routes>
  </SideNav>
}

export default App
