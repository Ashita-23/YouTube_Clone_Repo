
import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import YT_LOGO from  "../assets/ytlogo.png"
import {YT_search_API} from "../Utils/UTAPIs"
import { ToggleMenu } from "../RStore/ToggelSlice"
import { AddToCache } from "../RStore/SearchCacheSlice"
import { AddItems } from "../RStore/FilterItemsSlice"
// import { OpenSearchError,CloseSearchError } from "../RStore/NothingFoundToggel"
import {AddSearchText} from "../RStore/SearchItemSlice"
import { Link } from "react-router-dom"
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


    return(<div className="flex justify-between bg-white px-1 py-1 pr-1 fixed  xsm:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[95%]  xl:w-[100%] z-10 border border-red-700  " >
            <div className=" flex  w-3/12 justify-evenly items-center border  border-red-700 sm:w-3/12 "><span className="text-md"><i className="fa-solid fa-bars" onClick={()=>ToggleSideBar()}></i></span>
      <img src={YT_LOGO} alt="YT_logo" className="w-[60px] ml-2"></img>
        </div>
            {/* {________---------- SEARCH INPUT BOX  -----------_______________} */}
            <form onSubmit={(e)=>{
              e.preventDefault()}}  className=" w-6/12 flex justify-evenly items-center border border-green-700  sm:w-6/12 ">
            
            <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search"
             className="border text-sm px-2 py-1 rounded-l-full w-8/12 border-black-400  focus:outline outline-blue-400 sm:w-10/12 md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12 3xl:w-11/12 4xl:w-11/12" 
                onFocus={()=>setShowSuggetions(true)}
                onBlur={()=>setShowSuggetions(false)}
             />

            <span  className="text-sm px-1 py-1  border border-black-200 rounded-r-full mr-1 bg-gray-100 hover:bg-gray-300"  >
            <i onClick={()=>{
               dispatch(AddSearchText(search))

               const FilterCard = FilterSearchItems(UT_Data_From_Store,SearchText_FromBtns)
               console.log(FilterCard.length,"FIFN")
               if (FilterCard.length !== 0 ){
                dispatch( AddItems(FilterCard))
             
               }
            }}
             
             className="fa-solid fa-magnifying-glass"></i></span>
            <span  className="text-ms px-2 py-1 border border-black-200 rounded-full mx-1 bg-gray-100 hover:bg-gray-300"><i className="fa-solid fa-microphone hover:bg-black-200"></i></span>
            </form>
           {ShowSuggetions && <div className="absolute mt-12 ml-[35rem] bg-gray-200 w-[40rem] rounded-lg pt-2 pb-1 shadow-lg xsm:ml-[8.9rem] w-[18rem] sm:mt-10 ml-[8.9rem] w-[18rem] md:ml-[10rem] w-[18rem] lg:ml-[14rem] w-[18rem] xl:ml-[17rem] w-[18rem] 2xl:ml-[20rem] w-[18rem]  3xl: 4xl: 5xl:" >
                <ul> 
                  {Suggetions.map((Suge_data)=> <li className="text-base font-bold px-3 py-1 bg-gray-200 hover:bg-gray-300 xsm:text-sm "
                   onClick={()=>{dispatch(AddSearchText(Suge_data))}} ><i className="fa-solid fa-magnifying-glass text-sm px-1"></i>{Suge_data}</li>)}
                </ul>
            </div>}
            
            <div  className="w-3/12 flex justify-evenly items-center border border-blue-900 sm:w-3/12  ">
            <span className="text-sm  px-2 py-1 rounded-full bg-gray-50 hover:bg-gray-200"><i className="fa-regular fa-square-plus"></i></span>
            <span className="text-sm  px-2 py-1 rounded-full bg-gray-50 hover:bg-gray-200"><i className="fa-regular fa-bell"></i></span>
            <span className="text-sm px-2 py-1 rounded-full bg-gray-50 hover:bg-gray-200 "><i className="fa-regular fa-circle-user"></i></span>
            </div>
           
        </div>)
}


export  default Navigation