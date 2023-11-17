import React from 'react'
import { useState } from 'react'

import './Usestate.css'
let x=20;
export default function Usestate() {
    const[count,setCount]=useState(0)
    const[ary,setAry]=useState(['pushp ',' kitty'])
    let z=10;

  return (
    <>
   
    <view style={{display:'flex', alignItems:'center'}}>
    <button onClick={()=>x+=1}>inc x</button>
    <h1>{x}</h1><br /></view>
    <h2>{x} is {(count%2===0)? 'even':'odd'}</h2>

    <div style={{display:'flex', alignItems:'center'}} ><button onClick= {()=>z+=1}>incz</button>
    <h1>{z}</h1></div>

    <view className='view3' style={{display:'flex', alignItems:'center' }}><button onClick={()=>setCount(count+1)}>+</button>
   <h1 className='h1'>{count}</h1>
<button onClick={()=>(count===0)?setCount(0):setCount(count-1)}>-</button>

</view>
<div style={{display:'flex', alignItems:'center'}}><button onClick={()=>setAry([...ary,' akkhi'])}>add</button>
<h1>{ary}</h1></div>
       
    </>
  )
}
