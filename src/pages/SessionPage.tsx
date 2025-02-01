import React from 'react'
import { ButtonMode } from '../components/Header/ButtonMode'
import '../styles/SessionPage.css'
import { FormSession } from '../components/FormSession'
export const SessionPage:React.FC = () => {
  return (
    <section>
        <header className='header-session'>
          <img src="./images/binnacle-logo.png" alt="binnacle main logo" width={50} height={50} />
          <ButtonMode/>
        </header>
        <FormSession/>
    </section>
  )
}
