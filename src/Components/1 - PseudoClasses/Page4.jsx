
const Page4 = () => {

  const person = [
    {},
    {},
    {},
  ]

  return (
    <div className="page3 w-full min-h-full py-2 px-2  flex flex-col  items-center gap-8 bg-gradient-to-br from-[#0e113a] to-[#122212] text-white sm:items-start  ">
      <h1 className="text-2xl text-center bg-lime-600 px-2 py-2 rounded-md text-white font-semibold sm:text-start sm:text-4xl">4 : Styling Based on Parent State</h1>

      <div className="group w-[30%] flex justify-center items-center h-20 bg-red-800">
        <h1 className="hidden group-hover:block ">helo Guys</h1>
      </div>

      <div className="w-[60%] h-[40vh] bg-slate-50 flex gap-1  flex-col justify-center items-center">
        {
            person.map((data,id)=>(
              <div key={id} className="group/item w-[98%] h-[30%] text-black hover:bg-slate-200 px-4 rounded-md justify-between flex items-center" >
                <div className="flex items-center">
                  <img className="w-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <div className="">
                    <a href="{person.url}">Leslie</a>
                     <p>FD</p>
                  </div>
                </div>
                <a className="justify-self-end group/edit invisible hover:bg-slate-500 group-hover/item:visible ..." href="tel:{person.phone}">
                  <span className="group-hover/edit:text-gray-700 ...">Call</span>
                </a>
              </div>
            ))
        }   
      </div>

    </div>
  )
}

export default Page4
