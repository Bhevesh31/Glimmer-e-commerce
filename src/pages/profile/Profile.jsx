import React from 'react'
import { useFirebase } from '../../context/AuthContext'
import { Link } from 'react-router-dom';

const Profile = () => {
  const firebase = useFirebase();

  
  
  return (
    <div className='h-[80vh]'>
      {
        !(firebase.user===null) 
        && <div className='flex flex-col items-center gap-8'>
        <div className='mt-10 text-3xl'>
          <h1>Hello, {firebase.user.email}</h1>
        </div>
        <div>
          <img className='h-25 w-25' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s" alt="" />
        </div>
        <div className='text-lg mt-2'>
          <h1 >Email: {firebase.user.email}</h1>
        </div>
        <div >
          <Link to="/">
          <button onClick={()=>firebase.signOutUser()} className='bg-red-600 text-white cursor-pointer py-2.5 px-10 mt-6 text-lg hover:scale-105 active:scale-100 font-bold rounded'>Log out</button>
          </Link>
        </div>
      </div>
      }
      


    </div>
  )
}

export default Profile
