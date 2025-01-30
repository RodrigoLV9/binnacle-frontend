import React from 'react'
import { Header } from '../components/Header/Header'
import { Hero } from '../components/Hero/Hero'
import { Binnacle } from '../components/Binnacle/Binnacle'

export const Main:React.FC = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <Binnacle/>
    </>
  )
}
