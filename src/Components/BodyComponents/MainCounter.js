import SideBar from "./SideBar"
import { useEffect, useState } from "react";
import { YouTube_API } from "../../Utils/UTAPIs";

const MainCounter = ()=>{
    // console.log(fetch(YouTube_API) ,  "YAPIFEX")

    const [UT_Data , setUt_Data] = useState([])
    console.log(UT_Data ,"UTD")
    // console.log(UT_Data.channelId , UT_Data.channelTitle , UT_Data.description , UT_Data.thumbnails.medium.url, UT_Data.title , ,"UTD")
    useEffect(()=>{
      getUtubeData()
    },[])
  
   const  getUtubeData = async ()=> {
     
    const Utube_API = await fetch(YouTube_API);
    const Json = await Utube_API.json()
    setUt_Data(Json.items)
    // console.log(Json)
    }
  
    return(<div className=" flex w-[100%] h-[auto]  border border-gray-800">
        <SideBar></SideBar>
        <div className="border border-red-400 w-[90%] p-2">
            <div className="flex border border-red-400  justify-evenly">
                    <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-2 ">All</button>
                    <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-2 ">India</button>
                    <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-2 ">Dance</button>
                    <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-2 ">Food</button>
                    <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-2 ">Reacipe</button>
                    <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-2 ">New Song</button>
                    <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-2 ">Vlogs</button>
                    <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-2 ">Dogs</button>
                    <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-2 ">News</button>
                    <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-2 ">buttonve</button>
                    <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-2 ">Vlogs</button>
                    <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-2 ">Dogs</button>
                    <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-2 ">News</button>
                    <button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-2 ">buttonve</button>
               
            </div>
<div className="flex flex-wrap w-[100%] h-[auto]">

{ UT_Data?.map((data)=>{return(
            <div className=" rounded-2xl p-1 w-[20rem] m-2" >
             <img src={data?.snippet?.thumbnails?.medium?.url} alt="thumbnail" className="rounded-2xl "/>
             <div className="">
             <div> <span className="text-2xl  px-3 py-2  rounded-full bg-gray-300 hover:bg-gray-200 "><i className="fa-regular fa-circle-user"></i></span></div>
                <p className="text-sm ">{data?.snippet?.title}</p>
                <p className="text-md">{data?.snippet?.channelTitle}</p>
                <p className="text-xs">{data?.statistics?.viewCount}views</p>
                {/* <p className="text-xs">{data?.snippet?.publishedAt}</p> */}
      
             </div>
            </div>)})}
</div>
        </div>

        {/* videoCards counter */}
    </div>)
}

export default MainCounter