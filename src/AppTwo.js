// import React from "react"
// import ReactDOM from "react-dom/client"
// import { Outlet, createBrowserRouter,RouterProvider  } from "react-router-dom"
// import Navigation from "./Components/Nav"
// import AppStore from "./RStore/UStore"
// import { Provider } from "react-redux"
// import SideBar from "./Components/BodyComponents/SideBar"
// import VideoCards from "./Components/BodyComponents/VideoCards"
// import WatchPage from "./Components/BodyComponents/WatchPage"
// import Error from "./helper/error"


// const AppTwo=()=>{
//     return(<>
//         <Provider store = {AppStore}>
//     <Navigation></Navigation>
//      {/* <RouterProvider router={AppRouter}></RouterProvider> */}
//      <div className=" flex w-12/12 h-[auto] m-0 p-0 border border-blue-300 overflow-hidden">
//      <SideBar/>
//   <Outlet></Outlet>
//   </div>
//      </Provider>
//     </>)
// }

// const AppRouter = createBrowserRouter([
//     {
//         path:"/",
//         element:<AppTwo/>,
//         error:<Error/>,
//         children:[
//             {   
//                 path:"/",
//                 element:<VideoCards/>
//             },
//             {
//                 path:"/watch",
//                 element:<WatchPage/>
//             }
//         ]
//     }
// ])


// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(<RouterProvider router = {AppRouter}/>)