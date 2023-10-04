import { useEffect } from "react"
import { FirstName ,LastNames } from "../../Utils/UTAPIs"
import { useDispatch, useSelector } from "react-redux"
import {AddDataToCS } from "../../RStore/LiveChatData"




const LiveChatBox = ()=>{

const dispatch = useDispatch((store)=> store.LiveChatData.items)
    // const LiveChatData = [
    //     {
    //         name:"abcd",
    //         text:"this is an livechat box"
    //     },]
const ChatDataToDisplay = useSelector((store)=> store.LiveChatData.items)
// console.log(ChatDataToDisplay,"(store)=> store.LiveChatData.itema")
        useEffect(()=>{
   const setLiveChat = setInterval(()=>{
    // console.log(GetRandomName(),"name")
    // console.log( GetRandomText (12),"text")
    dispatch(AddDataToCS({
        name:GetRandomName(),
        text:GetRandomText(12)
    }) )
   
   },2000)

//    console.log(setLiveChat , "setLiveChat")

   return()=>{
    clearTimeout(setLiveChat)
   }
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

    return(<div className="w-[24%] mt-2 mx-4 border h-[57%] border-red-400 flex item-center justify-center rounded-xl">
    <div className="w-[90%] my-4  h-[94%]  border  border-gray-400 rounded-xl overflow-hidden" >
        <h1 className="flex  w-[100%] px-3 py-2 h-[6%] bg-gray-200 justify-between content-center " ><span>Top Chat </span> <span>:</span></h1>
        <div className="flex flex-col-reverse overflow-y-scroll w-[100%]  h-[73%] border  border-blue-400  ">

           {ChatDataToDisplay.map((ChatData)=>( <LiveChatTextBox data = {ChatData} />)) }
          
        </div>
        <div className="flex flex-col w-[100%]   h-[20%] border  border-red-400  " >
            <input type="text" placeholder="enter text" className="bg-gray-100 p-2"/>
            <button className="bg-gray-400 p-2 ">send  <i className="fa-regular fa-paper-plane"></i></button>
            <button className="border border-gray-400 p-2 ">hidechat</button>
           
        </div>
        </div>
    </div>)
}
const LiveChatTextBox = ({data})=>{
    // console.log(data,"LCd")
    return(<div className="border border-gray-400 p-1">
    <span className="font-semibold">{data.name} : </span>
    <span>{data.text}</span>
</div>)
}

export default LiveChatBox