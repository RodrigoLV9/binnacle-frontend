import React, {ChangeEvent, useState} from 'react'
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
    const [username, setUsername]=useState<string | undefined>('')
    const [mail, setMail]=useState<string | undefined>('')
    const [password, setPassword]=useState<string | undefined>('')
    const [identifier,setIdentifier]=useState<string | undefined>('')
    const handleUsername=(e:ChangeEvent<HTMLInputElement>)=>{
        setUsername(e.target.value)
    }
    const handleEmail=(e:ChangeEvent<HTMLInputElement>)=>{
        setMail(e.target.value)
    }
    const handlePassword=(e:ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
    }
    const handleIdentifier=(e:ChangeEvent<HTMLInputElement>)=>{
        setIdentifier(e.target.value)
    }
    const handleSubmit=()=>{
        if(identifier==''){
            console.log('Register hecho',username,mail ,password )
        }else{
            console.log('Login hecho',identifier ,password )
        }
        
    }
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
                    <input type="text" name="username" id="username" placeholder="Write userName..." required value={username} onChange={handleUsername}/>
                    <div className="inputContainer__icon">
                        <FaUser/>
                    </div>
                </div>
                :
                null
            }
            {
                title=='Register' ?
                <div className="inputContainer">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Write email..." required value={mail}
                    onChange={handleEmail}/>
                    <div className="inputContainer__icon">
                        <MailIcon/>
                    </div>
                </div>
                :
                <div className="inputContainer">
                    <label htmlFor="identifier">Email or Username</label>
                    <input type="text" name="identifier" id="identifier" placeholder="Write your email or Username..." required value={identifier} onChange={handleIdentifier}/>
                    <div className="inputContainer__icon">
                        <FaUser/>
                    </div>
                </div>
            }
           
            <div className="inputContainer">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Write your password..." required value={password} onChange={handlePassword}/>
                <div className="inputContainer__icon">
                    <VisibleIcon/>
                </div>
            </div>
            <button type="button" className='form__button' onClick={handleSubmit}>{buttonMain}</button>
        </form>
    </section>
  )
}
