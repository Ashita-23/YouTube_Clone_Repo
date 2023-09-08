
import { useEffect } from "react";
import "./App.css"
import { YouTube_API } from "./Utils/UTAPIs";
import Navigation from "./Components/Nav";

function App() {
  console.log(fetch(YouTube_API) ,  "YAPIFEX")

  useEffect(()=>{
    getUtubeData()
  },[])

 const  getUtubeData = async ()=> {
   
  const Utube_API = await fetch(YouTube_API);
  const Json = await Utube_API.json()

  console.log(Json)
  }



  return (


 
  <Navigation></Navigation>

  );
}

export default App;
