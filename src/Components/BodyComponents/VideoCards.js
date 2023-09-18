import { useEffect ,useState } from "react"
import {YouTube_API} from "../../Utils/UTAPIs"

const VideoCards = ()=>{  
    // console.log(fetch(YouTube_API) ,  "YAPIFEX")

    const [UT_Data , setUt_Data] = useState([])
    // console.log(UT_Data ,"UTD")

    useEffect(()=>{
      getUtubeData()
    },[])
  
   const  getUtubeData = async ()=> {
     
    const Utube_API = await fetch(YouTube_API);
    const Json = await Utube_API.json()
    setUt_Data(Json.items)
    // console.log(Json)
    }




   return( <div className="border border-blue-800 w-[100%] px-0 py-0 mt-14 h-[100%]">
    <div className="flex w-[100%] bg-white justify-evenly fixed py-3 drop-shadow-sm overflow-hidden">
            <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-1 ">All</button>
            <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-1 ">India</button>
            <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-1 ">Dance</button>
            <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-1 ">Food</button>
            <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-1 ">Reacipe</button>
            <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-1 ">New Song</button>
            <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-1 ">Vlogs</button>
            <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-1 ">Dogs</button>
            <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-1 ">News</button>
            <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-1 ">buttonve</button>
            <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-1 ">Vlogs</button>
            <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-1 ">Dogs</button>
            <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-1 ">News</button>
            <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-1 ">buttonve</button>
       
    </div>
<div className="flex flex-wrap justify-evenly border pt-2 border-red-400 w-[100%] h-[70rem] scroll-smooth overflow-scroll mt-12">

{ UT_Data?.map((data)=>{return(
    <div className=" rounded-2xl p-1 w-[20rem] m-2" key={data?.id} >
     <img src={data?.snippet?.thumbnails?.medium?.url} alt="thumbnail" className="rounded-2xl "/>
     <div className="flex justify-evenly items-start">
    <span className="text-2xl  px-3 py-2 m-1 rounded-full bg-gray-100 hover:bg-gray-200"><i className="fa-regular fa-circle-user"></i></span>
     <div className="overflow-hidden">   
     <p className="text-sm truncate font-medium ">{data?.snippet?.title}</p>
        <p className="text-md">{data?.snippet?.channelTitle}</p>
        <p className="text-xs ">{data?.statistics?.viewCount} views</p></div>

     </div>
    </div>)})}
</div>
</div>)

{/* videoCards counter */}
}

export default VideoCards