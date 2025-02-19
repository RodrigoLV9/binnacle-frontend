import React,{ChangeEvent, useState} from 'react';
import { MdClose as CloseIcon } from "react-icons/md";
import '../../styles/ModalBinnacle.css';
import { CreateButton } from '../Buttons/CreateButton';
import { useMode } from '../../Context/ModeContext';

export const ModalBinnacleCreate: React.FC = () => {
  const {modalCreate,setModalCreate}=useMode()
  const handleCreate = () => {
    console.log(date, description)
    setModalCreate(!modalCreate)
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
        <div className="modalBinnacle__form-button">
          <button type='button' onClick={handleCreate}>
            <CreateButton />
          </button>
        </div>
      </form>
    </div>
  );
};