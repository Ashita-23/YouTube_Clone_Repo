import SideBar from "./SideBar"
import {Outlet} from "react-router-dom"

const MainCounter = ()=>{

  
    return(<div className=" flex w-[100%] h-[100%]  border border-gray-800 ">
        <SideBar></SideBar>
        {/* videoCards counter */}
        <Outlet></Outlet>
        
       
    </div>)
}

export default MainCounter