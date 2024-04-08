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
    <div className="w-[24%] mt-2 mx-2  p-[1.5rem] border border-red-500 h-[40rem] shadow-sm flex item-center justify-center rounded-xl xxsm:mb-2  xsm:mb-2  md: mb-2 w-[94%]  lg:w-[90%] xl:w-[96%] xl: 2xl:w-[96%]">
    <div className="w-[94%] h-[100%] mb-[.5rem] border border-orange-400 overflow-hidden rounded-xl md: lg: xl: 2xl:my-2  " >
        <h1 className="flex  w-[100%] px-3 py-2 h-[2.2rem] bg-slate-300 justify-between content-center border border-b-slate-400 lg:py-1 2xl:py-1 " >
        <span className="text-sm font-medium 2xl:py-[0.1rem]">Top Chat </span> <span className="text-md font-medium ">:</span></h1>
        <div className="flex flex-col-reverse  overflow-y-scroll scroll-smooth scrollbar-thin snap-y w-[100%]  h-[75%] border border-blue-800 ">
           {ChatDataToDisplay.map((ChatData)=>( <LiveChatTextBox data = {ChatData} />)) }
        </div>
       <SendText/>
        </div>
    </div>:
         <div  className="w-[24%] flex justify-center mt-2  mx-1 p-2 border h-[5%] shadow-sm  rounded-xl  md:border border-red-500 w-[94%] h-[7%] lg:w-[90%] xl:w-[96%] 2xl:w-[96%] h-[3rem] ">
        <button onClick={()=>dispatch(ToggleChatBox(true)) } className="w-[100%] font-medium py-1 px-2 rounded-xl bg-slate-200 hover:bg-slate-300   ">Show chat</button></div> 
    )
}

const LiveChatTextBox = ({data})=>{
    // console.log(data,"LCd")
    return(<div className=" border border-b-slate-300 bg-slate-100 p-1 2xl:py-[0.2]">
    <span className="font-semibold lg:text-sm 2xl:text-sm">{data.name} : </span>
    <span className="px-1 lg:text-sm 2xl:text-sm">{data.text}</span>
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
        }} className="flex flex-col w-[100%]  h-[7rem] border border-green-500 overflow-hidden " >
            <input type="text" placeholder="enter text" className="bg-slate-100 p-1 text-base outline-1 outline-blue-500 2xl:text-sm py-[0.2rem] "  value={addMessage} onChange={(e)=>setAddMessage(e.target.value)}/>
            <button className="font-medium bg-slate-400 p-2 py-3 lg:py-[0.5rem] text-sm 2xl: py-[0.5rem]">Send  <i className="fa-regular fa-paper-plane"></i></button>
            <button onClick={()=>dispatch(ToggleChatBox(false))} className="font-medium py-3 bg-slate-300 px-2 lg:py-[0.5rem] text-sm 2xl: py-[0.5rem]  ">Hide chat</button>
           
        </form>
    )
}

export default LiveChatBox