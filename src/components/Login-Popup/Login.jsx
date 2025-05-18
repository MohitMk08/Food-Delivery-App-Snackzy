import React from 'react'
import './Login.css'
import { useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets';

const Login = ({ setShowLogin }) => {

    const [currentState, setCurrentState] = useState('Sign Up');

    return (
        <div className='login absolute z-20 w-full h-full grid ' style={{ background: "rgba(0, 0, 0, 0.69)" }}>
            <form className="login-container place-self-center w-9/12 md:w-1/3 bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 text-base animate-fadeIn duration-5">
                <div className="login-title flex justify-between items-center text-black font-semibold">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" className='w-4 cursor-pointer' />
                </div>
                <div className="login-input flex flex-col gap-4 ">
                    {currentState === "Login" ? <></> : <input type="text" placeholder='Name' required />}

                    <input type="email" placeholder='Email' required />
                    <input type="password" placeholder='Password' required />
                </div>

                <button className='border-none p-3 rounded-lg bg-orange-500 text-white cursor-pointer text-base'>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-condition flex items-start gap-2 mt-0 text-sm">
                    <input type="checkbox" required className='mt-1.5' />
                    <p className='capitalize text-sm text-gray-500'>By continuing, I agree to the Terms of Service and Privacy Policy</p>
                </div>
                {currentState === "Login" ?
                    <p className='text-sm text-gray-500'>Create a new account?<span className='text-orange-500 font-medium text-sm cursor-pointer' onClick={() => setCurrentState("Sign Up")}>Click Here</span></p> :
                    <p className='text-sm text-gray-500'>Already have an account?<span className='text-orange-500 font-medium text-sm cursor-pointer' onClick={() => setCurrentState("Login")}>Login Here</span></p>
                }
            </form>
        </div>
    )
}

export default Login
