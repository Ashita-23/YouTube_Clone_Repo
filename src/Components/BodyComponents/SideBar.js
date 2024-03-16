import {useSelector} from "react-redux"
import {useEffect, useState} from "react"
import { Link } from "react-router-dom"

const SideBar = ()=>{

    const IsMenuOpen = useSelector((store)=>store.Toggle.IsMenuOpen)
    // console.log(IsMenuOpen,"IsMenuOpen")
    const [SecNav,setSecNav]=useState(false)
    // console.log(SecNav,"SN")

const  [screenSize] = useState({size:window.screen.width})



useEffect(()=>{

    if(screenSize.size< 820){
        setSecNav(true)
    }else if (screenSize.size > 820 ) {
        setSecNav(false)
    }
},[])
      


// if(screenSize < 820 ? setScreenSize(true):setScreenSize(false))
    if (!IsMenuOpen) return null;
    return (!SecNav? <div className=" flex flex-col border-pink-300 w-[10%] h-[54rem] mt-16 px-1 overflow-y-scroll scroll-smooth scrollbar-hide snap-y z-5 ">
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
        </div>:
        <div className="border border-red-900 mt-10 ml-[-5px] h-[20rem]  flex flex-col pt-5 xsm:pl-1 pr-1 pt-5 sm:pl-1 pr-1 pt-5 md:pl-1 pr-1 pt-5  ">
            <span className="text-md p-1"><i className="fa-solid fa-house"></i></span>
            <span className="text-md p-1"><i className="fa-solid fa-film"></i></span>
            <span className="text-md p-1"><i className="fa-regular fa-square-plus"></i></span>
            <span className="text-md p-1"><i className="fa-regular fa-circle-user"></i></span>
        </div>
         )
    
}

export default SideBar