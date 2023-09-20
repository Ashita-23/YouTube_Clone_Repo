
const VideoCard = ({data})=>{
    return( <div className=" rounded-2xl p-1 w-[20rem] m-2" >
    <img src={data?.snippet?.thumbnails?.medium?.url} alt="thumbnail" className="rounded-2xl "/>
    <div className="flex justify-evenly items-start">
   <span className="text-2xl  px-3 py-2 m-1 rounded-full bg-gray-100 hover:bg-gray-200"><i className="fa-regular fa-circle-user"></i></span>
    <div className="overflow-hidden">   
    <p className="text-sm truncate font-medium ">{data?.snippet?.title}</p>
       <p className="text-md">{data?.snippet?.channelTitle}</p>
       <p className="text-xs ">{data?.statistics?.viewCount} views</p></div>

    </div>
   </div>)
}

export const  AddVideoCard = ({data})=>{
   return(
     
      <div className="border border-red-500 bg-white rounded-2xl hover:bg-black-200 m-1">
         <VideoCard data={data} ></VideoCard>
         </div>
      )
   
}

export default VideoCard