
import { useSelector} from "react-redux/es/hooks/useSelector"
// console.log(UT_Data_From_Store[0],"UT_Data_From_Store")
import { useEffect , useState } from "react"



const useDataToFilter = ()=>{
    const UT_Data_From_Store = useSelector((store)=>store.You_Tube_Data.items)
    const SearchText_FromBtns = useSelector((store)=>store.SearchText_FromBtns.SearchText)
    // console.log(SearchText_FromBtns,"STF")
// const [input_Text , setInputText]= useState("")
    console.log( UT_Data_From_Store,"custome hook utData ")
    // console.log(SearchText_FromBtns,"custome hook searchText from stor ")

    
 useEffect(()=>{
    FilterItems(UT_Data_From_Store,SearchText_FromBtns)
     },[SearchText_FromBtns])
    
//    const [FilterItemFromState,setFilterItem] = useState([])
    // const FilterItem = UT_Data_From_Store[0].filter((data)=> data?.snippet?.description?.toLowerCase().includes(input_Text.toLowerCase()))
    // setFilterItem(FilterItem)
// filterForUT(UT_Data_From_Store[0],SearchText_FromBtns)

// return  FilterItem

function FilterItems(UT_Data_From_Store,SearchText_FromBtns){
    const FilterItem = UT_Data_From_Store[0].filter((data)=> data?.snippet?.description?.toLowerCase().includes(SearchText_FromBtns.toLowerCase()))
    return FilterItem
}
}

export default useDataToFilter