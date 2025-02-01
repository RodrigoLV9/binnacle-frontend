import React from 'react'
import { ButtonLogin } from './ButtonLogin'
import { ButtonRegister } from './ButtonRegister'
import { ButtonMode } from './ButtonMode'
import '../../styles/Header.css'
import {Link} from "react-router-dom";
export const Header:React.FC = () => {
  return (
      <header className='header'>
        <ButtonMode/>
        <div className="sessionButtons">
            <Link to='/login'>
              <ButtonLogin/>
            </Link> 
            <Link to='/register'>
              <ButtonRegister/>
            </Link>
        </div>
      </header>
    
  )
}
