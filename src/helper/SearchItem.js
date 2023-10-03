

 export const SearchItem = (allData,searchText)=>{
    // console.log(allData,"allData from SearcgItem fn")
    const FilterItem =  allData.filter((data)=> data?.snippet?.description?.toLowerCase().includes(searchText))
   return FilterItem 
// console.log(FilterItem,"FilterItem") 
}