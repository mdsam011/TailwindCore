import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { useState } from "react";

const DarkMode = () => {

    const {contextSafe} = useGSAP(()=>{
    
    })

    const [darkoff,setdark] = useState(false)

    const darkMode = contextSafe((e) =>{
        if(!darkoff)
        {
            console.log("hello")
            gsap.to("#roller", {
                right:"60%",
                rotate:-180,
            });
            gsap.to(e.target.parentNode,{
                backgroundColor:"#0e233b"
            })
        }
        else{
            gsap.to("#roller", {
                right:"0%",
                rotate:0,
            });
            gsap.to(e.target.parentNode,{
                backgroundColor:"cyan",
                border:"1px solid white"
            })
        }
        setdark(!darkoff)
        
    })

    return (
        <div className={`w-full h-full ${darkoff?"":"dark"}`}>
            <div id="DarkMode" className=' text-white dark:bg-zinc-900  bg-slate-100 w-full h-full '>
                <h1 className=" 
             text-center text-3xl  py-4  border-b-2 border-[#1a351a] bg-gradient-to-t from-[rgb(14,17,58)] to-[#1a351a] 
             sm:text-4xl sm:py-4 ">⭐Dark Mode </h1>
                <h1 className="text-black dark:text-white">Hi this where we are testing the Tailwind css DarkMode</h1>


                <div  className="w-[6%] rounded-full border-[1px] relative border-black bg-cyan-400 h-[4%] mx-5 mt-10 ">
                    <div id="roller" onClick={darkMode} 
                        className={`h-full   absolute rounded-full right-[0%]  w-[40%] bg-gradient-to-r from-white via-red-100 to-slate-700 cursor-pointer`}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DarkMode
