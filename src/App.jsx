import { useState,useEffect,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import {ThemeContext} from './Context/ThemeContext'
function App() {
  const[count,setCount] =useState(0)
  const[theme,setTheme] = useState('dark')

  return (
    <ThemeContext.Provider value= {{theme,setTheme}}>
    <div className={`${theme} 
    ${theme=='dark'? 'bg-[#121212]':null}h-[100vh]`}>
       <Header/>
      <Home/>
    
    </div>
    </ThemeContext.Provider>
  )
}

export default App
