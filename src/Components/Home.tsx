import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import React from 'react'
import { Button } from '../@/components/ui/button';

const Home = () => {
  const { login, register, logout, user, isAuthenticated, isLoading } = useKindeAuth();
  
  return (
    <div className='mt-10'>

      <section className="text-gray-600 body-font">
        <div className="greeting w-fit lg:ms-24 font-semibol">
        {isAuthenticated && (
            <span className='text-3xl'>
              Hello {sessionStorage.getItem("username")} <span className='text-4xl'>👋</span>
            </span>
          )}

        </div>
        <div className="container mx-auto flex px-5 lg:pt-16 pb-12 lg:pb-0 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Share and Access Your Files Anytime
              <br className="hidden lg:inline-block" />Effortlessly with Our Web Application
            </h1>
            <p className="mb-8 leading-relaxed">Experience seamless file sharing and collaboration. Our platform offers secure, fast, and reliable file transfers. No more hassle, just streamlined sharing.</p>
            <div className="flex justify-center">
              <Button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Get Started</Button>
              {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Learn More</button> */}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home