import React, {useState} from 'react'
import { FiSun as Sun } from "react-icons/fi";
import { IoMoon as Moon } from "react-icons/io5";
export const ButtonMode:React.FC = () => {
    const [mode, setMode]=useState(false)
    const handleMode=()=>{
        setMode(!mode)
    }
  return (
    <button onClick={handleMode} className='modeButton'>
        {
            mode ? <Sun className='modeButton__icon'/> : <Moon className='modeButton__icon'/>
        }
    </button>
  )
}
