import { useEffect, useState } from "react"
import {useSearchParams} from "react-router-dom"
// import { YouTube_API_UserKey } from "../../Utils/UTAPIs"

const WatchPage = ()=>{
    const [search,] = useSearchParams()
    const [VideoData,setVideoData] = useState([])
    console.log(VideoData,"V Data")

useEffect(()=>{
    getById()
},[])

const getById = async () => {
    const url = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+search.get("v")+"&key=AIzaSyB0BYF-z7QkTKBfNS25fwTBLR9r18FBsLs") ;
    const json = await url.json() ;
    // console.log(json,"json ID V")
    setVideoData(json)
}
    // console.log(id,"id")
    // console.log(search )
    return(<>
       <div className="mt-14 pt-2">
        <iframe width="1100" height="600" 
        src={"https://www.youtube.com/embed/" + search.get("v") }
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowfullscreen></iframe>
       <div className="border border-blue-600 h-[auto] w-[100%]"> 
  <p>{VideoData?.items[0]?.snippet?.description}</p>
  <div className="flex ">
  <span className="text-2xl  px-3 py-2 m-1 rounded-full bg-gray-100 hover:bg-gray-200"><i className="fa-regular fa-circle-user"></i></span>
  <div className="flex flex-col ml-2">
    <span>{VideoData?.items[0]?.snippet?.channelTitle}</span>
    <span>298K subscribers</span>
  </div>
  </div>

       </div>
         </div>
    </>)
}

export default WatchPage