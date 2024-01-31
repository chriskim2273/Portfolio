import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const leadingPath = '/Portfolio';
    return (
        <header className="header">
            <NavLink to={leadingPath + "/"} className="mt-2 rounded-lg bg-transparent items-center justify-center flex font-bold">
                <p className=''>CHRISTOPHER KIM</p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to={leadingPath + "/about"} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    About
                </NavLink>
                <NavLink to={leadingPath + "/projects"} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    Projects
                </NavLink>
                <NavLink to={leadingPath + "/contact"} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    Contact
                </NavLink>
                <NavLink to={leadingPath + "/resume"} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    Resume
                </NavLink>
            </nav>

        </header>
    )
}

export default NavBar