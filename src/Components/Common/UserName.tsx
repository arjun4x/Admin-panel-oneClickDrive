import React from 'react'

function UserName() {
  return (
    <>
     <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            Hello, {'username'}
          </span>
          <img
            // src={avatarUrl}
            // alt={`${username}'s avatar`}
            className="h-8 w-8 rounded-full ring-2 ring-indigo-500"
          />
    </>
  )
}

export default UserName