import { useEffect, useState } from "react"
import {useSearchParams} from "react-router-dom"
import {CloseMenu} from "../../RStore/ToggelSlice"
import  LiveChatBox  from "./LiveChatBox"
import { useDispatch } from "react-redux"

import CommentCounter from "../BodyComponents/Comments"
// import { YouTube_API_UserKey } from "../../Utils/UTAPIs"

const WatchPage = ()=>{
    const [search,] = useSearchParams()
    const [VideoData,setVideoData] = useState([])
    const [show,setShow] = useState(false)
    // console.log(VideoData,"V Data")
    const dispatch = useDispatch()
    
useEffect(()=>{
    getById()
    CloseSideBar()
},[])

const CloseSideBar = ()=>{
    dispatch(CloseMenu())
}

const getById = async () => {
    const url = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+search.get("v")+"&key=AIzaSyB0BYF-z7QkTKBfNS25fwTBLR9r18FBsLs") ;
    const json = await url.json() ;
    // console.log(json,"json ID V")
    setVideoData(json?.items[0])
}

// ------------------------

    // console.log(id,"id")
    // console.log(search )
    return(<>
       <div className="mt-14 pt-2 border w-[90%]  border-red-700 flex justify-around">
       <div className= " w-[70%] border  mt-2 border-green-700">
        <iframe width="1200" height="650" 
        src={"https://www.youtube.com/embed/" + search.get("v") }
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>
  <div  className="border border-yellow-600 h-[auto] w-[100%]">
       <div className="border border-blue-600 h-[auto] w-[100%]"> 
  <p className="py-2 text-lg font-semibold">{VideoData?.snippet?.title}</p>
  <div className="flex items-center  w-[100%] ">
  <span className="text-2xl  px-3 py-2 m-1 rounded-full bg-gray-100 hover:bg-gray-200"><i className="fa-regular fa-circle-user"></i></span>
  <div className="flex flex-col ml-2 ">
    <span className="font-semibold pr-2">{VideoData?.snippet?.channelTitle}</span>
    <span className="text-xs text-gray-500">298K subscribers</span>
  </div>
  <div className="p-1 ml-1 flex justify-between  w-[80%]">
  <button className="rounded-full bg-slate-200 px-4 py-2 mx-2 text-sm font-semibold hover:bg-slate-300">Subscribe</button>
  <div className="flex">
  <div className=" rounded-full  ">
  <button className="rounded-l-full border border-r-gray-700 bg-slate-200 px-4 py-2  text-sm font-semibold hover:bg-slate-300"><i class="fa-solid fa-thumbs-up"></i></button>
  <button className="rounded-r-full border border-l-gray-700 bg-slate-200 px-4 py-2  text-sm font-semibold hover:bg-slate-300"><i class="fa-solid fa-thumbs-down"></i></button>
  </div>
  <button className="rounded-full bg-slate-200 px-4 py-2 mx-2 text-sm font-semibold hover:bg-slate-300"><i class="fa-solid fa-share"></i> Share</button>
  <button className="rounded-full bg-slate-200 px-4 py-2 mx-2 text-sm font-semibold hover:bg-slate-300"><i class="fa-solid fa-arrow-down-long"></i> Download </button>
  <button className="rounded-full bg-slate-200 px-4 py-2 mx-2 text-sm font-semibold hover:bg-slate-300"><i class="fa-solid fa-hand-holding-dollar"></i> thanks</button>
  <button className="rounded-full bg-slate-200 px-4 py-2 mx-2 text-sm font-semibold hover:bg-slate-300"><i class="fa-solid fa-scissors"></i> clip</button>
  <button className="rounded-full bg-slate-200 px-4 py-2 mx-2 text-sm font-semibold hover:bg-slate-300 "><i class="fa-solid fa-bars"></i></button>
  </div>
  </div>
  </div>

       </div>
       <div className="rounded-2xl flex flex-col h-[auto] px-2 bg-slate-200 ">
        <div className="w-[100%] h-[auto]   ">
            <span className="font-semibold text-sm text-gray-600">{VideoData?.statistics?.viewCount} views</span>{" "}
            <span className="font-semibold text-sm text-gray-600" > {VideoData?.snippet?.publishedAt.slice(0,10)}</span><br></br>
            <span className="font-semibold text-sm text-gray-600" >{VideoData?.snippet?.title}</span>
        </div>
        <div className={show ? " h-[auto]  ":" h-[60px] overflow-hidden"}>
        <p className="text-sm ">{VideoData?.snippet?.localized?.description}</p>
        <p className="text-sm text-blue-700">{VideoData?.snippet?.tags}</p>
        </div>
     { 
        show ?<button onClick={()=>setShow(false)} className="w-[5rem] text-blue-500 text-md font-medium p-0 mb-2">Show less</button>
        :<button onClick={()=>setShow(true)} className="w-[5rem] text-blue-500 text-md font-medium p-0 mb-2 ">...more</button>
     } 
       </div>
       </div>
      <CommentCounter></CommentCounter>
      </div>
     <LiveChatBox/>
         </div>
    </>)
}

export default WatchPage