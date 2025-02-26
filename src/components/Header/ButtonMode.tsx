import React from 'react'
import { FiSun as Sun } from "react-icons/fi";
import { IoMoon as Moon } from "react-icons/io5";
import { useMode } from '../../Context/ModeContext';
export const ButtonMode:React.FC = () => {
    const {mode,setMode}=useMode()
    const handleMode=()=>{
        setMode(!mode)
        document.querySelector('html')?.setAttribute('data-theme',mode ? 'dark' : 'light')
    }
  return (
    <button onClick={handleMode} className='modeButton'>
        {
            mode ? <Sun className='modeButton__icon'/> : <Moon className='modeButton__icon'/>
        }
    </button>
  )
}
