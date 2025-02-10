import React,{ChangeEvent, useState} from 'react'
import { FaRegEye as VisibleIcon } from "react-icons/fa";
import { MdEmail as MailIcon } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import {Link} from 'react-router-dom'
export const FormRegister:React.FC= () => {
  const [username,setUsername]=useState<string | undefined>('')
  const [mail,setMail]=useState<string | undefined>('')
  const [password,setPassword]=useState<string | undefined>('')
  const [error,setError]=useState<string | undefined>('')
  const handleUsername=(e:ChangeEvent<HTMLInputElement>)=>{
    setUsername(e.target.value)
  }
  const handleEmail=(e:ChangeEvent<HTMLInputElement>)=>{
    setMail(e.target.value)
  }
  const handlePassword=(e:ChangeEvent<HTMLInputElement>)=>{
    setPassword(e.target.value)
  }
  const handleSubmit=async()=>{
    try {
        const response = await fetch('http://localhost:3000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: username,
            email: mail,
            password:password
          })
        })
            .then(res=>res.json())
        setError(response.error)
     
        /* if (response.ok) {
          return console.log('Register hecho', username, mail);
        } else {
          return console.error('Error en el registro');
        } */
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
  }
  return (
    <section className="formContainer">
        <h1>Register</h1>
        <div className="formContainer__info">
            <p>Already have an account?</p>
            <p>
              <Link to='/login'>Log in</Link>
            </p>
        </div>
        <form action="" className="form">
          <div className="inputContainer">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" placeholder="Write your username..." required value={username} onChange={handleUsername}/>
              <div className="inputContainer__icon">
                <FaUser/>
              </div>
            </div>
            <div className="inputContainer">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Write your email..." required value={mail} onChange={handleEmail}/>
                <div className="inputContainer__icon">
                    <MailIcon/>
                </div>
            </div>
            <div className="inputContainer">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Write your password..." required value={password} onChange={handlePassword}/>
                <div className="inputContainer__icon">
                    <VisibleIcon/>
                </div>
            </div>
            <p className='form__error'>{error}</p>
            <button type="button" className='form__button' onClick={handleSubmit}>Register</button>
        </form>
    </section>
  )
}
