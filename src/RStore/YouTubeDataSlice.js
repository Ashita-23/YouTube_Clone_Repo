import { createSlice } from "@reduxjs/toolkit"

const YouTubeData = createSlice({
    name : "UT_Data",
    initialState:{
    items:[]
    },
    reducers:{
        Add_UT_Data :(state,action)=>{
            state.items.push(action.payload)
        }
    }
})

export const {Add_UT_Data} = YouTubeData.actions
export default YouTubeData.reducer