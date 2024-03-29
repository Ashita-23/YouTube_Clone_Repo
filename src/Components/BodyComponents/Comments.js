import{commentsData} from "../../Utils/UTAPIs"



const CommentCard= ({data})=>{
    const {name,text} = data
    return(
        <div className="h-[auto] w-[100%] flex bg-slate-200 m-1 rounded-lg ">
              <span className="text-2xl  px-3 py-2 m-1 rounded-full bg-gray-100 hover:bg-gray-200"><i className="fa-regular fa-circle-user"></i></span>
              <div className="px-2">
                <p >{name}</p>
                <p>{text}</p>
              </div>
        </div>
    )
}

const CommentList = ({comments})=>{
    // console.log(comments,"DATA")
    // console.log(comments[0].replies,"replies")
    return comments.map((comment,index)=>( <div><CommentCard data={comment} key={index}></CommentCard>
    <div className=" border-l-4 ml-2 border-red-500">
     {/* <CommentList comments={comment.replies}/> */}
     {/* <CommentCard data={comment}></CommentCard>
     <CommentCard data={comment}></CommentCard>
     <CommentCard data={comment}></CommentCard> */}

</div>
</div>)
     )
}




const CommentCounter = ()=>{
    return(<div className="h-[auto] w-[100%] flex flex-col  p-1 border border-violet-950">
        <h2 className="text-md font-semibold">Comments :</h2>
     
            <CommentList comments={commentsData}></CommentList>
    </div>)
}
export default CommentCounter