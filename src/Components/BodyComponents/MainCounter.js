import SideBar from "./SideBar"
import {Outlet} from "react-router-dom"

const MainCounter = ()=>{


  
    return(<div className=" flex w-[100%] h-[auto]  border border-blue-800 ">
        <SideBar></SideBar>
        {/* videoCards counter */}
        <Outlet></Outlet>
        
       
    </div>)
}

export default MainCounter