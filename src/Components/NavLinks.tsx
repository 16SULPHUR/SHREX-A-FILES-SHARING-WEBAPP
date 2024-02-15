import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = () => {
    const { login, register, logout, user, isAuthenticated, isLoading } = useKindeAuth();
    if (sessionStorage.getItem("id") || isAuthenticated) {
        return (
            <>
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto gap-4">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/send"}>Send</Link>
                    <Link to={"/receive"}>Receive</Link>
                </nav>
            </>
        )
    }else{
        return (
            <>
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto gap-4">
                </nav>
            </>
        )
    }
}

export default NavLinks