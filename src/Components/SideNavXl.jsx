/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'

const SideNavXl = ({activeNav}) => {
    console.log("active nav : ",activeNav)
  return (
      <div className="hidden  text-slate-300  sm:w-[25%] h-[100%]  
           sm:flex sm:flex-col  items-start text-xl pl-10 pt-14 gap-4  bg-gradient-to-br from-black to-[#292650]"
      >
          <Link to="/PseudoClasses" 
          className={`${activeNav == "Pseudo Class"?"text-cyan-400":""} active:scale-90 transition-all duration-300 ease-out`} >Pseudo Class</Link>
          
          <Link to="/PseudoElements" 
          className={`${activeNav == "Pseudo Elements"?"text-cyan-400":""} active:scale-90 transition-all duration-300 ease-out`}  >Pseudo Element</Link>
          
          <Link to="/ResponsiveDesigns" 
              className={`${activeNav == "Responsive Designs" ? "text-cyan-400" : ""} active:scale-90 transition-all duration-300 ease-out`}  >Responsive Designs</Link>
          
          <Link to="/DarkMode" 
              className={`${activeNav == "Dark Mode" ? "text-cyan-400" : ""} active:scale-90 transition-all duration-300 ease-out`}  >Dark Mode</Link>

      </div>
  )
}

export default SideNavXl
