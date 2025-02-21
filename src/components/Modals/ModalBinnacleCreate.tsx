import React,{ChangeEvent, useState} from 'react';
import { MdClose as CloseIcon } from "react-icons/md";
import '../../styles/ModalBinnacle.css';
import { CreateButton } from '../Buttons/CreateButton';
import { useMode } from '../../Context/ModeContext';
import { useAuth } from '../../Context/AuthContext';
import { useUser } from '../../Context/UserContext';
export const ModalBinnacleCreate: React.FC = () => {
  const {getAccessToken}=useAuth()
  const {user}=useUser()
  const {modalCreate,setModalCreate}=useMode()
  const handleCreate = async() => {
    setModalCreate(!modalCreate)
    const tokenAccess=await getAccessToken()
    try{
      const data=await fetch('http://localhost:3000/api/binnacle',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'Authorization':`Bearer ${tokenAccess}`
        },
        body: JSON.stringify({
          date:date,
          description:description,
          idUser:user?.idUser
        })
      })
      console.log("hola")
      console.log(await data.json())
    }catch(err){
      console.log(err)
    }
  };
  const handleClose = () => {
    setModalCreate(!modalCreate)
  };

  const [date,setDate]=useState<string | undefined>(undefined)
  const [description,setDescription]=useState<string | undefined>(undefined)
  const handleDate=(e:ChangeEvent<HTMLInputElement>)=>{
    setDate(e.target.value)
  }
  const handleDescription=(e:ChangeEvent<HTMLTextAreaElement>)=>{
    setDescription(e.target.value)
  }
  return (
    <div className={`modalBinnacle ${modalCreate ? 'modalBinnacle-active' : 'modalBinnacle-inactive'}`}>
      <button className="modalBinnacle__icon" onClick={handleClose}>
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
        <button type='button' onClick={handleCreate} className="modalBinnacle__form-button">
          <CreateButton />
        </button>
      </form>
    </div>
  );
};