import React,{useState} from 'react'
import { CreateButton } from '../Buttons/CreateButton'
import { BinnacleCard } from './BinnacleCard'
import '../../styles/Binnacle.css'
import { ModalBinnacle } from '../Modals/ModalBinnacle'
export const Binnacle:React.FC = () => {
  const [modalCreate,setModalCreate]=useState<boolean>(false);
  const [modalEdit, setModalEdit]=useState<boolean>(false);
  const handleModalCreate=()=>{
    setModalCreate(!modalCreate)
  }
  const handleModalEdit=(status:boolean)=>{
    setModalEdit(status)
  }
  return (
    <section className='binnacle'>
        <p>My binnacle:</p>
        <div className="binnacle__cards">
          <div className="containerButton">
            <button onClick={handleModalCreate}>
              <CreateButton/>
            </button>
          </div>
          <BinnacleCard statusModalEdit={handleModalEdit}/>
          <BinnacleCard statusModalEdit={handleModalEdit}/>
          <BinnacleCard statusModalEdit={handleModalEdit}/>
        </div>
        <ModalBinnacle statusModalCreate={modalCreate} statusModalEdit={modalEdit}/>
    </section>
  )
}
