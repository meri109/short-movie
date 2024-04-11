import React from 'react'
import { NavLink } from 'react-router-dom'
import { toggleDarkMode } from '../store/uiSlice'
import { useDispatch } from 'react-redux'

const navLinkClassHandler = ({isActive}) => {
    return isActive ? 'nav-item-active' : 'nav-item'
}

function Layout(props) {

  const dispatch = useDispatch();

  return (
    <div className='layout'>
        <div className="navbar">
            <NavLink to='/' className="nav-title">Movie</NavLink>
            <div onClick={() => dispatch(toggleDarkMode())} className='dark-mode-button'></div>
            <NavLink to='/login' className={navLinkClassHandler}>Login</NavLink>
            <NavLink to='/register' className={navLinkClassHandler}>Register</NavLink>
        </div>
        <main>{props.children}</main>
    </div>
  )
}

export default Layout
