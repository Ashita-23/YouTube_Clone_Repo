import { createSlice } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils"

const YouTubeData = createSlice({
    name : "UT_Data",
    initialState:{
    items:null
    },
    reducers:{
        Add_UT_Data :(state,action)=>{
          
            state.items=action.payload
        }
    }
})

export const {Add_UT_Data} = YouTubeData.actions
export default YouTubeData.reducer