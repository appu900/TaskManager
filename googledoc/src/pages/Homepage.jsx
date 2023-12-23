import React from 'react'
import Backgroud from '../components/Backgroud'
import Forground from '../components/Forground'

export default function Homepage() {
  return (
    <div className="h-screen w-full  bg-zinc-800 relative">
    <Backgroud/>
    <Forground/>
  </div>
  )
}
