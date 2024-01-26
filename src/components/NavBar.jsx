import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <header className="header">
            <NavLink to="/" className="mt-1 rounded-lg bg-white items-center justify-center flex font-bold">
                <p className='yellow-gradient_text'>CHRISTOPHER KIM</p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    Projects
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    Contact
                </NavLink>
            </nav>

        </header>
    )
}

export default NavBar