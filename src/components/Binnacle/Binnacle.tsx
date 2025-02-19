import React from 'react'
import { CreateButton } from '../Buttons/CreateButton'
import { BinnacleCard } from './BinnacleCard'
import '../../styles/Binnacle.css'
import { useMode } from '../../Context/ModeContext'
import { ModalBinnacleCreate } from '../Modals/ModalBinnacleCreate'


export const Binnacle:React.FC = () => {
  const {modalCreate,setModalCreate}=useMode()
  const handleModalCreate=()=>{
    setModalCreate(!modalCreate)
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
          <BinnacleCard/>
          <BinnacleCard/>
          <BinnacleCard/>
        </div>
        <ModalBinnacleCreate/>
    </section>
  )
}
