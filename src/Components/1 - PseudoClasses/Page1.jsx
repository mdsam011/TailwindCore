import { useCallback } from "react"
import CodeComponent from "./CodeComponent";

const Page1 = () => {

    let hovercode = `<button class="hover:bg-cyan-500 hover:text-white"> </button>`
    let activecode = `<button class="active:scale-75"> </button>`
    let focuscode = `<input type="text" className="focus:outline-cyan-400"/>`
    
    const renderdivs = useCallback((n, head, msg,code,language) => {


        return (
            <div className={`${head}PS flex flex-col w-[100%]  gap-2 justify-center items-center sm:w-full sm:items-start`}>
                <p className="text-md tracking-tighter w-[90%] text-start sm:text-base sm:text-start sm:w-[100%]">
                    <span className="text-cyan-500 text-lg font-semibold sm:text-xl">{n}: {head}:</span> This modifier is used to add {head} pseudo className using Tailwind CSS.
                </p>
                <CodeComponent code={code} language={language} />
                {
                    head == "focus"
                        ?
                        <input className="px-2 w-1/2 mb-2 py-1 bg-white rounded-xl text-black focus:outline-cyan-400" placeholder={`${msg}`}></input>
                        :
                        <button
                            className={`px-8 py-1 mb-2 bg-white rounded-xl transition-all duration-300 ease font-bold text-black
                            ${head == "hover" ? "hover:bg-cyan-500 hover:text-white" : "active:scale-75"} `}
                        >
                            {msg}
                        </button>
                }
            </div>
        )
    }, [])


    


    return (
        <div className="page1 w-full min-h-full pb-10 px-2 pt-4 flex flex-col items-center gap-4 sm:gap-6 text-white bg-gradient-to-br from-[#0e113a] to-[#122212]  ">
            <h1 className="
            text-2xl text-center bg-lime-600 px-2 py-2 rounded-md text-white font-semibold
            sm:text-4xl sm:self-start
            ">1: Hover, Focus, and Active</h1>
            <div className="flex w-[100%] flex-col gap-4 sm:gap-4 sm:w-full sm:px-20">
                {renderdivs(1, "hover", "Hover Me",hovercode,"html")}
                {renderdivs(2, "focus", "focus Me",focuscode,"html")}
                {renderdivs(3, "active", "Click Me",activecode,"html")}
            </div>
        </div>

    )
}

export default Page1
