import { useEffect ,useState } from "react"
import { Link } from "react-router-dom"
import {YouTube_API} from "../../Utils/UTAPIs"
import VideoCard, { AddVideoCard } from "./VideoCard"
import { useDispatch } from "react-redux"
import {AddSearchText} from "../../RStore/SearchItemSlice"
import { useSelector} from "react-redux/es/hooks/useSelector"
import {Add_UT_Data} from "../../RStore/YouTubeDataSlice"
import { AddItems } from "../../RStore/FilterItemsSlice"







const VideoCards = ()=>{  
    const dispatch = useDispatch()
 
// original list
    const [UT_Data , setUt_Data] = useState([])
    const [search_Data,setsearch_Data] =   useState()

const UT_Data_From_Store = useSelector((store)=>store.You_Tube_Data.items)
const SearchText_FromBtns = useSelector((store)=>store.SearchText_FromBtns.SearchText)
const SearchText= useSelector((store)=>store.SearchItems.SearchText)


    useEffect(()=>{
    getUtubeData()
    },[])
    useEffect(()=>{
 
      SearchText && SearchbyGivenText()
    },[SearchText[0]])

    const  getUtubeData = async ()=> {
     try{
      const Utube_API = await fetch(YouTube_API);
      const Json = await Utube_API.json()
      setUt_Data(Json.items)
      // setFilter_UT_Data(Json.items)
      // console.log(Json,"Json u tube  Data")
      dispatch( Add_UT_Data(Json.items))}catch(e){console.log(e)}
    }


//https://www.youtube.com/results?search_query=food+factory

const SearchbyGivenText =async ()=>{
  try{
  const api = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB0BYF-z7QkTKBfNS25fwTBLR9r18FBsLs&type=video&q="+SearchText[0]+"&maxResults=20")
  const Json = await api.json()
  setsearch_Data(Json)
  // console.log(Json)
}catch(e){console.log(e)}
}

 const Button_List = ["All","Food","Live","New" , "Dogs" , "criket" , "Footbal" , "Dance" ,"book" , "News","Food","music","New" , "cats" , "criket" , "Footbal" , "Dance" ,"book" , "News","Food","Live","New" , "Dogs" , "criket" , "Footbal" , "Dance" ,"book" , "News","Dance" ,"book" , "News","Food","music","New" , "cats" , "criket"]
const DoSearch = (text)=>{
  dispatch(AddSearchText(text)
  )
}
//  
   return( <div className="border border-blue-800 w-[90%] px-0 py-0 mt-14 h-[100%] xxsm:mt-1 xsm:mt-1 xxsm:w-[100%] xsm:w-[100%] sm:w-[80%] md:w-[rem]  lg:w-[rem]  xl:w-[rem] 2xl:w-[rem] 3xl:w-[rem]  4xl:w-[rem]  5xl:w-[rem]  6xl:w-[rem] ">
    <div className="flex w-[100%] h-[5rem]  mt-[-2px]  bg-white py-3 drop-shadow-sm overflow-x-scroll scroll-smooth scrollbar-hide   snap-x xxsm:w-[100%] p-2 h-[2.8rem]
    xsm:p-2 h-[2.8rem] w-[100%] border border-green-600 sm:w-[100%] 
     md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%] 3xl:w-[100%] 4xl:w-[100%] 5xl:w-[100%] 6xl:w-[100%] ">
            {Button_List.map((Btn_text)=><button className="bg-gray-300 cursor-pointer mx-2 text-md rounded-md px-3 text-black-300 py-1 xxsm:mx-[0.1rem] xsm:text-sm mx-1  sm:mx-2 text-md md:text-md px-3 py-2 mx-2 
            lg:text-md px-3 py-2 mx-2 xl:text-md py-2 px-3 " 
            onClick={()=>{DoSearch(Btn_text)}} key={Math.random()*6 }>{Btn_text}</button>) }
    </div> 
 <div className="border border-red-600 flex flex-wrap  xxsm:justify-center
xsm:justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-center 2xl:justify-center 3xl:justify-center 4xl:justify-center 5xl:justify-center  6xl:justify-center ">
{/* {search_Data?.items?.map((data)=>{ 
  return(<Link to={"/watch?v="+ data?.id.videoId }><VideoCard data={data} key={data?.id.videoId} > </VideoCard></Link>)})}  */}
</div>
<div className="flex flex-wrap justify-start border pt-8 border-violet-600 w-[100%] h-[51rem] scroll-smooth overflow-y-scroll scrollbar-hide snap-y  xxsm:justify-center
xsm:justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-center 2xl:justify-center 3xl:justify-center 4xl:justify-center 5xl:justify-center  6xl:justify-center  ">
{search_Data?.items?.map((data)=>{ 
  return(<Link to={"/watch?v="+ data?.id.videoId }><VideoCard data={data} key={data?.id.videoId} > </VideoCard></Link>)})} 
 {UT_Data [0] && <AddVideoCard data={UT_Data [0]} key={UT_Data [0].id} ></AddVideoCard>} 

 { UT_Data ?.map((data)=>{ return(<Link to={"/watch?v="+ data?.id }><VideoCard data={data} key={data?.id} > </VideoCard></Link>)}) }


</div>
</div>)


}



export default VideoCards




