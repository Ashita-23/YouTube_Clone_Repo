import { useLayoutEffect, useState } from "react"


const useScreenSize = ()=>{
    const [screenSize,setScreenSize] = useState()
    useLayoutEffect(()=>{
        const updateScreen=()=>{
            setScreenSize(window.screen.width)
        }
        window.addEventListener("resize",updateScreen)
return()=>{
    window.addEventListener("resize",updateScreen)
} },[])
    return screenSize
}
export default useScreenSize