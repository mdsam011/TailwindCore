/* eslint-disable react/prop-types */
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css'; // Choose an available theme
import { BsClipboard2CheckFill } from "react-icons/bs";
import { useEffect } from 'react';
import gsap from "gsap"
import { useGSAP } from "@gsap/react"


const CodeComponent = ({ code, language }) => {

    useEffect(() => {
        hljs.highlightAll()
    }, [])

    let { contextSafe } = useGSAP(() => {

    })

    const copyClipboard = contextSafe((e) => {
        navigator.clipboard.writeText(code)
        // alert("text Copied")

        gsap.to(e.target.previousSibling, {
            // top: 0,
            opacity: 1,
            display: "block",
            duration: 0.3,
        });
        setTimeout(() => {
            gsap.to(e.target.previousSibling, {
                opacity: 0,
                duration: 0.3,
            });
        }, 1300)
    })

    return (
        <div className='w-full flex flex-col mb-5 items-center justify-center sm:items-start relative '>
            <div className='w-[90%] bg-[#18484e] sm:w-[70%] sm:text-base rounded-t-lg relative  flex justify-between items-center px-4'>
                <h1 className='text-sm sm:text-base tex'>Example Code</h1>
                <div className='flex  items-center gap-1'>
                    <BsClipboard2CheckFill className='hidden opacity-0 text-sm transition-all duration-300 ease-out cursor-pointer active:scale-90 sm:text-lg' />
                    <button onClick={copyClipboard} className=' text-sm transition-all duration-300 ease-out cursor-pointer active:scale-90 sm:text-md' >Copy Code</button>
                </div>
            </div>
            <pre className=' bg-black rounded-b-lg relative w-[90%] break-words  text-sm  text-start p-0 overflow-hidden sm:w-[70%] sm:text-base'>
                <code contentEditable="true" id='codeBox' className={`${language} bg-[#0e252e] py-6 `} >
                    {code}
                </code>
            </pre>
        </div>
    )
}

export default CodeComponent
