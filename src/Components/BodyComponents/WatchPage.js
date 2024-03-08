import { useEffect, useState } from "react"
import {useSearchParams} from "react-router-dom"
import {CloseMenu} from "../../RStore/ToggelSlice"
import  LiveChatBox  from "./LiveChatBox"
import { useDispatch } from "react-redux"

import CommentCounter from "../BodyComponents/Comments"
import SuggestedCards from "../suggestedCards"
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
       <div className="mt-14 pt-2 border w-[90%]  border-red-700 flex xsm:flex-col sm:flex-col  md:flex-col  lg:flex-row  justify-around 2xl:flex-row  justify-around ">
       <div className= " w-[90%] border  mt-2 border-green-700 sm:w-[95%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%]">
        <iframe width="500" height="650" className=" sm:w-[570px] h-[350px] ml-2 md:w-[600px] h-[220px] lg:w-[600px] h-[320px] xl:w-[650px] h-[320px] 2xl:w-[700px] h-[320px] "
        src={"https://www.youtube.com/embed/" + search.get("v") }
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>
  <div  className="border border-yellow-600 h-[auto] w-[100%] sm:">
       <div className="border border-blue-600 h-[auto] w-[100%] sm:scroll-m-1"> 
  <p className="py-2 text-sm font-semibold">{VideoData?.snippet?.title}</p>
  <div className="flex items-center border border-blue-600 w-[100%] ">
  <span className="text-sm  px-[0.2rem] py-[0.1rem] m-[0.1rem] rounded-full border border-blue-600 bg-gray-100 hover:bg-gray-200"><i className="fa-regular fa-circle-user"></i></span>
  <div className="flex flex-col ml-[0.5rem] border border-blue-600">
    <span className="font-semibold text-[0.6rem] pr-2">{VideoData?.snippet?.channelTitle}</span>
    <span className="text-[0.5rem] text-gray-500">298K subscribers</span>
  </div>
  <div className="p-1 ml-1 flex justify-between items-center border border-blue-600  w-[80%]">
  <button className="rounded-full bg-slate-200 px-2 py-1 mx-1 text-[0.7rem] font-semibold hover:bg-slate-300">Subscribe</button>
  <div className="flex items-center">
  <div className=" rounded-full border border-red-500 ">
  <button className="rounded-l-full border border-r-gray-700 bg-slate-200 px-2 py-1  text-[0.7rem] font-semibold hover:bg-slate-300"><i class="fa-solid fa-thumbs-up"></i></button>
  <button className="rounded-r-full border border-l-gray-700 bg-slate-200 px-2 py-1  text-[0.7rem]  font-semibold hover:bg-slate-300"><i class="fa-solid fa-thumbs-down"></i></button>
  </div>
  <button className="rounded-full bg-slate-200 px-2 py-1 mx-1 text-[0.7rem] font-semibold hover:bg-slate-300"><i class="fa-solid fa-share"></i> </button>
  <button className="rounded-full bg-slate-200 px-2 py-1 mx-1 text-[0.7rem] font-semibold hover:bg-slate-300"><i class="fa-solid fa-arrow-down-long"></i> </button>
  <button className="rounded-full bg-slate-200 px-2 py-1 mx-1 text-[0.7rem] font-semibold hover:bg-slate-300"><i class="fa-solid fa-hand-holding-dollar"></i></button>
  <button className="rounded-full bg-slate-200 px-2 py-1 mx-1 text-[0.7rem] font-semibold hover:bg-slate-300"><i class="fa-solid fa-scissors"></i> </button>
  <button className="rounded-full bg-slate-200 px-2 py-1 mx-1 text-[0.7rem] font-semibold hover:bg-slate-300 "><i class="fa-solid fa-bars"></i></button>
  </div>
  </div>
  </div>

       </div>
       <div className="rounded-2xl flex flex-col h-[auto] px-2 bg-slate-200 ">
        <div className="w-[100%] h-[auto]">
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
      <div className="flex flex-col border  border-green-500  md:w-[96%] lg:w-[34%] xl:w-[35%] 2xl:w-[30%] h-[140vh]">

     <LiveChatBox/>
     <SuggestedCards/>
      </div>
         </div>
    </>)
}

export default WatchPage