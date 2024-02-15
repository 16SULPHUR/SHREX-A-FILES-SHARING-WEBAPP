import React from 'react'
import RandomId from './RandomId'
import {Outlet} from 'react-router-dom'

const ReceiveFile = () => {
  return (
    <>
      <div>
        Your Receiver id is: "<RandomId />"
      </div>
    </>

  )
}

export default ReceiveFile