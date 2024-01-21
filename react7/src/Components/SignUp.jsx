import React, { useState } from 'react';

const ContactForm = () => {

    const [pass,setPass]=useState('');
    const [passcheck,setPasscheck]=useState('');
    const [show,setShow]=useState(false)



    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState(''); 


    return (

        <div className='flex flex-col gap-4 rounded-3xl p-4 bg-[#cdcdcd51]  md:w-[450px] m-auto'>

        <form action="">
        <h1 className='font-[900] text-xl'>Register</h1>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-2 '>
                    <div>
                        <label className='text-sm font-[400]' htmlFor="firstName">First Name</label>
                        <input onChange={(e)=>setFirstName(e.target.value)} className='rounded-xl w-[100%] h-10' id='firstName' type="text" value={firstName} />
                    </div>
                    
                    <div>
                        <label className='text-sm font-[400]' htmlFor="lastName">Last Name</label>
                        <input onChange={(e)=>setLastName(e.target.value)} className='rounded-xl w-[100%] h-10' id='lastName' type="text" value={lastName} />
                    </div>

                </div>

                    <div className='flex flex-col'>
                    <label className='text-sm font-[400]' htmlFor="email">E-mail</label>
                        <input onChange={(e)=>setEmail(e.target.value)} className='rounded-xl h-10 p-2 font-[100]' id='email' type="email" placeholder='Enter your email' value={email} />
                    
                    </div>

                    <div className='flex flex-col'>
                    <label className='text-sm font-[400]' htmlFor="password">Password</label>
                        <input onChange={(e)=>setPass(e.target.value)} className='rounded-xl h-10 p-2 font-[100]' id='password' type={show? "text":"password"}  />
                        <div className='flex gap-2 mt-2'>
                            <label className='text-sm font-[100]' htmlFor="showPass">Show password</label>
                            <input className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-4xl' onChange={(e)=>setShow((prev)=>!prev)} id='showPass' type="checkbox" />
                        </div>
                    
                    </div>
                    <div className='flex flex-col'>
                    <label className='text-sm font-[400]' htmlFor="passwordcheck">Confirm password</label>
                        <input onChange={(e)=>setPasscheck(e.target.value)} className='rounded-xl h-10 p-2 font-[100]' id='passwordcheck' type={show? "text":"password"} placeholder='' />
                        {
                            pass!==passcheck? <h3 className='font-[100] text-sm text-[#ff4343]'>password doesnt match</h3>:null

                        }
                    
                    </div>

                    {
                        pass==passcheck?
                        <button type='submit' className=' w-[40%] text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:hover:bg-blue-700' >Submit</button>
                        :
                        <button type="button" class="w-[40%] text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-full text-sm px-5 py-2.5 text-center" disabled>Submit</button>


                    }
                    

            </div>
        </form>
            
            
        </div>

    )
}

export default ContactForm;
