import React, { useContext,useState,useEffect } from "react";
import logo from "./../assets/Images/placeholder.png";
import { HiSun, HiMoon, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";
function Header() {
  const [toggle, setToggle] = useState(true);
  const {theme,setTheme} = useContext(ThemeContext)

    useEffect(()=>{
      console.log("Theme",theme);
    })
  return (
    
    <div className="flex items-center " >
      <img src={logo} width={60} height={60} alt="image of logo"/>
      <div className="flex bg-slate-500 text-white p-2 w-full items-center  mx-5 rounded-full">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Games"
          className="bg-transparent text-center mr-5 w-full outline-none pl-5 items-center rounded-full"
        />
      </div>
      <div>
        {theme=='light' ? (
          <HiMoon
            className="text-[35px] bg-slate-500 text-yellow-500 p-1 mr-2 rounded-full cursor-pointer"
            onClick={() => {setTheme('dark');localStorage.setItem('theme','dark')}}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-500 text-yellow-500 p-1 mr-2 rounded-full cursor-pointer"
            onClick={() => {setTheme('light');localStorage.setItem('theme','light')}}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
