

const LiveChatBox = ()=>{
    return(<div className="w-[24%] mt-2 mx-4 border h-[57%] border-red-400 flex item-center justify-center rounded-xl">
    <div className="w-[90%] my-4  h-[94%]  border  border-gray-400 rounded-xl overflow-hidden" >
        <h1 className="flex  w-[100%] px-3 py-2 h-[6%] bg-gray-200 justify-between content-center " ><span>Top Chat </span> <span>:</span></h1>
        <div className="flex flex-col overflow-y-scroll w-[100%]  h-[74%] border  border-blue-400  ">
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
        </div>
        <div className="flex flex-col w-[100%]   h-[20%] border  border-red-400  " >
            <input type="text" placeholder="enter text" className="bg-gray-100 p-2"/>
            <button className="bg-gray-400 p-2 ">send  <i className="fa-regular fa-paper-plane"></i></button>
            <button className="border border-gray-400 p-2 ">hidechat</button>
           
        </div>
        </div>
    </div>)
}

export default LiveChatBox