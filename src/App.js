

import "./App.css"
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Navigation from "./Components/Nav";
import MainCounter from "./Components/BodyComponents/MainCounter";
import VideoCards from "./Components/BodyComponents/VideoCards";
import WatchPage from "./Components/BodyComponents/WatchPage";

const AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<MainCounter ></MainCounter>,
    children:[
      {
        path:"/",
        element:<VideoCards></VideoCards>
      },
      {
        path:"/watch",
        element:<WatchPage></WatchPage>
      }
    ]
  }
])


function App() {



  return (
  <>
    <Navigation></Navigation>
     <RouterProvider router={AppRouter}></RouterProvider>
  </>

  );
}

export default App;
