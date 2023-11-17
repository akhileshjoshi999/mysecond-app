import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

export default function Controls() {
   const dispatch= useDispatch()
   const inputvalue=useRef();
   
   function handleDecrement(){
dispatch({type:"DECREMENT"})
   }

   function handleIncrement(){
dispatch({type:"INCREMENT"})
   }
   
   function handlePrivacyToggle(){
      dispatch({type:"PRIVACY_TOGGLE"})
         }

   function handleAdd(){
    dispatch({type:"ADD",payload:{num:inputvalue.current.value}});
    inputvalue.current.value="";
       }
       function handleSubstract(){
         dispatch({type:"SUBSTRACT",payload:({num:inputvalue.current.value})})
       }
     
  return (
    <div>
        <button style={{width:100, color:'black'}} onClick={handleIncrement}>increment</button>
        <button style={{width:100}} onClick={handleDecrement}>decrement</button>
        <button style={{width:80}} onClick={handlePrivacyToggle}>privacy</button>
        <br />
        <input type="text" ref={inputvalue}/><button onClick={handleAdd}>add</button><button style={{width:100}} onClick={handleSubstract}>substract</button>
      




    </div>
  )
}
