import React,{ChangeEvent, useState} from 'react';
import { MdClose as CloseIcon } from "react-icons/md";
import '../../styles/ModalBinnacle.css';
import { EditButton } from '../Buttons/EditButton';
/* import { useMode } from '../../Context/ModeContext'; */
import { useAuth } from '../../Context/AuthContext';
import { useUser } from '../../Context/UserContext';
interface ModalBinnacleEditProps{
  idBinnacle:string,
  modalState:boolean | undefined,
  onClose:()=>void
}
export const ModalBinnacleEdit: React.FC<ModalBinnacleEditProps> = ({idBinnacle,modalState, onClose}) => {
  const {getAccessToken}=useAuth()
  const {user}=useUser()
  const [date,setDate]=useState<string | undefined>(undefined)
  const [description,setDescription]=useState<string | undefined>(undefined)
  const handleDate=(e:ChangeEvent<HTMLInputElement>)=>{
    setDate(e.target.value)
  }
  const handleDescription=(e:ChangeEvent<HTMLTextAreaElement>)=>{
    setDescription(e.target.value)
  }
  const handleEdit=()=>{
    onClose()
    fetchEdit()
  }
  const fetchEdit=async()=>{
    const accessToken=await getAccessToken()
    try{
      const response=await fetch(`http://localhost:3000/api/binnacle?id=${idBinnacle}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
          'Authorization':`Bearer ${accessToken}`
        },
        body:JSON.stringify({
           date:date,
           description:description,
           idUser:user?.idUser
        })
      })
      if(response.ok){
        const data=await response.json()
        console.log(data)
      }else{
        console.log('Error in EditModal button')
      }
    }catch(err){
      console.log('Error in fetchEdit function: ',err)
    }
    
  }
  return (
    <div className={`modalBinnacle ${modalState ? 'modalBinnacle-active' : 'modalBinnacle-inactive'}`}>
      <button className="modalBinnacle__icon" onClick={onClose}>
        <CloseIcon />
      </button>
      <form action="" className="modalBinnacle__form">
        <div className="containerInput">
          <label htmlFor='date'>Date: </label>
          <input type="date" name="date" id="date" value={date} onChange={handleDate}/>
        </div>
        <div className="containerInput">
          <label htmlFor='description'>Description: </label>
          <textarea name="description" id="description" value={description} onChange={handleDescription}></textarea>
        </div>
        <button type='button' onClick={handleEdit} className="modalBinnacle__form-button">
          <EditButton />
        </button>
      </form>
    </div>
  );
};