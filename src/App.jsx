import PseudoClass from "./Components/1 - PseudoClasses/PseudoClass"
import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"
import Home from "./Components/Home/Home"
import PseudoElements from "./Components/2  -PseudoElements/PseudoElements";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import SideNav from "./Components/SideNav";
import SideNavXl from "./Components/SideNavXl";
import NavBar from "./Components/NavBar";
import gsap from "gsap";
import ResponsiveDesigns from "./Components/3 - Responsive Designs/ResponsiveDesigns";
import DarkMode from "./Components/4 - Dark Mode/DarkMode";



const App = () => {

  const GsapRefContainer = useRef()
  var { contextSafe } = useGSAP(() => {

  }, { scope: GsapRefContainer })

  let showSidenavSm = contextSafe(() => {
    gsap.to("#sidenavSM", {
      left: 0,
    });
    gsap.to("#Menu", {
      display: "none",
      opacity: 0,
      duration:0.3
    });
    gsap.to("#closeMenu", {
      opacity: 1,
      delay: 0.3,
      display: "block",
    });
  })

  let closeMenu = contextSafe(() => {
    gsap.to("#sidenavSM", {
      left: "-100%",
    });
    gsap.to("#Menu", {
      display: "block",
      opacity: 1,
      delay: 0.3,
    });
    gsap.to("#closeMenu", {
      opacity: 0,
      duration:0.3,
      display: "none",
    });
  })


  const [title, settitle] = useState("Home")

  const getTitle = (elem) => {
    if (elem == "/PseudoClasses") {
      settitle("Pseudo Class")
    }
    if (elem == "/PseudoElements") {
      settitle("Pseudo Elements")
    }
    if (elem == "/ResponsiveDesigns") {
      settitle("Responsive Designs")
    }
    if (elem == "/DarkMode") {
      settitle("Dark Mode")
    }
    if (elem == "/") {
      settitle("Home")
    }
    console.log(elem)
  }

  return (
    <div id="MainPage" ref={GsapRefContainer} className="w-full min-h-screen bg-zinc-900">

      <BrowserRouter>
          <NavBar />
        
        <div className="main h-[90vh]  flex flex-col sm:flex-row relative">
          
          <SideNavXl activeNav={title} />
          
          <div id="MenuControls" className="h-[6vh] z-30  bg-gradient-to-b from-[#0e113a] to-[#122212] flex gap-4 items-center px-3 sm:hidden">
            <IoMenuSharp onClick={showSidenavSm} id="Menu" className="text-3xl text-lime-500 cursor-pointer" />
            <MdOutlineCloseFullscreen onClick={closeMenu} id="closeMenu" className="hidden opacity-0 text-3xl text-lime-500 cursor-pointer" />
            <h2 className="text-lime-300">{title}</h2>
          </div>

          <SideNav activeNav={title} givepath={getTitle} closeMenu={closeMenu} />

          <div className="sm:w-[75%] h-[100%] overflow-y-scroll">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/PseudoClasses" element={<PseudoClass />} />
              <Route path="/PseudoElements" element={<PseudoElements />} />
              <Route path="/ResponsiveDesigns" element={<ResponsiveDesigns />} />
              <Route path="/DarkMode" element={<DarkMode />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
