import CodeComponent from "./CodeComponent"


const Page2 = () => {

    const Childs = ["first", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh/last"]
    const childPseudoClasses = ["first", "last", "odd", "even"]
    
    const paraJSx = `{
    Childs.map((elem, id) => (
    <p key={id}
        className="first:text-red-600 text-sm  last:text-green-600 even:text-yellow-400">
        I am the {elem} child
    </p>
    ))
}`

    return (
        <div className="page2 w-full min-h-full pb-10 px-2  flex flex-col items-center gap-6  bg-gradient-to-tr from-[#0e113a] to-[#122212] text-white sm:items-start">

            <h1 className="text-2xl text-center  bg-lime-600 px-2 py-2 rounded-md text-white font-semibold sm:text-4xl ">2: First, Last, Odd & Even</h1>
            <div className="w-[100%] flex justify-center sm:w-full sm:px-20">

                <div className="firstPS flex w-[95%] flex-col gap-6 justify-center items-center sm:items-start ">
                    <div className="w-full flex flex-col items-center gap-2 ">

                        {
                            childPseudoClasses.map((elem, id) => (
                                <p key={id} className="text-md tracking-tighter w-[90%] leading-none text-center sm:text-start sm:w-full">
                                    <span className="text-cyan-500 text-lg ">{id + 1}: {elem}</span> This modifier is used to add {elem}-child pseudo
                                    className.
                                </p>
                            ))
                        }
                    </div>
                    <div className="childrens  border-2 border-cyan-500 w-[70%] py-4   text-center">
                        {
                            Childs.map((elem, id) => (
                                <p key={id}
                                    className=
                                    "first:text-red-600 text-sm  last:text-green-600 even:text-yellow-400">
                                    I am the {elem} child
                                </p>
                            ))
                        }
                    </div>
                    <CodeComponent code={paraJSx} language={"jsx"} />

                </div>
            </div>
        </div>

    )
}

export default Page2
