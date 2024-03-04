// import { useState } from "react"
import { useSelector} from "react-redux/es/hooks/useSelector"
// console.log(UT_Data_From_Store[0],"UT_Data_From_Store")
// import { useEffect, useState } from "react"



const useDataToFilter = ()=>{
    const UT_Data_From_Store = useSelector((store)=>store.You_Tube_Data.items)
    const SearchText_FromBtns = useSelector((store)=>store.SearchText_FromBtns.SearchText)
    console.log(SearchText_FromBtns,"STF")
// const [input_Text , setInputText]= useState("")
    console.log( UT_Data_From_Store[0],"custome hook utData ")
    // console.log(SearchText_FromBtns,"custome hook searchText from stor ")





    
//  useEffect(()=>{
//         setInputText(SearchText_FromBtns)
//      })[]
    
//    const [FilterItemFromState,setFilterItem] = useState([])
//  useEffect(()=>{
 
//     const FilterItem = UT_Data_From_Store[0].filter((data)=> data?.snippet?.description?.toLowerCase().includes(SearchText_FromBtns))
//     setFilterItem(FilterItem)
// filterForUT(UT_Data_From_Store[0],SearchText_FromBtns)


//     },[SearchText_FromBtns])

// function filterForUT (UT_Data_From_Store[0],SearchText_FromBtns){
//     const filterItems= UT_Data_From_Store[0].filter((data)=> data?.snippet?.description?.toLowerCase().includes(SearchText_FromBtns))
//     return filterItems
// }

// return [FilterItemFromState]
}

export default useDataToFilter