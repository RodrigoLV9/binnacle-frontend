import React from 'react'
import '../../styles/Buttons.css'
import { FaPlus as PlusIcon } from "react-icons/fa6";
export const CreateButton:React.FC = () => {
  return (
    <div className='createButton'>
        <PlusIcon/>
        <p>Create</p>
    </div>
  )
}
