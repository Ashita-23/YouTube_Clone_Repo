import { useEffect, useState } from "react"
import {useSearchParams} from "react-router-dom"
import {CloseMenu} from "../../RStore/ToggelSlice"
import { useDispatch } from "react-redux"
// import { YouTube_API_UserKey } from "../../Utils/UTAPIs"

const WatchPage = ()=>{
    const [search,] = useSearchParams()
    const [VideoData,setVideoData] = useState([])
    console.log(VideoData,"V Data")
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
    // console.log(id,"id")
    // console.log(search )
    return(<>
       <div className="mt-14 pt-2">
        <iframe width="1100" height="600" 
        src={"https://www.youtube.com/embed/" + search.get("v") }
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>
        <div  className="border border-green-600 h-[auto] w-[61%]">
       <div className="border border-blue-600 h-[auto] w-[100%]"> 
  <p>{VideoData?.snippet?.title}</p>
  <div className="flex items-center ">
  <span className="text-2xl  px-3 py-2 m-1 rounded-full bg-gray-100 hover:bg-gray-200"><i className="fa-regular fa-circle-user"></i></span>
  <div className="flex flex-col ml-2">
    <span>{VideoData?.snippet?.channelTitle}</span>
    <span>298K subscribers</span>
  </div>
  <div className="p-1 ">
  <button className="rounded-full bg-slate-300 px-4 py-2 mx-2 text-md hover:bg-slate-400">Subscribe</button>
  </div>
  </div>

       </div>
       <div className="border border-red-900 flex flex-col h-[100px]   overflow-hidden">
        <div className="w-[100%] h-[60px]">
            <span>{VideoData?.statistics?.viewCount} views</span>{" "}
            <span> {VideoData?.snippet?.publishedAt.slice(0,10)}</span><br></br>
            <span>{VideoData?.snippet?.title}</span>
        </div>
            
        <div><p className="">{VideoData?.snippet?.localized?.description}</p>
        <p className="text-blue-700">{VideoData?.snippet?.tags.join("#")}</p></div>
       </div>
       </div>
         </div>
    </>)
}

export default WatchPage