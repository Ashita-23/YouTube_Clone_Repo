import { createSlice } from "@reduxjs/toolkit";

const SearchCache = createSlice({
    name:"SearchCashe",
    initialState:{
    
    },
    reducers:{
        AddToCache:(state,action)=>{
       state = Object.assign(state, action.payload)
        }
    }
})

export const {AddToCache} = SearchCache.actions
export default SearchCache.reducer