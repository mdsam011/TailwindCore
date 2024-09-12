import { Link } from 'react-router-dom'
import tailwindLogo from "../assets/Tailwind CSS.png"

const NavBar = () => {
  return (
      <nav className="w-full h-[10vh] px-2 sm:px-4 text-white bg-gradient-to-r from-[#0e113a] to-[#292650] items-center flex  top-0 border-b-[1px] border-[#cb9af8] gap-3">
            <img src={tailwindLogo} className='w-[10%] sm:w-[3%]' alt="" />
          <Link to="/" className='text-2xl sm:text-3xl text-cyan-400'>Tailwind Core</Link>
        </nav>
  )
}

export default NavBar
