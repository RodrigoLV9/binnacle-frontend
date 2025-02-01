import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Main } from './pages/Main';
import { SessionPage } from './pages/SessionPage';
const App:React.FC=()=>{
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/register' element={<SessionPage title='Register' info='Already have an account?' infoLink='log in' button='Register' pathAlternative='/login'/>}/>
        <Route path='/login' element={<SessionPage title='Log in' info="Don't have an account?" infoLink='Register' button='Log in' pathAlternative='/register'/>}/>
      </Routes>
    </Router>
  )
}
export default App
