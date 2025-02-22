import React, { useState } from 'react';
import { EditButton } from '../Buttons/EditButton';
import { DeleteButton } from '../Buttons/DeleteButton';
import { ModalBinnacleEdit } from '../Modals/ModalBinnacleEdit';
import { useAuth } from '../../Context/AuthContext';
interface BinnacleCardProps {
  id: string;
  date: string;
  description: string;
}
export const BinnacleCard: React.FC<BinnacleCardProps> = ({ id, date, description }) => {
  const {getAccessToken}=useAuth()
  const [isModalEdit, setIsModalEdit] = useState<boolean>(false);
  const handleModalEdit = () => {
    setIsModalEdit(!isModalEdit);
  };
  const handleCloseModal = () => {
    setIsModalEdit(false);
  };
  const handleDelete=async()=>{
    try{
      const token=await getAccessToken()
      const response=await fetch(`http://localhost:5173/api/binnacle?id=${id}`,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json',
          'Authorization':`Bearer ${token}`
        }
      })
    if(response.ok){
      const data=await response.json()
      console.log(data)
    }else{
      console.log('Error in response delete')
    }
    }catch(err){
      console.log('Error in handleDelete',err)
    }
  }
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
          <button className='binnacleCard__buttons-item' onClick={handleDelete}>
            <DeleteButton />
          </button>
        </div>
      </div>
      <ModalBinnacleEdit
        idBinnacle={id}
        modalState={isModalEdit}
        onClose={handleCloseModal}
      />
    </section>
  );
};