import React from 'react'
import RegisterClient from '../components/auth/RegisterClient'


const Register = () => {
  const currentUser = null;
  
  return (
    <RegisterClient currentUser={currentUser}/>
  )
}

export default Register