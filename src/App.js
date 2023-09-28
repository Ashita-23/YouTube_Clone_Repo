

import "./App.css"
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import {Provider} from "react-redux"
import AppStore from "./RStore/UStore"
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
    <Provider store = {AppStore}>
    <Navigation></Navigation>
     <RouterProvider router={AppRouter}></RouterProvider>
     </Provider>
  </>

  );
}

export default App;
