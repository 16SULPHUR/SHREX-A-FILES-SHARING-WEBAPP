import React from 'react'
import { Link, NavLink, redirect, useNavigate } from 'react-router-dom'
import Navbuttons from './Navbuttons'
import NavLinks from './NavLinks'

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div>

            <header className="text-gray-600 body-font w-full z-50">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <NavLinks/>
                    <Link to={"/"} className="flex order-first lg:order-none lg:w-1/5 title-font items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                        <img
                            className='w-14 lg:w-20'
                            src={"/logo.svg"}
                            alt='logo'
                        />
                        <span className="ml-3 text-4xl lg:text-5xl font-mono">Shrex</span>
                    </Link>
                    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 mt-5 lg:mt-0">
                        <Navbuttons/>
                    </div>
                </div>
            </header>

            <hr className='h-px w-screen bg-black' />

        </div>
    )
}

export default Navbar