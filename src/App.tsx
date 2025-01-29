import React from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'

const App:React.FC=()=>{
  return (
    <>
      <Header/>
      <Hero/>
    </>
  )
}
export default App
