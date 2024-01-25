import React from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import Navbuttons from './Navbuttons'

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div>

            <header className="text-gray-600 body-font fixed top-0 w-full bg-purple-500/[.1] backdrop-blur-lg z-50">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto gap-4">
                        <Link to={"/dashboard"}>Dashboard</Link>
                        <Link to={"/"}>Home</Link>
                    </nav>
                    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Tailwind Snippets</span>
                    </a>
                    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                        <Navbuttons/>
                    </div>
                </div>
            </header>

            <hr className='h-px w-screen bg-black' />

        </div>
    )
}

export default Navbar