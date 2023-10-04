import { createSlice } from "@reduxjs/toolkit";


const LiveChatSlice = createSlice({
    name:"LiveChatStorage",
    initialState:{
        items:[]
    },
    reducers:{
        AddDataToCS : (state,action)=>{
           if(state.items.length > 16) state.items.pop()
  state.items.unshift(action.payload)
        }
    }
})

export const {AddDataToCS} = LiveChatSlice.actions
export default LiveChatSlice.reducer