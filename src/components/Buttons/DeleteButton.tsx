import React from 'react'
import '../../styles/Buttons.css'
import { IoTrashSharp as DeleteIcon } from "react-icons/io5";
export const DeleteButton:React.FC = () => {
  return (
    <button className='deleteButton'>
        <DeleteIcon/>
        <p>Delete</p>
    </button>
  )
}