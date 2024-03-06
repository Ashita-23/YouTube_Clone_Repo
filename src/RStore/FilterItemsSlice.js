import { createSlice } from "@reduxjs/toolkit";

const FilterItems = createSlice({ name:"LiveChatStorage",
initialState:{
    items:[]
},
reducers:{
    AddItems : (state,action)=>{
       state.items.push(action.payload)
    
    }
}
})


export const {AddItems}= FilterItems.actions
export default FilterItems.reducer

// splice(1, 1, "Lemon", "Kiwi");