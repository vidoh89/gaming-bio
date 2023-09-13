import React, { useContext,useState,useEffect } from "react";
import logo from "./../assets/Images/placeholder.png";
import { HiSun, HiMoon,HiOutlineBars3CenterLeft, HiOutlineMagnifyingGlass,HiOutlineXMark } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";
function Header() {
  const [toggle, setToggle] = useState(false);
  const {theme,setTheme} = useContext(ThemeContext)
   useEffect(() =>{
    console.log("Theme",theme)
   })
  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} alt="image of logo" className="hidden md:block"/>
      <div className="md:hidden">
        {!toggle ?<HiOutlineBars3CenterLeft onClick={()=>setToggle(!toggle)}
         className="dark:text-white text-[25px] cursor-pointer"/>
         :<HiOutlineXMark onClick={()=>setToggle(!toggle)}
         className="dark:text-white text-[25px] cursor-pointer"/>}
         {toggle ?
          <div className="absolute z-10 bg-white mt-3 dark:bg-[#121212]">
            <SideNavGenreList/>
            </div>:null

          }
      </div>
     
      <div className="flex bg-slate-500 text-white p-2 w-full items-center  mx-5 rounded-full">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Games"
          className="bg-transparent px-2 mr-5 w-full outline-none pl-5 items-center rounded-full"
        />
      </div>
      <div>
      {theme=='dark'?  <HiSun className="text-[35px] cursor-pointer
       bg-slate-500 text-yellow-500 p-1 rounded-full " 
        onClick={()=>setTheme('light')} />
        :
        <HiMoon className="text-[35px] cursor-pointer bg-slate-500 text-white p-1 rounded-full" 
        onClick={()=>setTheme('dark')} />}
      </div>
    </div>
    
  );
}

export default Header;
