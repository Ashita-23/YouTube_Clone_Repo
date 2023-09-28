import {useSelector} from "react-redux"

const SideBar = ()=>{

    const IsMenuOpen = useSelector((store)=>store.Toggle.IsMenuOpen)
    console.log(IsMenuOpen,"IsMenuOpen")

    if (!IsMenuOpen) return null;
    return(<>
           {/* side bar */}
           <div className=" border border-gray-400 w-[10%] h-[90%] mt-16 ">
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscriptions</li>
            </ul>
            <ul>
                <li>Library</li>
                <li>History</li>
                <li>Your Videos</li>
                <li>watch Later</li>
                <li>Liked videos</li>
            </ul>
            <ul>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Films</li>
                <li>Gaming</li>
                <li>News</li>
                <li>Sport</li>
                <li>Learing</li>
                <li>Fashion & Beauty</li>
            </ul>
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscriptions</li>
            </ul>
            <ul>
                <li>Library</li>
                <li>History</li>
                <li>Your Videos</li>
                <li>watch Later</li>
                <li>Liked videos</li>
            </ul>
            <ul>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Films</li>
                <li>Gaming</li>
                <li>News</li>
                <li>Sport</li>
                <li>Learing</li>
                <li>Fashion & Beauty</li>
            </ul>
        </div>
    </>)
}

export default SideBar