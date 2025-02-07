import React from 'react'
import { ButtonLogin } from './ButtonLogin'
import { ButtonRegister } from './ButtonRegister'
import { ButtonMode } from './ButtonMode'
import '../../styles/Header.css'
import {Link} from "react-router-dom";
import { useUser } from '../../Context/UserContext'
import { FaUser } from "react-icons/fa";
export const Header:React.FC = () => {
  const {user}=useUser()
  return (
      <header className='header'>
        <ButtonMode/>
        {
          user!=undefined ? 
          <div className="containerUser">
            <FaUser/>
            <p>{user.username}</p>
            <button className='containerUser__logout'>Log out</button>
          </div>
          :
          <div className="sessionButtons">
            <Link to='/login'>
              <ButtonLogin/>
            </Link> 
            <Link to='/register'>
              <ButtonRegister/>
            </Link>
          </div>
        }
        
      </header>
    
  )
}
