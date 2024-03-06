import { createSlice } from "@reduxjs/toolkit";


const SearchMessage = createSlice({
    name:"SearctErrorMessage",
    initialState:{
        ISMessage:false
    },
    reducers:{
        OpenSearchError:(state)=>{
            state.ISMessage = !state.ISMessage
          } ,
          CloseSearchError:(state)=>{
            state.ISMessage = !state.ISMessage
           }
    }
})

export const {OpenSearchError,CloseSearchError}=SearchMessage.actions
export default SearchMessage.reducer