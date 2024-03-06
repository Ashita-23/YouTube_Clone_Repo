
import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import YT_LOGO from  "../assets/ytlogo.png"
import {YT_search_API} from "../Utils/UTAPIs"
import { ToggleMenu } from "../RStore/ToggelSlice"
import { AddToCache } from "../RStore/SearchCacheSlice"
import { AddItems } from "../RStore/FilterItemsSlice"
import { OpenSearchError,CloseSearchError } from "../RStore/NothingFoundToggel"
import {AddSearchText} from "../RStore/SearchItemSlice"
// import {Add_UT_Data} from "../RStore/YouTubeDataSlice"
// import useDataToFilter from "../helper/useDataToFilter"




const Navigation = ()=>{
  const dispatch = useDispatch()

  const SearchCache = useSelector((store)=>store.SearchCacheData)

  const UT_Data_From_Store = useSelector((store)=>store.You_Tube_Data.items)
  const SearchText_FromBtns = useSelector((store)=>store.SearchText_FromBtns.SearchText)
  // console.log(UT_Data_From_Store[1],"UT_Data_From_Store")


const [search,setSearch] = useState("")
// console.log(search,"search state")
const [Suggetions , setSuggetions] = useState([""])
const [ShowSuggetions , setShowSuggetions] = useState(false)



useEffect(()=>{
   const search_timer = setTimeout(()=>
 {  if(SearchCache[search]){
    setShowSuggetions(SearchCache[search])
   }else{
    getSearch()
   }}
  ,200) 

 
// dispatch(AddSearchText(search))
   return()=>{
    clearTimeout(search_timer)
   };
},[search])

 const ToggleSideBar = () =>{
  dispatch(ToggleMenu(false))
 }



const getSearch = async () =>{
    const Search_API  = await fetch(YT_search_API+search)
    const Search_API_Json = await Search_API.json()
    // console.log(Search_API_Json , "sAJ")
    setSuggetions(Search_API_Json[1])

    dispatch(AddToCache({
      [search]:Search_API_Json[1]
    }))}


    function FilterSearchItems(UT_Data_From_Store,SearchText_FromBtns){
      const FilterItem = UT_Data_From_Store[0].filter((data)=> data?.snippet?.description?.toLowerCase().includes(SearchText_FromBtns))
      return FilterItem
  }


    return(<div className="flex justify-between bg-white px-4 py-2 pr-5 fixed w-[100%] z-10" >
            <div className=" flex  w-[12rem] justify-evenly items-center"><span className="text-2xl"><i className="fa-solid fa-bars" onClick={()=>ToggleSideBar()}></i></span>
          <img src={YT_LOGO} alt="YT_logo" className="w-32 ml-2"/></div>
            {/* {________---------- SEARCH INPUT BOX  -----------_______________} */}
            <form onSubmit={(e)=>{
              e.preventDefault()}}  className=" w-[50rem] flex">
            
            <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search"
             className="border px-4 border-black-400 rounded-l-full w-[40rem] focus:outline outline-blue-400" 
                onFocus={()=>setShowSuggetions(true)}
                onBlur={()=>setShowSuggetions(false)}
             />

            <span  className="text-xl px-3 py-2  border border-black-200 rounded-r-full mr-2 bg-gray-100 hover:bg-gray-300"  >
            <i onClick={()=>{
               dispatch(AddSearchText(search))

               const FilterCard = FilterSearchItems(UT_Data_From_Store,SearchText_FromBtns)
              (FilterCard.length===0)?dispatch(OpenSearchError(true)):dispatch(CloseSearchError(false))
               console.log(FilterCard,"FIFN")
               if (FilterCard.length !== 0 ){
                dispatch( AddItems(FilterCard))
               }
            }}
             
             className="fa-solid fa-magnifying-glass"></i></span>
            <span  className="text-xl px-4 py-2 border border-black-200 rounded-full mx-2 bg-gray-100 hover:bg-gray-300"><i className="fa-solid fa-microphone hover:bg-black-200"></i></span>
            </form>
           {ShowSuggetions && <div className="absolute mt-12 ml-[35rem] bg-gray-200 w-[40rem] rounded-lg pt-2 pb-1 shadow-lg" >
                <ul> 
                  {Suggetions.map((Suge_data)=> <li className="text-base font-bold px-3 py-1 bg-gray-200 hover:bg-gray-300" onClick={()=>{dispatch(AddSearchText(Suge_data))}} ><i className="fa-solid fa-magnifying-glass text-sm px-1"></i>{Suge_data}</li>)}
                </ul>
            </div>}
            
            <div  className="w-[10rem] flex justify-around">
            <span className="text-2xl  px-3 py-2 rounded-full bg-gray-50 hover:bg-gray-200"><i className="fa-regular fa-square-plus"></i></span>
            <span className="text-2xl  px-3 py-2 rounded-full bg-gray-50 hover:bg-gray-200"><i className="fa-regular fa-bell"></i></span>
            <span className="text-2xl  px-3 py-2  rounded-full bg-gray-50 hover:bg-gray-200 "><i className="fa-regular fa-circle-user"></i></span>
            </div>
           
        </div>)
}


export  default Navigation