
import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import YT_LOGO from  "../assets/ytlogo.png"
import {YT_search_API} from "../Utils/UTAPIs"
import { ToggleMenu } from "../RStore/ToggelSlice"
import { AddToCache } from "../RStore/SearchCacheSlice"
import { AddItems } from "../RStore/FilterItemsSlice"
// import { OpenSearchError,CloseSearchError } from "../RStore/NothingFoundToggel"
import {AddSearchText} from "../RStore/SearchItemSlice"
import  useScreenSize from "../helper/ScreenWidth"
// import {Add_UT_Data} from "../RStore/YouTubeDataSlice"
// import useDataToFilter from "../helper/useDataToFilter"




const Navigation = ()=>{
  const dispatch = useDispatch()

  const SearchCache = useSelector((store)=>store.SearchCacheData)

  const UT_Data_From_Store = useSelector((store)=>store.You_Tube_Data.items)
  const SearchText_FromBtns = useSelector((store)=>store.SearchText_FromBtns.SearchText)
  // console.log(UT_Data_From_Store[1],"UT_Data_From_Store")

  const ScreenSize = useScreenSize()
  // console.log(ScreenSize)

const [search,setSearch] = useState("")
// console.log(search,"search state")
const [Suggetions , setSuggetions] = useState([""])
const [ShowSuggetions , setShowSuggetions] = useState(false)




useEffect(()=>{
  getSearch()
   const search_timer = setTimeout(()=>
 {  if(SearchCache[search]){
    setShowSuggetions(SearchCache[search])
   }else{
    // getSearch()
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
  try{ 
    const Search_API  = await fetch(YT_search_API+search)
    const Search_API_Json = await Search_API.json()
    // console.log(Search_API_Json , "sAJ")
    setSuggetions(Search_API_Json[1])

    dispatch(AddToCache({
      [search]:Search_API_Json[1]
    }))}catch(e){console.log(e)}}

  const SearchTextHandler=(Suge_data)=>{
    function dispatchSearchText(Suge_data){
      dispatch(AddSearchText(Suge_data))
    }
function updateaSerachText(Suge_data){
    setSearch(Suge_data)
  }
    
  updateaSerachText(Suge_data)
    dispatchSearchText(Suge_data)

  }

    return(<><div className="flex justify-around p-1 bg-white w-[100%] fixed xxsm:w-[100%] xsm:w-[100%] sm:w-[100%]  md:w-[100%] lg:w-[100%]  xl:w-[100%] 2xl:w-[100%]  z-10 border border-red-700  " >
            <div className=" flex  w-2/12 justify-evenly items-center border  border-red-700 xxsm:w-4/12 xsm:w-5/12 sm:w-2/12 ">
            <span className="text-md xxsm:text-sm xsm:text-sm"><i className="fa-solid fa-bars" onClick={()=>ToggleSideBar()}></i></span>
    <img src={YT_LOGO} alt="YT_logo" className="w-[60px] xxsm:w-[55%] xsm:w-[45%] ml-2"></img>
        </div>
            {/* {________---------- SEARCH INPUT BOX  -----------_______________} */}
            <form onSubmit={(e)=>{
              e.preventDefault()}}  className=" w-5/12   flex justify-evenly items-center border border-green-700  xxsm:w-8/12 xsm:w-7/12 sm:w-7/12">
            
            <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search"
             className="relative border text-sm px-2 py-1 rounded-l-full w-11/12 border-black-400  focus:outline outline-blue-400 xsm:w-10/12 sm:w-10/12 md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12 3xl:w-11/12 4xl:w-11/12" 
                onFocus={()=>setShowSuggetions(true)}
                onBlur={()=>setShowSuggetions(false)}
             />

            <span  className="text-sm px-1 py-1  border border-black-200 rounded-r-full mr-1 cursor-pointer  xxsm:text-[0.6rem]  xsm:text-[0.6rem] bg-gray-100 hover:bg-gray-300"  >
            <i onClick={()=>{
               dispatch(AddSearchText(search))}}
             
             className="fa-solid fa-magnifying-glass "></i></span>
            <span  className="text-ms px-2 py-1 border border-black-200 rounded-full mx-1 bg-gray-100  xxsm:text-[0.6rem] xsm:text-[0.6rem] hover:bg-gray-300 "><i className="fa-solid fa-microphone hover:bg-black-200"></i></span>
            </form>

          {ScreenSize>640 ?  <div  className="w-2/12  flex justify-evenly items-center border border-blue-900 xxsm: xsm: sm:w-2/12   md: xl:2xl: ">
            <span className="text-sm  px-2 py-1 rounded-full bg-gray-50 hover:bg-gray-200 xxsm:text-[0.6rem] xsm:text-[0.6rem]"><i className="fa-regular fa-square-plus"></i></span>
            <span className="text-sm  px-2 py-1 rounded-full bg-gray-50 hover:bg-gray-200 xxsm:text-[0.6rem] xsm:text-[0.6rem]"><i className="fa-regular fa-bell"></i></span>
            <span className="text-sm px-2 py-1 rounded-full bg-gray-50 hover:bg-gray-200 xxsm:text-[0.6rem] xsm:text-[0.6rem] "><i className="fa-regular fa-circle-user"></i></span>
            </div>:""}
        </div>
            {ShowSuggetions && <div className="absolute w-[100%]   flex flex-col justify-center items-center z-10 "  >
          {  ScreenSize > 640 ?  <ul  className="w-5/12 mt-11 xxsm:w-[100%] xsm:w-[100%] sm:w-7/12 "> 
                  {Suggetions.map((Suge_data)=> <li className="text-base cursor-pointer font-bold px-3 py-1 bg-gray-200 hover:bg-gray-300 xsm:text-sm  xxsm:text-[0.6rem] py-[0.1rem]"
                   onClick={()=>{SearchTextHandler(Suge_data)}} ><i className="fa-solid fa-magnifying-glass text-sm px-1  xxsm:text-[0.6rem] xsm:text-[0.6rem]"></i>{Suge_data}</li>)}
                </ul>:  <ul  className="w-11/12 mt-11 xxsm:w-[100%] xsm:w-[100%] "> 
                  {Suggetions.map((Suge_data)=> <li className="text-base cursor-pointer font-bold px-3 py-1 bg-gray-200 hover:bg-gray-300 xsm:text-sm  xxsm:text-[0.6rem] py-[0.1rem]"
                   onClick={()=>{SearchTextHandler(Suge_data)}} ><i className="fa-solid fa-magnifying-glass text-sm px-1  xxsm:text-[0.6rem] xsm:text-[0.6rem]"></i>{Suge_data}</li>)}
                </ul>}
      
               
            </div>}</>)
}


export  default Navigation