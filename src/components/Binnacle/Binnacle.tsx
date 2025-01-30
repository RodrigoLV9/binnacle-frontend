import React from 'react'
import { CreateButton } from '../Buttons/CreateButton'
import { BinnacleCard } from './BinnacleCard'
import '../../styles/Binnacle.css'
export const Binnacle:React.FC = () => {
  return (
    <section className='binnacle'>
        <p>My binnacle:</p>
        <div className="binnacle__cards">
          <div className="containerButton">
            <CreateButton/>
          </div>
          <BinnacleCard/>
          <BinnacleCard/>
          <BinnacleCard/>
        </div>
    </section>
  )
}
