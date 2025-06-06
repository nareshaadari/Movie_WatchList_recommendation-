import React from 'react'

import Logo from '../Movielogo.jpg';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
   

    
    <div className='flex rounded-lg border-b-3 border-gray-400/50 space-x-8  items-center pl-3 py-1  '>
       <Link to="/"> <img  className='w-[100px]' src={Logo} alt=""  /></Link>

        <Link className='text-blue-400 text-2xl font-bold ' to="/">Home</Link>
        <Link className='text-blue-400 text-2xl font-bold' to="/watchlist">WatchList</Link>
    </div>
    

  )
}

export default Navbar