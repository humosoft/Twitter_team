import React from 'react'
import "./Login.scss"
import Logo from "./../../../public/Logo.svg"
import Password from './password/Password'

export default function Login() {
  return (
    <div className='twit-div'>
        <h1 className='logo-h1'>
            <a href="#">
                <img className='logo-twit' src={Logo} />
            </a>
        </h1>

        <h2 className='log-h2'>Log in to Twitter</h2>
        <Password />
    </div>
  )
}
