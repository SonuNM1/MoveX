
/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainSignUp = () => {

   const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [firstName, setFirstName] = useState('')
      const [lastName, setLastName] = useState('')
      const [userData, setUserData] = useState({})
  
      const submitHandler = (e) => {
          e.preventDefault()
  
          setUserData({
              fullName: {
                  firstName: firstName, 
                  lastName: lastName
              },
              password: password, 
              email: email
          })
  
          setEmail('')
          setFirstName('')
          setLastName('')
          setPassword('')
      }

  return (
      <div className="py-5 px-5 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-16 mb-10"
            src="https://w7.pngwing.com/pngs/99/692/png-transparent-i-movex-hd-logo.png"
          />

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-lg font-medium mb-2">Provide your name below</h3>

            <div className="flex gap-4 mb-6">
              <input
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                required
                type="text"
                placeholder="first name"
                value={firstName}
                onChange={(e)=> {
                    setFirstName(e.target.value)
                }}
              />

              <input
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                required
                type="text"
                placeholder="last name"
                value={lastName}
                onChange={(e)=> {
                    setLastName(e.target.value)
                }}
              />
            </div>

            <h3 className="text-lg font-medium mb-2">What's your email</h3>

            <input
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-lg"
              required
              type="email"
              placeholder="email@example.com"
              value={email}
                onChange={(e)=> {
                    setEmail(e.target.value)
                }}
            />

            <h3 className="text-lg font-medium mb-2">Enter Password</h3>

            <input
              required
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-lg"
              type="password"
              placeholder="password"
              value={password}
                onChange={(e)=> {
                    setPassword(e.target.value)
                }}
            />

            <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-lg">
              Login
            </button>

            <p className="text-center">
              Already have account?{" "}
              <Link to="/captain-login" className="text-blue-600">
                Login here
              </Link>{" "}
            </p>
          </form>
        </div>

        <div>
          <p className="text-[6px] leading-tight">
            This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service</span> apply.
          </p>
        </div>
      </div>
  )
}

export default CaptainSignUp

// 2.46