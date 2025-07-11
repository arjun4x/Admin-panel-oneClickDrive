'use client'

import { useRouter } from 'next/navigation' 
import React from 'react'


function Login() {
      const router = useRouter()

      const handleRedirection = async() =>{
        // if (username === 'admin' && password === 'admin123' && emaill === "admin@oneClickDrive.com") {
        await fetch('/api/login', { method: 'POST' });
        // }
        router.push('/dashboard');
      }
      // }

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <form className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md" >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Login</h2>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Username</label>
            <input
              type="text"
              name="username"
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
            onClick={handleRedirection}
          >
            Sign In
          </button>
        </form>
      </div>
  )
}

export default Login