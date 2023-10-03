import { createSlice } from "@reduxjs/toolkit"

const SearchItems = createSlice({
    name : "SearchItem",
    initialState:{
        SearchText:[]
    },
    reducers:{
        AddSearchText:(state,action)=>{
            // remove previou text after adding new one
           state.SearchText.splice(0,1)
            state.SearchText.push(action.payload);
        }
        },
    })

export const {AddSearchText}= SearchItems.actions
export default SearchItems.reducer