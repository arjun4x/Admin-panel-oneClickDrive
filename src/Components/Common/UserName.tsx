'use client'
import React from 'react'
import { useRouter } from 'next/navigation';


function UserName ({token}:{token:string|undefined}) {


    const router = useRouter();

const handleLogout = async() =>{

  await fetch('/api/logout', { method: 'GET' });


router.push('/')

}

  


  return (
    <>
   { token &&
     <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            Hello, {'Admin'}
          </span>}
             <button
    className="text-sm font-medium text-red-600 hover:underline"
    onClick={handleLogout}
  >
    Logout
  </button>
    </>
  )
}

export default UserName