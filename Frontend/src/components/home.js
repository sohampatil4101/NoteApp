import React from 'react'
import '../App.css'
import Notes from './notes'
import Addnote from './addnote'

export default function Home() {
  return (
  <>
  <div className="container">
    <Addnote/>
    
    <Notes/>
  </div>
  </>
  )
}
