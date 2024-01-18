import React, { useState } from 'react';

const GetInputBox = () => {

    const [data,setData]=useState(null);
    const [print,setPrint]=useState(false);

    function getData(inputData){
        setData(inputData.target.value);
    }

    function isPrint(){
        setPrint(true);
    }
   
  return (
    <div>
        <h1>Get Input</h1>

        {/* <h2>{print?data:null}</h2> */}

        {
            print?
            <h2>{data}</h2>:
            null
        }
      <input type="text" onChange={getData} />
      <button onClick={isPrint}>Click Here</button>
    </div>
  )
}

export default GetInputBox
