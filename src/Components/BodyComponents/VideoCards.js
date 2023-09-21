import { useEffect ,useState } from "react"
import { Link } from "react-router-dom"
import {YouTube_API} from "../../Utils/UTAPIs"
import VideoCard, { AddVideoCard } from "./VideoCard"

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

 const Button_List = ["All","Food","Live","New Song" , "Dogs" , "criket" , "Footbal" , "Dance" ,"book" , "News","Food","Live","New Song" , "Dogs" , "criket" , "Footbal" , "Dance" ,"book" , "News"]


   return( <div className="border border-blue-800 w-[100%] px-0 py-0 mt-14 h-[100%]">
    <div className="flex w-[100%] justify-evenly bg-white fixed py-3 drop-shadow-sm overflow-scroll ">
            {Button_List.map((Btn_text)=><button className="bg-gray-300  text-md rounded-md px-3 text-black-300 py-1 ">{Btn_text}</button>) }
       
    </div>
<div className="flex flex-wrap justify-evenly border pt-2 border-red-400 w-[100%] h-[70rem] scroll-smooth overflow-scroll mt-12">
{UT_Data[0] && <AddVideoCard data={UT_Data[0]} ></AddVideoCard>}
{ UT_Data?.map((data)=>{return(<Link to={"/watch?v="+ data?.id} key={data?.id}><VideoCard data={data} > </VideoCard></Link>)})}
</div>
</div>)


}

export default VideoCards