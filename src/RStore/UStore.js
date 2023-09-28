import {configureStore} from "@reduxjs/toolkit"
import NavToggle from "./ToggelSlice"
const AppStore = configureStore({
    reducer:{
     Toggle : NavToggle,
    }
})

export default AppStore