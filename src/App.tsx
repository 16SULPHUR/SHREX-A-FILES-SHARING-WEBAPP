import React, { useEffect } from 'react';
import logo from './logo.svg';
import "./index.css"

// import { Button } from "@/components/ui/button"
import { Button } from "./@/components/ui/button"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "./@/components/ui/alert"

import { KindeProvider } from "@kinde-oss/kinde-auth-react";

import { AlertCircle } from "lucide-react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Login from './Components/Login';



function App() {

  useEffect(() => {
    document.title = 'Shrex | Share Files Seamlessly';
  }, []);
  
  return (
    <>
      <KindeProvider
        clientId="b1e89b0b0ec740e1be753be00bf4489f"
        domain="https://sharely.kinde.com"
        redirectUri="https://shrex.vercel.app/"
        logoutUri="https://shrex.vercel.app/"
        // redirectUri="http://localhost:3000"
        // logoutUri="http://localhost:3000"
      >
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard/:username' element={<Dashboard />} />
        </Routes>

        {/* <div className='flex gap-20'>
        <Link to={"/"}> HOME </Link>
        <Link to={"/dashboard"}> Dashboard </Link>
      </div> */}

      </KindeProvider>
    </>
  );
}


export default App;
