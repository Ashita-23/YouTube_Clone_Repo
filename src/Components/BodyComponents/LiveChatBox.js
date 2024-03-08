import { useEffect , useState} from "react"
import { FirstName ,LastNames } from "../../Utils/UTAPIs"
import { useDispatch, useSelector } from "react-redux"
import {AddDataToCS } from "../../RStore/LiveChatData"
import {ToggleChatBox} from "../../RStore/ChatBoxDisplay"




const LiveChatBox = ()=>{
const dispatch = useDispatch()
const ChatDataToDisplay = useSelector((store)=> store.LiveChatData.items)
const  isChatBoxOpen = useSelector((store)=>store.ToggleChatBox.IsChatBoxOpen)
// console.log(isChatBoxOpen,"isChatBoxOpen")

// ===== dispatch an action for toggling Chat box =====================

// console.log(ChatDataToDisplay,"(store)=> store.LiveChatData.itema")
        useEffect(()=>{
   const setLiveChat = setInterval(()=>{
    dispatch(AddDataToCS({
        name:GetRandomName(),
        text:GetRandomText(12)
    }) )
   },2000)
//    console.log(setLiveChat , "setLiveChat")
   return()=> clearTimeout(setLiveChat)
        },[])

        const GetRandomName = ()=>{
            const FName  = FirstName[Math.floor(Math.random()*FirstName.length)]
            const LName  = LastNames[Math.floor(Math.random()*LastNames.length)]
            // console.log(FName+""+LName , "nams")
            const RandomName  = FName+""+LName ;
            return RandomName
            }

            const GetRandomText = (textLength)=>{
                let RandomText = " " ;
                const Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

                for(let i=0; i< textLength ; i++ ){
                    RandomText += Letters.charAt(Math.floor(Math.random()*Letters.length))
                }
                // console.log(RandomText,"text")
                return RandomText
            }

            return(  isChatBoxOpen ? 
    <div className="w-[24%] mt-2 mx-2 p-2 border h-[57%] shadow-sm flex item-center justify-center rounded-xl md:border border-red-500 w-[94%]  lg:w-[90%] xl:w-[96%] 2xl:w-[96%] h-[80%]">
    <div className="w-[94%] my-4  h-[94%]  border  border-slate-400 rounded-xl overflow-hidden 2xl: " >
        <h1 className="flex  w-[100%] px-3 py-2 h-[6%] bg-slate-300 justify-between content-center border border-b-slate-400 " >
        <span className="text-sm font-medium">Top Chat </span> <span className="text-md font-medium ">:</span></h1>
        <div className="flex flex-col-reverse  overflow-y-scroll scroll-smooth scrollbar-thin snap-y w-[100%]  h-[73%]  ">
           {ChatDataToDisplay.map((ChatData)=>( <LiveChatTextBox data = {ChatData} />)) }
        </div>
       <SendText/>
        </div>
    </div>:
         <div  className="w-[24%] mt-2 mx-1 p-2 border h-[5%] shadow-sm  rounded-xl md:border border-red-500 w-[94%]  lg:w-[90%] xl:w-[96%] 2xl:w-[96%] h-[3rem] ">
        <button onClick={()=>dispatch(ToggleChatBox(true)) } className="w-[100%] font-medium py-1  px-2 rounded-xl bg-slate-200 hover:bg-slate-300  ">Show chat</button></div> 
    )
}

const LiveChatTextBox = ({data})=>{
    // console.log(data,"LCd")
    return(<div className=" border border-b-slate-300 bg-slate-100 p-1">
    <span className="font-semibold">{data.name} : </span>
    <span className="px-1">{data.text}</span>
</div>)
}

const SendText = () =>{
     const [addMessage,setAddMessage] = useState("")
     const dispatch = useDispatch()
    // console.log("addMessage","addmessage")
    return(
 <form onSubmit={(E)=>{ E.preventDefault() 
  dispatch(AddDataToCS({
        name:"App User",
        text:addMessage }))
        setAddMessage("")
        }} className="flex flex-col w-[100%]  h-[20%]  2xl:h-[20%] " >
            <input type="text" placeholder="enter text" className="bg-slate-100 p-1 text-base outline-1 outline-blue-500 "  value={addMessage} onChange={(e)=>setAddMessage(e.target.value)}/>
            <button className="font-medium bg-slate-400 p-2 py-3">Send  <i className="fa-regular fa-paper-plane"></i></button>
            <button onClick={()=>dispatch(ToggleChatBox(false))} className="font-medium py-3 bg-slate-300 px-2  ">Hide chat</button>
           
        </form>
    )
}

export default LiveChatBox