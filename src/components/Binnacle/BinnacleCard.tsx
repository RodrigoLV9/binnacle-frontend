import React,{useState} from 'react'
import { EditButton } from '../Buttons/EditButton'
import { DeleteButton } from '../Buttons/DeleteButton'
interface PropsCard{
  statusModalEdit:(status:boolean)=>void
}
export const BinnacleCard:React.FC<PropsCard> = ({statusModalEdit}) => {
  const [modalEdit, setModalEdit]=useState<boolean>(false);
  const handleModal=()=>{
    const newStatus=!modalEdit
    setModalEdit(newStatus)
    statusModalEdit(newStatus)
  }
  return (
    <section className='binnacleCard-container'>
        <div className='binnacleCard'>
            <p>31/01/25</p>
            <div className="binnacleCard__info">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic autem eum voluptatem cumque porro. Maxime perferendis ad dolore fugit recusandae porro, dolorem natus ipsa saepe quae blanditiis, enim odit earum!</p>
            </div>
            <div className="binnacleCard__buttons">
                <button onClick={handleModal}>
                  <EditButton/>
                </button> 
                <DeleteButton/>
            </div>
        </div>
    </section>
    
  )
}
