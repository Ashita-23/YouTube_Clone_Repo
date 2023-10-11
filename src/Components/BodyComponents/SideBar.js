import {useSelector} from "react-redux"

const SideBar = ()=>{

    const IsMenuOpen = useSelector((store)=>store.Toggle.IsMenuOpen)
    // console.log(IsMenuOpen,"IsMenuOpen")

    if (!IsMenuOpen) return null;
    return(<>
           {/* side bar */}
           <div className="border border-green-950 w-[10%] h-[54rem] mt-16 px-1 overflow-y-scroll scroll-smooth scrollbar-hide snap-y ">
            <ul className="p-1 mt-2 text-base mb-2 border-b-2">
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">Home</li>
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">Shorts</li>
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300" >Subscriptions</li>
            </ul>
            <ul className="p-1 mb-2 border-b-2">
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300" >Library</li>
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">History</li>
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">Your Videos</li>
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">watch Later</li>
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">Liked videos</li>
            </ul>
            <ul className="p-1 mb-2 border-b-2">
            <h2  className="text-md font-semibold ml-1 ">Explore</h2>
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">Trending</li>
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">Shopping</li>
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">Music</li>
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">Films</li>
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">Gaming</li>
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">News</li>
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">Sport</li>
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">Learing</li>
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">Fashion & Beauty</li>
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">Podcasts</li>
                </ul>
            <ul className="p-1 mb-2 border-b-2">
            <h2 className="text-md font-semibold ml-1 ">More from youtube</h2>
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">YouTube premium</li>
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">YouTube studio</li>
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">YouTube music</li>
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">YouTube kids</li>
              
            </ul>
            <ul className="p-1 mb-2 border-b-2 ">
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">settings</li>
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">report History</li>
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">help</li>
                <li className="px-2 py-1 capitalize mx-1  rounded-lg hover:bg-gray-300">send feedback</li>
              
            </ul>
            <div className="py-1 mb-4  ">
            <p className="text-sm p-1 font-semibold text-gray-500 text-left break-all ">AboutPressCopyrightContact usCreatorAdvertiseDevelopers</p>
            <p className="text-sm p-1 font-semibold text-gray-500">TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</p>
            <p className="text-sm p-1 font-semibold text-gray-500">© 2023 Google LLC</p>
           </div>
        </div>
    </>)
}

export default SideBar