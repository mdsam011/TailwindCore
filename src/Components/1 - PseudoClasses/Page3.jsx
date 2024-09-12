import { useCallback, useMemo, useState } from "react"
import InputFields from "./InputFields"
import CodeComponent from "./CodeComponent"

const Page3 = () => {




  const requiredCode = `<input className="peer" type={type} name={name} id={id} />
<span className=" peer-required:text-yellow-400">{subhead}</span>`
  const validCode = `<input className="peer" type={type} name={name} id={id} />
<span className=" peer-valid:opacity:0">{subhead}</span>`
const invalidCode = `<input className="peer invalid:text-red-600" type={type} name={name} id={id} />
<span className=" peer-valid:opacity:0">{subhead}</span>`
const disabledCode = `<input disabled={formdata.Password == ""} type="submit" value="Submit" className="disabled:opacity-30 />`
const outofRangeCOde = `<input className="out-of-range:text-orange-500" type={type} name={name} id={id} />
<span className=" peer-valid:opacity:0">{subhead}</span>`



  let renderheadings = useCallback((n, head,code,language) => {
    return (
      <>
        <p className="text-md leading-none mb-2 tracking-tighter w-[90%] text-start sm:text-base sm:text-start sm:w-[100%]">
          <span className="text-cyan-500 text-lg font-semibold sm:text-xl">{n}: {head}:</span> This modifier is used to style {head} state of a form .
        </p>
        <CodeComponent code={code} language={language}  />
      </>
    )
  }, [])

  const [formdata, setformdata] = useState(
    {
      Name: "",
      Email: "",
      Password: "",
      Age:"",
    }
  )

  let setData = (e) => {
    if (e.target.name == "Name") {
      setformdata({ ...formdata, Name: e.target.value })
    }
    if (e.target.name == "Email") {
      setformdata({ ...formdata, Email: e.target.value })
    }
    if (e.target.name == "Password") {
      setformdata({ ...formdata, Password: e.target.value })
    }
    if (e.target.name == "age") {
      setformdata({ ...formdata, Age: e.target.value })
    }
    console.log(formdata)
  }

  let handle = (e) => {
    const formdata = new FormData(e.target)
    const obj = Object.fromEntries(formdata.entries())
    console.log(obj)
    e.preventDefault()
    alert(`User: ${obj.Name}, Email : ${obj.Email} ,Age:${obj.age}`)
  }

  const ipfield = useMemo(() => [
    {
      id: "username",
      subhead: "User",
      type: "text",
      name: "Name"
    },
    {
      id: "email",
      subhead: "Email",
      type: "email",
      name: "Email"
    },
    {
      id: "pass",
      subhead: "Password",
      type: "password",
      name: "Password"
    },
    {
      id: "Age",
      subhead: "Age",
      type: "number",
      name: "age"
    },
  ], [])


  return (
    <div className="page3  pb-20 w-full min-h-full py-2 px-2  flex flex-col  items-center gap-8 bg-gradient-to-br from-[#0e113a] to-[#122212] text-white sm:items-start  ">
      <h1 className="text-2xl text-center bg-lime-600 px-2 py-2 rounded-md text-white font-semibold sm:text-start sm:text-4xl">3 : Form States</h1>

      <div id="formstates" className="w-full flex flex-col justify-center items-center sm:items-start sm:px-20">
        {renderheadings(1, "required",requiredCode,"html")}
        {renderheadings(2, "valid",validCode,"html")}
        {renderheadings(3, "invalid",invalidCode,"html")} 
        {renderheadings(4, "disable",disabledCode,"html")}
        {renderheadings(5, "out-of-range",outofRangeCOde,"html")}

        <form onSubmit={handle} className="border-2 border-[#84cc16] bg-[#2032351e] flex flex-col gap-2 mt-2 w-[90%]  items-center rounded-lg backdrop-blur-lg  px-10 py-10 justify-center
        sm:w-[50%]">
          <h1 className="text-center py-2 w-full bg-lime-500 text-black rounded-md font-semibold">Test Form</h1>
          {
            ipfield.map((data, id) => (
              <InputFields key={id} id={data.id} subhead={data.subhead} type={data.type} name={data.name} setData={setData} />
            ))
          }
          <div id="inputFields" className="relative ">
            <input disabled={formdata.Password == ""} type="submit" value="Submit" className="disabled:opacity-30 active:scale-90 cursor-pointer px-10 rounded-md py-2 bg-lime-400 text-black font-semibold mt-5" />
          </div>

        </form>
      </div>

    </div>
  )
}

export default Page3
