import React from 'react'
import { ButtonMode } from '../components/Header/ButtonMode'
import '../styles/SessionPage.css'
import { FormSession } from '../components/FormSession'
interface PropsSessionPage{
  title:string;
  info:string;
  infoLink:string;
  button:string;
  pathAlternative:string
}
export const SessionPage:React.FC<PropsSessionPage> = ({title, info, infoLink, button, pathAlternative}) => {
  return (
    <section>
        <header className='header-session'>
          <img src="./images/binnacle-logo.png" alt="binnacle main logo" width={50} height={50} />
          <ButtonMode/>
        </header>
        <FormSession title={title} info={info} infoLink={infoLink} buttonMain={button} pathAlternative={pathAlternative}/>
    </section>
  )
}
