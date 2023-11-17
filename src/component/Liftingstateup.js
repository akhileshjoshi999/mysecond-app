import { useState } from "react";
import Usestate from "./Usestate";




function Liftingstateup({getdata}){
   
    const[data,setData]=useState("transfering data from child to parent")
  return(
        <>
<button onClick={()=>getdata(data)}>click</button>

       
        </>

)     
    
}
export default Liftingstateup;