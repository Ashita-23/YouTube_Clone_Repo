import {createSlice} from "@reduxjs/toolkit"

const NavToggle = createSlice({
name:"NavToogleBar",
initialState:{
    IsMenuOpen:true
},
reducers:{
   ToggleMenu:(state)=>{
     state.IsMenuOpen = !state.IsMenuOpen
   } ,
   CloseMenu:(state)=>{
    state.IsMenuOpen = !state.IsMenuOpen
   }
}
})



export const  {ToggleMenu,CloseMenu} = NavToggle.actions
export default NavToggle.reducer