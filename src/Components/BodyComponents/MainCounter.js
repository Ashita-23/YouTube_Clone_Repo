import SideBar from "./SideBar"
import {Outlet} from "react-router-dom"
import useScreenSize from "../../helper/ScreenWidth"
import SmallSideBar from "./smallSidebar"


const MainCounter = ()=>{

    const ScreenSize = useScreenSize()
    console.log(ScreenSize)
  
    return(<div className=" flex w-12/12 h-[auto]  m-0 p-0 border border-orange-600 overflow-hidden 
    xxsm:flex-col  xsm:flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row 5xl:flex-row 6xl:flex-row">
       { ScreenSize > 640 ? <SideBar></SideBar>:<SmallSideBar/> }
       {/* <SideBar></SideBar> */}
        {/* videoCards counter */}
        <Outlet></Outlet>
        
       
    </div>)
}

export default MainCounter