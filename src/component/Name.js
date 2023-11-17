import React, { useState } from "react";
function Name({name,src}){
   
    return(
        <>
        <div> {name} </div>
       
        <img src={src} alt="" style={{height:233 , width:334}}/>
       
       
        </>
    )
}
export default Name;