import {configureStore} from "@reduxjs/toolkit"
import NavToggle from "./ToggelSlice"
import SearchCache from "./SearchCacheSlice"
import SearchItems from "./SearchItemSlice"
import YouTubeData from "./YouTubeDataSlice"
import LiveChatSlice from "./LiveChatData"
import ChatBoxDisplay from "./ChatBoxDisplay"
import FilterItems from "./FilterItemsSlice"
import SearchMessage from "./NothingFoundToggel"
const AppStore = configureStore({
    reducer:{
     Toggle : NavToggle,
     SearchCacheData : SearchCache,
     SearchText_FromBtns :SearchItems,
     SearchItems:SearchItems,
     You_Tube_Data :YouTubeData,
     LiveChatData : LiveChatSlice,
     ToggleChatBox : ChatBoxDisplay,
      FilteredItems: FilterItems,
      SearchErrorMessage: SearchMessage
    }
})

export default AppStore