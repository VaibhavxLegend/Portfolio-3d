import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../styles'
import { NavLink } from '../constants'
import { logo,menu,close } from '../assets'


const Navbar = () => {
  return (
    <nav className={`${styles.paddingX} w-full items-center py-5 fixed top-0 z-20`}>
      <div className="flex items-center justify-between w-full max-w-7x1 mx-auto">
        <Link to="/" className='flex items-center gap-2' onClick={()=> {setActive("");window.scrollTo(0,0); }}>
        <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar