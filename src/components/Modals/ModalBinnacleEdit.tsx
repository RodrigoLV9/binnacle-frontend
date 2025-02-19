import React from 'react';
import { MdClose as CloseIcon } from "react-icons/md";
import '../../styles/ModalBinnacle.css';
import { EditButton } from '../Buttons/EditButton';
import { useMode } from '../../Context/ModeContext';

export const ModalBinnacleEdit: React.FC = () => {

  const {modalEdit,setModalEdit}=useMode()
  const handleClose = () => {
    setModalEdit(!modalEdit)
  };

  return (
    <div className={`modalBinnacle ${modalEdit ? 'modalBinnacle-active' : 'modalBinnacle-inactive'}`}>
      <button className="modalBinnacle__icon" onClick={handleClose}>
        <CloseIcon />
      </button>
      <form action="" className="modalBinnacle__form">
        <div className="containerInput">
          <label htmlFor='date'>Date: </label>
          <input type="date" name="date" id="date" />
        </div>
        <div className="containerInput">
          <label htmlFor='description'>Description: </label>
          <textarea name="description" id="description"></textarea>
        </div>
        <div className="modalBinnacle__form-button">
          <button type='button' onClick={handleClose}>
            <EditButton />
          </button>
        </div>
      </form>
    </div>
  );
};