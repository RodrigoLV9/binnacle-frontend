import React from 'react'
import { ButtonLogin } from './ButtonLogin'
import { ButtonRegister } from './ButtonRegister'
import { ButtonMode } from './ButtonMode'
import '../../styles/Header.css'
import {Link} from "react-router-dom";
import { useUser } from '../../Context/UserContext'
import { FaUser } from "react-icons/fa";
import { useAuth } from '../../Context/AuthContext'
export const Header:React.FC = () => {
  const {user}=useUser()
  const auth=useAuth()
  
  const handleLogout=async()=>{
    try{
      const token=await auth.getRefreshToken()
      const response=await fetch('http://localhost:3000/api/logout',{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json',
          'Authorization':`Bearer ${token}`
        }
      })
      if(response.ok){
        auth.logout()
      }else{
        console.log('Error in response')
      }
    }catch(err){
      console.log('Error in fetch of log out: ',err)
    }
  }
  return (
      <header className='header'>
        <ButtonMode/>
        {
          auth.isAuth ? 
          <div className="containerUser">
            <FaUser/>
            <p>{user?.username}</p>
            <button className='containerUser__logout' onClick={handleLogout}>Log out</button>
          </div>
          :
          <div className="sessionButtons">
            <Link to='/login'>
              <ButtonLogin/>
            </Link> 
            <Link to='/register'>
              <ButtonRegister/>
            </Link>
          </div>
        }
        
      </header>
    
  )
}
