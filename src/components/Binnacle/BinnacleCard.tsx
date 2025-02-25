import React, { useState } from 'react';
import { EditButton } from '../Buttons/EditButton';
import { DeleteButton } from '../Buttons/DeleteButton';
import { ModalBinnacleEdit } from '../Modals/ModalBinnacleEdit';
import { useAuth } from '../../Context/AuthContext';
import { useUser } from '../../Context/UserContext';
interface BinnacleCardProps {
  id: string;
  date: string;
  description: string;
}
export const BinnacleCard: React.FC<BinnacleCardProps> = ({ id, date, description }) => {
  const {setBinnacle}=useUser()
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
      const token= getAccessToken()
      const response=await fetch(`http://localhost:3000/api/binnacle/67bbdfabda58c423d0b8ab32?id=${id}`,{
        method:'DELETE',
        headers:{ 
          'Content-Type':'application/json',
          'Authorization':`Bearer ${token}`
        }
      })
    if(response.ok){
      const data=await response.json()
      setBinnacle(data)
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
        <p className='binnacleCard__date'>{date}</p>
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