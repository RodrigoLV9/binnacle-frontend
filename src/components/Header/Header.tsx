import React from 'react'
import { ButtonLogin } from './ButtonLogin'
import { ButtonRegister } from './ButtonRegister'
import { ButtonMode } from './ButtonMode'
import '../../styles/Header.css'
export const Header:React.FC = () => {
  return (
    <header className='header'>
        <ButtonMode/>
        <div className="sessionButtons">
            <ButtonLogin/>
            <ButtonRegister/>
        </div>
    </header>
  )
}
