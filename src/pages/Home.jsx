import React from 'react'
import Homehero from '../components/Homehero'
import Homeextras from '../components/Homeextras'
import Homecontent from '../components/Homecontent'
export default function Home() {
  return (
    <div className="w-full">
      <Homehero />
      <Homecontent />
      <Homeextras />
    </div>
  )
}
