import React from 'react'
import { FaRegEye as VisibleIcon } from "react-icons/fa";
import { MdEmail as MailIcon } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import {Link} from 'react-router-dom'
interface PropsFormSession{
    title:string;
    info:string;
    infoLink:string;
    buttonMain:string;
    pathAlternative:string
  }
export const FormSession:React.FC<PropsFormSession> = ({title, info, infoLink, buttonMain, pathAlternative}) => {
  return (
    <section className="formContainer">
        <h1>{title}</h1>
        <div className="formContainer__info">
            <p>{info}</p>
            <p>
                <Link to={pathAlternative}>{infoLink}</Link>
            </p>
        </div>
        <form action="" className="form">
            {
                title=='Register' ?
                <div className="inputContainer">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Username" required/>
                    <div className="inputContainer__icon">
                        <FaUser/>
                    </div>
                </div>
                :
                null
            }
            <div className="inputContainer">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" required/>
                <div className="inputContainer__icon">
                    <MailIcon/>
                </div>
            </div>
            <div className="inputContainer">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Write your password..." required/>
                <div className="inputContainer__icon">
                    <VisibleIcon/>
                </div>
            </div>
            <button type="submit" className='form__button'>{buttonMain}</button>
        </form>
    </section>
  )
}
