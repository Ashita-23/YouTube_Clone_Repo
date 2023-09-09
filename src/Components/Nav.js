import YT_LOGO from  "../assets/ytlogo.png"


const Navigation = ()=>{
    return(<div className="flex justify-around bg-white p-2 drop-shadow-md" >
            <div className=""><span className="text-2xl"><i className="fa-solid fa-bars"></i></span></div>
            <div  className="" ><img src={YT_LOGO} alt="YT_logo" className="w-32"/></div>
            <div  className=" w-[50rem] flex">
            <input type="search" className="border px-3 border-black-400 rounded-l-full w-[40rem] focus:outline outline-blue-400" />
            <span  className="text-xl px-3 py-2  border border-black-200 rounded-r-full mr-2 bg-gray-100 hover:bg-gray-300" ><i className="fa-solid fa-magnifying-glass"></i></span>
            <span  className="text-xl px-4 py-2 border border-black-200 rounded-full mx-2 bg-gray-100 hover:bg-gray-300"><i className="fa-solid fa-microphone hover:bg-black-200"></i></span></div>
            <div  className="w-[10rem] flex justify-around">
            <span className="text-2xl  px-3 py-2 rounded-full bg-gray-50 hover:bg-gray-200"><i className="fa-regular fa-square-plus"></i></span>
            <span className="text-2xl  px-3 py-2 rounded-full bg-gray-50 hover:bg-gray-200"><i className="fa-regular fa-bell"></i></span>
            <span className="text-2xl  px-3 py-2  rounded-full bg-gray-50 hover:bg-gray-200 "><i className="fa-regular fa-circle-user"></i></span>
            </div>
        </div>)
}


export  default Navigation