import { useState } from 'react'
import Card from './components/Card'
import './App.css'


function App() {

  return (
    <>
      <h1 className='mt-6 mb-6 rounded-2xl text-black font-bold text-4xl flex justify-center bg-red-500 p-4'>Tailwind Test</h1>
      <Card username= "Shubham Tiwari" cardNum="#001"/>
      <Card username= "Sunidhi" cardNum="#002"/>
      
    
    </>
  )
}

export default App
