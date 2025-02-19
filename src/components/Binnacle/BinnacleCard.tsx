import React from 'react'
import { EditButton } from '../Buttons/EditButton'
import { DeleteButton } from '../Buttons/DeleteButton'
import { useMode } from '../../Context/ModeContext'
import { ModalBinnacleEdit } from '../Modals/ModalBinnacleEdit'

export const BinnacleCard:React.FC= () => {
  const handleModalEdit=()=>{
    setModalEdit(!modalEdit)
  }
  const {modalEdit, setModalEdit}=useMode()
  return (
    <section className='binnacleCard-container'>
        <div className='binnacleCard'>
            <p>31/01/25</p>
            <div className="binnacleCard__info">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic autem eum voluptatem cumque porro. Maxime perferendis ad dolore fugit recusandae porro, dolorem natus ipsa saepe quae blanditiis, enim odit earum!</p>
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
