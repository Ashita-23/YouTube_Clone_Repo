import {configureStore} from "@reduxjs/toolkit"
import NavToggle from "./ToggelSlice"
import SearchCache from "./SearchCacheSlice"
import SearchItems from "./SearchItemSlice"
import YouTubeData from "./YouTubeDataSlice"
const AppStore = configureStore({
    reducer:{
     Toggle : NavToggle,
     SearchCacheData : SearchCache,
     SearchText_FromBtns :SearchItems,
     You_Tube_Data :YouTubeData,
    }
})

export default AppStore