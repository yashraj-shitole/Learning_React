import React, { useState } from 'react';

function Toggle() {

    const [status, setStatus]= useState(false);
    const [user , setUser]=useState("User2");





    const toggleOFf=()=> setStatus(false)
    const toggleON=()=> setStatus(true)






return (
    <div>

    <h1>React Toggle</h1>

    {
        status?<h1>Hello React</h1>:null
    }
    <button onClick={toggleOFf}>Hide</button>
    <button onClick={toggleON}>Show</button>

    <button onClick={()=>setStatus(!status)}>Button</button>



    <h1>Task1</h1>

    {
        user=="User1"?
        <h12>Guest1</h12> :
        user=="User2"?
        <h2>Guest2</h2> :
        <h2>Guest3</h2>

    }





    </div>
  )
}

export default Toggle
