
import home from "../../assets/Strokehome.png"
import Shorts from "../../assets/youtubeshorts.png"
import Subscriptions from "../../assets/videoSubscriber.png"
import Library from "../../assets/videogallery.png"
import { useSelector } from "react-redux"

 const SmallSideBar=()=>{
    const IsMenuOpen = useSelector((store)=>store.Toggle.IsMenuOpen)
    if (!IsMenuOpen) return null;
    return(<div className="mt-10 mb-0 border border-green-600">
      <ul className="p-1 text-base  border border-red-600 flex justify-around sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col 3xl:flex-col 4xl:flex-col 5xl:flex-col 6xl:flex-col">
                <li className="px-2 py-1 capitalize mx-1 text-[0.7rem]  rounded-lg sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[0.9] 3xl:text-[0.9rem] 4xl:text-[0.9rem] 5xl:text-[0.9rem] 6xl:text-[0.9rem] hover:bg-gray-300"><img src={home} alt="img" className="w-[20px]"/></li>
                <li className="px-2 py-1 capitalize mx-1 text-[0.7rem]  rounded-lg sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[0.9] 3xl:text-[0.9rem] 4xl:text-[0.9rem] 5xl:text-[0.9rem] 6xl:text-[0.9rem] hover:bg-gray-300"><img src={Shorts} alt="img" className="w-[20px]"/></li>
                <li className="px-2 py-1 capitalize mx-1 text-[0.7rem]  rounded-lg sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[0.9] 3xl:text-[0.9rem] 4xl:text-[0.9rem] 5xl:text-[0.9rem] 6xl:text-[0.9rem] hover:bg-gray-300" ><img src={Subscriptions} alt="img" className="w-[20px]"/></li>
                <li className="px-2 py-1 capitalize mx-1 text-[0.7rem]  rounded-lg sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[0.9] 3xl:text-[0.9rem] 4xl:text-[0.9rem] 5xl:text-[0.9rem] 6xl:text-[0.9rem] hover:bg-gray-300" ><img src={Library} alt="img" className="w-[20px]"/></li>   
            </ul>
    </div>)
}


export default SmallSideBar


