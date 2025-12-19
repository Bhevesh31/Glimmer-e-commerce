import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/AuthContext'
import { useFirebase } from '../../context/AuthContext'

const Login = () => {

      const firebase = useFirebase();
      const navigate = useNavigate();
          
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")

      useEffect(()=>{
        if(firebase.isLoggedIn){
          navigate("/")
        }
      },[firebase, navigate]);


      const handleSubmit = async(e)=>{
        e.preventDefault();
        setTimeout(() => {
          firebase.setNotRegistered(true)
        }, 10000);
        console.log("loging a user");
        
        const result = await firebase.signinUserWithEmailAndPass(email, password);
       console.log("logged in", result);
       
    }


  return (
    <div>
      <div className='flex justify-center'>
        
        <form onSubmit={handleSubmit} className='flex flex-col gap-1.5 w-[36%] rounded-xl border border-neutral-500 px-6 py-4 m-15 shadow-[0_0_15px_rgba(0,0,0,0.2)]'>
          <h1 className='text-2xl font-bold mb-5'>Sign in</h1>
          <label className='text-xl' htmlFor="email">Email address</label>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} required id='email' className='py-2.75 bg-gray-300 outline-neutral-500 px-2 rounded-lg placeholder:text-gray-900 border border-neutral-400' type="email" placeholder='Enter email' />
          <label className='text-xl mt-2.5' htmlFor="password">Password</label>
          <input onChange={(e)=>setPassword(e.target.value)} value={password} required id='password' className='py-2.75 bg-gray-300 outline-neutral-500 px-2 rounded-lg placeholder:text-gray-900 border border-neutral-400 '  type="password" placeholder="Enter password" />
           {
            (password.length>0 && password.length<6) && <span className='text-sm text-red-700 mt-0.5'>Your password must be at least 6 characters</span>
           }
          <button className='bg-amber-400 py-[9px] mt-4 cursor-pointer hover:scale-102 font-semibold rounded-lg'>Submit</button>

          <div className='flex flex-col items-center  justify-center mt-5 font-semibold text-lg '>
            {!(firebase.notRegistered) && <span className='text-red-700 text-base'>Incorrect Email or Password</span>}
            
            <Link to="/sign-up">
              <p className='cursor-pointer hover:text-orange-800'>New user? Sign up here</p>
            </Link>
            
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
