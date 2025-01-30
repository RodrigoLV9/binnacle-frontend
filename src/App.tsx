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
        <Route path='/register' element={<SessionPage/>}/>
      </Routes>
    </Router>
  )
}
export default App
