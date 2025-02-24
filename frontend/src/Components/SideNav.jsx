import SIdeNaveData from "./SideNaveData"
import {Link} from "react-router-dom"

function SideNav({ children }) {
    return <>
        <div className="bg-blue-500 h-screen w-[20%] fixed">
            <div className="pt-20 pl-8">
                <Link to="/"><SIdeNaveData icon={"fa-box"} title={"Dashbaord"} /></Link>
                <Link to="/studentList"><SIdeNaveData icon={"fa-user"} title={"Students"} /></Link>
                <SIdeNaveData icon={"fa-user-tie"} title={"Teacher"} />
                <Link to="/document"><SIdeNaveData icon={"fa-file"} title={"Document"} /></Link>
                <SIdeNaveData icon={"fa-right-from-bracket"} title={"Log Out"} />
            </div>
        </div>

        <div className="ml-[24%]">
            {children}
        </div>
    </>
}

export default SideNav