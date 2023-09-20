import { useEffect } from "react"
import {useSearchParams} from "react-router-dom"
// import { YouTube_API_UserKey } from "../../Utils/UTAPIs"

const WatchPage = ()=>{
    const [search ,] = useSearchParams()

useEffect(()=>{
    getById()
},[])

const getById = async () => {
    const url = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+search.get("v")+"&key=AIzaSyB0BYF-z7QkTKBfNS25fwTBLR9r18FBsLs") ;
    const json = await url.json() ;
    console.log(json,"json ID V")
}
    // console.log(id,"id")
    console.log(search )
    return(<>
       <div className="mt-14 pt-2">
        <iframe width="1100" height="600" 
        src={"https://www.youtube.com/embed/" + search.get("v") }
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowfullscreen></iframe>
     
         </div>
    </>)
}

export default WatchPage