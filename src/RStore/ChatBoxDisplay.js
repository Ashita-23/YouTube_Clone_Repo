import { createSlice } from "@reduxjs/toolkit";

const ChatBoxDisplay = createSlice({
    name : "Chat Box Display",
    initialState:{
        IsChatBoxOpen:true
    },
    reducers:{
        ToggleChatBox:(state)=>{
   state.IsChatBoxOpen = !state.IsChatBoxOpen
        }
    }
})

export const {ToggleChatBox}=ChatBoxDisplay.actions
export default ChatBoxDisplay.reducer