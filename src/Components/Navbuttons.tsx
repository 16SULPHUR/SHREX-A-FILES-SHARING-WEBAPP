import React from 'react'
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

import { Button } from '../@/components/ui/button';
const Navbuttons = () => {

    const { login, register, logout, user, isAuthenticated, isLoading } = useKindeAuth();
    const handleSignUpClick = () => {
        register(); // Call the register function
    };

    const handleSignInClick = () => {
        login(); // Call the register function
    };

    const logOutHandler = () => {
        sessionStorage.clear()
        logout()
    }

    if (isLoading) {
        return (
            <div className='flex gap-5'>
                <Button className="bg-blue-500 hover:bg-blue-600" type="button">Loading...</Button>
            </div>
        )
    }

    if (sessionStorage.getItem("id") || isAuthenticated) {
        console.log(user)
        if (user && user.id && user.given_name) {
            sessionStorage.setItem("id", user?.id)
            sessionStorage.setItem("username", user?.given_name)
        }
        return (
            <div className='flex gap-5'>
                <Button className="bg-blue-500 hover:bg-blue-600" onClick={logOutHandler} type="button">Sign Out</Button>
            </div>
        )
    }
    else {
        return (
            <div className='flex gap-5'>
                <Button className="bg-blue-500 hover:bg-blue-600" onClick={handleSignUpClick} type="button">Sign up</Button>
                <Button className="bg-blue-500 hover:bg-blue-600" onClick={handleSignInClick} type="button">Sign In</Button>
                {/* <button onClick={logout} type="button">Sign Out</button> */}
            </div>
        )
    }


}

export default Navbuttons