import SideBar from "./SideBar"
import {Outlet} from "react-router-dom"

const MainCounter = ()=>{


  
    return(<div className=" flex w-12/12 h-[auto] m-0 p-0 border border-blue-300 ">
        <SideBar></SideBar>
        {/* videoCards counter */}
        <Outlet></Outlet>
        
       
    </div>)
}

export default MainCounter