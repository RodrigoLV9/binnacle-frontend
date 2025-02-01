import React from 'react'
import { FaRegEye as VisibleIcon } from "react-icons/fa";
import { MdEmail as MailIcon } from "react-icons/md";

export const FormSession:React.FC = () => {
  return (
    <section className="formContainer">
        <h1>Register</h1>
        <div className="formContainer__info">
            <p>Already have an account?</p>
            <p>Log in</p>
        </div>
        <form action="" className="form">
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
            <button type="submit" className='form__button'>Register</button>
        </form>
    </section>
  )
}
