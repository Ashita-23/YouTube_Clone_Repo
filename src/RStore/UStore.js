import {configureStore} from "@reduxjs/toolkit"
import NavToggle from "./ToggelSlice"
import SearchCache from "./SearchCacheSlice"
const AppStore = configureStore({
    reducer:{
     Toggle : NavToggle,
     SearchCacheData : SearchCache,
    }
})

export default AppStore