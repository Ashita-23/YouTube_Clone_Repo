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
    // console.log(fetch(YouTube_API) ,  "YAPIFEX")
    const dispatch = useDispatch()
 
// original list
    const [UT_Data , setUt_Data] = useState([])
    // console.log(UT_Data,"UT_Data")
    // copy / filtered  list to show

    const [filter_UT_Data,setFilter_UT_Data] =   useState([])
    // console.log(filter_UT_Data,"filter_UT_Data")
// filtered  list

const UT_Data_From_Store = useSelector((store)=>store.You_Tube_Data.items)
const SearchText_FromBtns = useSelector((store)=>store.SearchText_FromBtns.SearchText)
const FilteredItems = useSelector((store)=>store.FilteredItems.items)
// const SearchErrorMessage = useSelector((store)=>store.SearchErrorMessage.items)
// console.log( FilteredItems," FilteredItems")
// console.log(SearchErrorMessage,"SEM....")

    useEffect(()=>{
      getUtubeData()
  
    },[])

    const  getUtubeData = async ()=> {
     
      const Utube_API = await fetch(YouTube_API);
      const Json = await Utube_API.json()
      // console.log(Json,"Json Data")
      setUt_Data(Json.items)
        setFilter_UT_Data(Json.items)
      dispatch( Add_UT_Data(Json.items))
    }

      function FilterBtnListItems(UT_Data_From_Store,SearchText_FromBtns){
        const FilterItem = UT_Data_From_Store[0].filter((data)=> data?.snippet?.description?.toLowerCase().includes(SearchText_FromBtns))
        return FilterItem
    }
useEffect(()=>{
  if(FilteredItems.length > 0 ){
      setFilter_UT_Data(FilteredItems[FilteredItems.length-1])
    }
},[FilteredItems])

    
 const Button_List = ["All","Food","Live","New" , "Dogs" , "criket" , "Footbal" , "Dance" ,"book" , "News","Food","music","New" , "cats" , "criket" , "Footbal" , "Dance" ,"book" , "News","Food","Live","New" , "Dogs" , "criket" , "Footbal" , "Dance" ,"book" , "News","Dance" ,"book" , "News","Food","music","New" , "cats" , "criket"]
const DoSearch = (text)=>{
  dispatch(AddSearchText(text)
  )
}
//  
   return( <div className="border border-blue-800 w-[100%] px-0 py-0 mt-16 h-[100%] sm:">
    <div className="flex w-[91%] h-[5rem]  mt-[-2px]  bg-white fixed py-3 drop-shadow-sm overflow-x-scroll scroll-smooth scrollbar-thin
    scrollbar-w-thin scrollbar-rounded-full items-center scrollbar-thumb-gray-600 scrollbar-track-gray-200  snap-x sm:w-[100%] md: w-[100%] border border-red-600 lg: w-[100%] xl: w-[100%]">
            {Button_List.map((Btn_text)=><button className="bg-gray-300 mx-2 text-md rounded-md px-3 text-black-300 py-1" 
            onClick={()=>{ DoSearch(Btn_text)
            const FilterCards = FilterBtnListItems(UT_Data_From_Store,SearchText_FromBtns)
            //  console.log(FilterCards,"CLFC.....")
             if(FilterCards.length !== 0){
              dispatch(AddItems(FilterCards))
             }

            }  } key={Math.random()*6 }>{Btn_text}</button>) }
    </div>
    {/* <div className={FilteredItems.length === 0?"border border-gray-400 h-[6rem] mt-[5rem] hidden items-center justify-center ":"border border-gray-400 h-[6rem] mt-[5rem] flex items-center justify-center"}>
    <p className="text-2xl">nothing has match,try something else...</p></div> */}
<div className="flex flex-wrap justify-start border pt-8 border-red-400 w-[100%] h-[51rem] scroll-smooth overflow-y-scroll scrollbar-hide snap-y mt-12 sm: items-center ">
{filter_UT_Data[0] && <AddVideoCard data={UT_Data[0]} key={UT_Data[0].id} ></AddVideoCard>}
{filter_UT_Data?.map((data)=>{ 
  return(<Link to={"/watch?v="+ data?.id }><VideoCard data={data} key={data?.id} > </VideoCard></Link>)})}
</div>
</div>)


}



export default VideoCards




