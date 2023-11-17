import React from 'react'
import { useSelector } from 'react-redux'


export default function Displaycounter() {
   const counter= useSelector((store)=>store.counter)
  return (
    <div>Displaycounter:{counter}</div>
  )
}
