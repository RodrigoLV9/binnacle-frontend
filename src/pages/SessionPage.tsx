import React from 'react'
import { ButtonMode } from '../components/Header/ButtonMode'
import '../styles/SessionPage.css'
import { FormRegister } from '../components/FormRegister'
import { FormLogin } from '../components/FormLogin'
interface PropsSessionPage{
  page:string
}
export const SessionPage:React.FC<PropsSessionPage> = ({page}) => {
  return (
    <section>
        <header className='header-session'>
          <img src="./images/binnacle-logo.png" alt="binnacle main logo" width={50} height={50} />
          <ButtonMode/>
        </header>
        {
          page=='register' ?
          <FormRegister/>
          :
          <FormLogin/>
        }
        
    </section>
  )
}
