
const VideoCard = ({data})=>{
    return( <div className=" rounded-2xl p-1 w-[20rem] m-2 xxsm:w-[14.5rem] xsm:w-[16rem] sm:w-[17rem] md:w-[20rem] lg:w-[20rem] xl: border border-green-500" key={data?.id} >
    <img src={data?.snippet?.thumbnails?.medium?.url} alt="thumbnail" className="rounded-2xl "/>
    <div className="flex justify-evenly items-start">
   <span className="text-2xl xsm:text-xsm  px-3 py-2 m-1 rounded-full bg-gray-100 hover:bg-gray-200"><i className="fa-regular fa-circle-user "></i></span>
    <div className="overflow-hidden">   
    <p className="text-sm truncate font-medium xsm:text-xsm">{data?.snippet?.title}</p>
       <p className="text-md xsm:text-sm">{data?.snippet?.channelTitle}</p>
       <p className="text-xs xsm:text-xsm">{data?.statistics?.viewCount} views</p></div>

    </div>
   </div>)
}

export const  AddVideoCard = ({data})=>{
   return(
     
      <div className="border border-red-500 bg-white rounded-2xl hover:bg-black-200 mx-2 my-1">
         <VideoCard data={data} key={data?.id}></VideoCard>
         </div>
      )
   
}

export default VideoCard