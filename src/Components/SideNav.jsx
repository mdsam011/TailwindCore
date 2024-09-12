/* eslint-disable react/prop-types */

import { Link, useLocation } from 'react-router-dom'

const SideNav = ({ closeMenu, givepath, activeNav }) => {

    let loc = useLocation()

    givepath(loc.pathname)
    console.log(activeNav == "Pseudo Class")

    return (
        <div onDoubleClick={closeMenu} id="sidenavSM" className='h-[85vh] top-[5vh] left-[-100%] absolute
         w-full bg-gradient-to-t from-[#0e113a] to-[#132013cc]  flex-col flex gap-4 items-start px-10 
        backdrop-blur-[5px] text-2xl py-6 z-20 sm:hidden'>

            <Link to="/PseudoClasses" className={`${activeNav == "Pseudo Class" ? "text-cyan-500" :"text-slate-300"} active:scale-90 transition-all ease-out duration-300 `} >Pseudo CLasses</Link>
           
            <Link to="/PseudoElements" className={`${activeNav == "Pseudo Elements" ? "text-cyan-500" : "text-slate-300"} active:scale-90 transition-all ease-out duration-300 `} >Pseudo Elements</Link>
        
            <Link to="/ResponsiveDesigns" className={`${activeNav == "Responsive Designs" ? "text-cyan-500" : "text-slate-300"} active:scale-90 transition-all ease-out duration-300 `} >Responsive Designs</Link>

            <Link to="/DarkMode" className={`${activeNav == "Dark Mode" ? "text-cyan-500" : "text-slate-300"} active:scale-90 transition-all ease-out duration-300 `} >Dark Mode</Link>
        

        </div>
    )
}

export default SideNav
