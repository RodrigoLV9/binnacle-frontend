import React, { useEffect } from 'react';
import { CreateButton } from '../Buttons/CreateButton';
import { BinnacleCard } from './BinnacleCard';
import '../../styles/Binnacle.css';
import { useMode } from '../../Context/ModeContext';
import { ModalBinnacleCreate } from '../Modals/ModalBinnacleCreate';
import { useUser } from '../../Context/UserContext';
import { useAuth } from '../../Context/AuthContext';
export const Binnacle: React.FC = () => {
  const {binnacle, setBinnacle}=useUser()
  const { user } = useUser();
  const { getAccessToken, isAuth } = useAuth();
  const { modalCreate, setModalCreate } = useMode();
  const handleModalCreate = () => {
    setModalCreate(!modalCreate);
  };
  const getBinnacles = async () => {
    const tokenAccess = await getAccessToken();
    const id = user?.idUser;
    if (tokenAccess && id) {
      try {
        const dataRaw = await fetch(`http://localhost:3000/api/binnacle?id=${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenAccess}`
          }
        });
        const data = await dataRaw.json();
        setBinnacle(data);
      } catch (err) {
        console.log('Error in binnacle:', err);
      }
    } else {
      console.log('Error in binnacle');
    }
  };
  useEffect(() => {
    if (user) {
      getBinnacles();
    }
  }, [user]);
  return (
    <section className='binnacle'>
      <p>My binnacle:</p>
      <div className="binnacle__cards">
        <div className="containerButton">
          <button onClick={handleModalCreate}>
            <CreateButton />
          </button>
        </div>
        {
        isAuth ?
        binnacle.map((entry, index) => (
          <BinnacleCard
            key={index}
            id={entry._id}
            date={entry.date}
            description={entry.description}
          />
        ))
        :
        undefined
      }
      </div>
      <ModalBinnacleCreate />
    </section>
  );
};