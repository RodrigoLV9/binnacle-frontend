import React from 'react'
import '../../styles/Buttons.css'
import { FaRegEdit as EditIcon } from "react-icons/fa";
export const EditButton:React.FC = () => {
  return (
    <div className='editButton'>
        <EditIcon/>
        <p>Edit</p>
    </div>
  )
}