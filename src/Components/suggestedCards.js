
import VideoCard from "./BodyComponents/VideoCard"
import { useEffect, useState } from "react"
import {YouTube_API} from "../Utils/UTAPIs"
import { Link } from "react-router-dom"



const SuggestedCards = ()=>{


    const [data,setData]=useState([])
console.log(data,"data")

useEffect(()=>{
    getUtubeData()

  },[])

  const  getUtubeData = async ()=> {
   
    const Utube_API = await fetch(YouTube_API);
    const Json = await Utube_API.json()
    // console.log(Json,"Json Data")
    setData(Json.items)
   
  }


    return(
        <div className="border border-red-600 overflow-scroll cursor-pointer scroll-smooth snap-y snap-normal 
        md:h-[40rem] flex flex-row flex-wrap justify-center  lg:h-[40rem] xl:h-[40rem] flex flex-row flex-wrap justify-center" >
        {
            data.map((data)=> <Link to={"/watch?v="+data?.id}><VideoCard data={data} key={data?.id} ></VideoCard></Link>)
        }
           
        </div>
    )
}

export default SuggestedCards