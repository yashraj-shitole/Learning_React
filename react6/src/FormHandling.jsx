import React, { useState } from 'react';

function FormHandling() {

const [name,setName]=useState("");

const [intrest,setIntrest]=useState("");

const [terms,setTerms]=useState(false);



function getFormData(e)
{
    e.preventDefault();
    console.warn(name, intrest, terms);
}



  return (
    <div>
      <h1>Form Handling</h1>

      <form onSubmit={getFormData} action="">
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter Name' />
        <br />
        <br />
        <select onChange={(e)=>setIntrest(e.target.value)}  name="" id="">
        <option value="">Select option</option>
        <option value="Java">Java</option>
        <option value="React">React</option>
        <option value="JS">JS</option>
        <option value="Node JS">Node JS</option>
        </select>

        <input onChange={(e)=>setTerms(e.target.checked)} type="checkbox" /> <span>accept T&C</span>
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormHandling
