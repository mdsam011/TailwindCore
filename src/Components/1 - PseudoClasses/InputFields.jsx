/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const InputFields = ({ id, subhead, type, name, setData }) => {


    return (
        <div id="inputFields" className="relative w-full">
            <input
                min={18} max={100}
                onChange={setData}
                className="peer text-lime-500 w-full invalid:text-red-700 out-of-range:text-orange-500  outline-none px-1 py-2 bg-transparent border-b-[1px] border-b-lime-500 placeholder:text-yellow-400" 
                placeholder={name}
                required type={type} 
                name={name} 
                id={id} />

            {/* <span onClick={focusInp} className={` peer-focus:opacity-0 peer-required:text-yellow-400   peer-valid:opacity-0 transition-all duration-500 ease-out absolute text-lime-500 px-1 py-2 left-0`}>{subhead}</span> */}
        </div>
    )
}

export default InputFields
