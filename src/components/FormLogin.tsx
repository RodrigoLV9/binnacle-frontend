import React, { ChangeEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { FaRegEye as VisibleIcon } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { useUser } from '../Context/UserContext';
export const FormLogin: React.FC = () => {
  const {setUser}=useUser()
  const auth = useAuth();
  const [username, setUsername] = useState<string | undefined>('');
  const [password, setPassword] = useState<string | undefined>('');
  const [error, setError] = useState<string | undefined>('');
  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
      const data = await response.json();
      if (response.ok) {
        if (data.accessToken && data.refreshToken) {
          auth.saveUser(data);
          setUser(data.user)
        }
      } else {
        setError(data.error || 'Error in the login');
      }
    } catch (err) {
      console.error('Error in request:', err);
      setError('Error in request');
    }
  };
  if(auth.isAuth){
    return <Navigate to='/'/>
  }
  return (
    <section className="formContainer">
      <h1>Login</h1>
      <div className="formContainer__info">
        <p>Don't have an account?</p>
        <p>
          <Link to='/register'>Register</Link>
        </p>
      </div>
      <form action="" className="form">
        <div className="inputContainer">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" placeholder="Write your username..." required value={username} onChange={handleUsername} />
          <div className="inputContainer__icon">
            <FaUser />
          </div>
        </div>
        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Write your password..." required value={password} onChange={handlePassword} />
          <div className="inputContainer__icon">
            <VisibleIcon />
          </div>
        </div>
        <p className='form__error'>{error}</p>
        <button type="button" className='form__button' onClick={handleSubmit}>Login</button>
      </form>
    </section>
  );
};