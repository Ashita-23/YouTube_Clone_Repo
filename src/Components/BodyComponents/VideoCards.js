import { useEffect ,useState } from "react"
import { Link } from "react-router-dom"
import {YouTube_API} from "../../Utils/UTAPIs"
import VideoCard, { AddVideoCard } from "./VideoCard"
import { useDispatch } from "react-redux"
import {AddSearchText} from "../../RStore/SearchItemSlice"
// import {SearchItem} from "../../helper/SearchItem"
import {Add_UT_Data} from "../../RStore/YouTubeDataSlice"
import useDataToFilter from "../../helper/useDataToFilter"



const VideoCards = ()=>{  
    // console.log(fetch(YouTube_API) ,  "YAPIFEX")
    const dispatch = useDispatch()
  // const SearchText_FromBtns = useSelector((store)=>store.SearchText_FromBtns.SearchText)
  // console.log(SearchText_FromBtns,"SearchText_FromBtns")

// original list
    const [UT_Data , setUt_Data] = useState([])
// copy / filtered  list to show
    const [filter_UT_Data,setFilter_UT_Data] =   useState([])
// filtered  list
    const [FilterItemFromState] = useDataToFilter()
  
    // console.log(filter_UT_Data ,"filter_UT_Data from video cards")
    //show error message if  filtered  list <= 0
    const [ErrorMessage,setErrorMessage]= useState(false)
    
    
   const  getUtubeData = async ()=> {
     
    const Utube_API = await fetch(YouTube_API);
    const Json = await Utube_API.json()
    setUt_Data(Json.items)
    setFilter_UT_Data(Json.items)
    dispatch( Add_UT_Data(Json.items))
    }
 
    useEffect(()=>{
      getUtubeData()
  
    },[])

 

    useEffect(()=>{
      if(FilterItemFromState.length <= 0){
          setFilter_UT_Data(UT_Data)
          setErrorMessage(true)
        }else if (FilterItemFromState.length > 0){
          setFilter_UT_Data(FilterItemFromState)
          setErrorMessage(false)

        }
    },[FilterItemFromState])
  //
  
    

 const Button_List = ["All","Food","Live","New" , "Dogs" , "criket" , "Footbal" , "Dance" ,"book" , "News","Food","music","New" , "cats" , "criket" , "Footbal" , "Dance" ,"book" , "News","Food","Live","New" , "Dogs" , "criket" , "Footbal" , "Dance" ,"book" , "News"]
const DoSearch = (text)=>{
  dispatch(AddSearchText(text))
}
//  
   return( <div className="border border-blue-800 w-[100%] px-0 py-0 mt-16 h-[100%]">
    <div className="flex w-[91%] h-[5rem]   mt-[-2px] bg-white fixed py-3 drop-shadow-sm overflow-x-scroll scroll-smooth scrollbar-thin
    scrollbar-w-thin scrollbar-rounded-full items-center scrollbar-thumb-gray-600 scrollbar-track-gray-200  snap-x">
            {Button_List.map((Btn_text)=><button className="bg-gray-300 mx-2 text-md rounded-md px-3 text-black-300 py-1" 
            onClick={()=>{ DoSearch(Btn_text.toLowerCase())} }>{Btn_text}</button>) }
    </div>
    <div className={!ErrorMessage ?"border border-gray-400 h-[6rem] mt-[5rem] hidden items-center justify-center ":"border border-gray-400 h-[6rem] mt-[5rem] flex items-center justify-center"}><p className="text-2xl">nothing has match,try something else...</p></div>
<div className="flex flex-wrap justify-start border pt-8 border-red-400 w-[100%] h-[51rem] scroll-smooth overflow-y-scroll scrollbar-hide snap-y mt-12">
{filter_UT_Data[0] && <AddVideoCard data={UT_Data[0]} ></AddVideoCard>}
{filter_UT_Data?.map((data)=>{ 
  return(<Link to={"/watch?v="+ data?.id} key={data?.id}><VideoCard data={data} key={data?.id} > </VideoCard></Link>)})}
</div>
</div>)


}



export default VideoCards




