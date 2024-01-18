import React, { useState } from 'react'

const LoginValidagtion = () => {

    const [userEvent,setUser]=useState("")
    const [pass,setPass]=useState("")

    const [userErr,setUserErr]=useState(false)
    const [passErr,setPassErr]=useState(false)



    function userHandler(e){
        let item=e.target.value;
        if(item.length<3){
            setUserErr(true)
        }
        else{
            setUserErr(false)
        }

        setUser(item)
    }

    function loginHandle(e){
        e.preventDefault()
        if(userErr.length < 3 || pass.length<3 ){
            alert("Enter correct details")
        }
    }

    function passHandler(e){
        let item=e.target.value;
        if(item.length<3){
            setPassErr(true)
        }
        else{
            setPassErr(false)
        }

        setPass(item)
    }




  return (
    <div>
      <h1>Login Validation</h1>

<form onSubmit={loginHandle} action="">

 <input type="text" onChange={userHandler} placeholder='Enter user id'/>{ userErr? <span>User not valid</span>:null }
      <br />
      <br />
      <input type="text" onChange={passHandler} placeholder='Enter pass' />{passErr? <span>Pass not valid</span>:null}
      <br />
      <br />

      <button type='submit'>Login</button>

</form>
     
    </div>
  )
}

export default LoginValidagtion
