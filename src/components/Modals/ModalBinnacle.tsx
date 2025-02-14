import React, {useState, useEffect} from 'react'
import { MdClose as CloseIcon } from "react-icons/md";
import '../../styles/ModalBinnacle.css'
import { CreateButton } from '../Buttons/CreateButton';
interface PropsModalBinnacle{
    statusModalCreate:boolean;
    statusModalEdit:boolean
}
export const ModalBinnacle:React.FC<PropsModalBinnacle> = ({statusModalCreate,statusModalEdit}) => {
    const [modal, setModal]=useState<boolean>(true);
    const [modalEdit,setModalEdit]=useState<boolean>(false);
    const handleModalCreate=()=>{
        setModal(!modal)
    }
    const handleModalEdit=()=>{
        setModalEdit(!modalEdit)
    }
    useEffect(() => {
      handleModalCreate()
    }, [statusModalCreate])
    useEffect(() => {
        handleModalEdit()
    }, [statusModalEdit])
    
  return (
    <div className={`modalBinnacle ${modal ? 'modalBinnacle-active' : 'modalBinnacle-inactive'}`}>
        <button className="modalBinnacle__icon" onClick={handleModalCreate}>
            <CloseIcon/>
        </button>
        <form action="" className="modalBinnacle__form">
            <div className="containerInput">
                <label htmlFor=''>Date: </label>
                <input type="date" name="date" id="date" />
            </div>
            <div className="containerInput">
                <label htmlFor=''>Description: </label>
                <textarea name="description" id="description"></textarea>
            </div>
            <div className="modalBinnacle__form-button">
                <CreateButton/>
            </div> 
        </form>
    </div>
  )
}
