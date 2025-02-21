import React from 'react'
import { EditButton } from '../Buttons/EditButton'
import { DeleteButton } from '../Buttons/DeleteButton'
import { useMode } from '../../Context/ModeContext'
import { ModalBinnacleEdit } from '../Modals/ModalBinnacleEdit'
interface BinnacleCardProps{
  date:string,
  description:string
}
export const BinnacleCard:React.FC<BinnacleCardProps>= ({date,description}) => {
  const handleModalEdit=()=>{
    setModalEdit(!modalEdit)
  }
  const {modalEdit, setModalEdit}=useMode()
  return (
    <section className='binnacleCard-container'>
        <div className='binnacleCard'>
            <p>{date}</p>
            <div className="binnacleCard__info">
                <p>{description}</p>
            </div>
            <div className="binnacleCard__buttons">
                <button className='binnacleCard__buttons-item' onClick={handleModalEdit}>
                  <EditButton />
                </button>
                <button className='binnacleCard__buttons-item'>
                  <DeleteButton/>
                </button> 
            </div>
        </div>
        <ModalBinnacleEdit/>
    </section>
    
  )
}
