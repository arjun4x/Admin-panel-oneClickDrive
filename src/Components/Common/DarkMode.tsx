'use client'
// import { useState, useEffect } from 'react'

const  DarkMode =() => {

  return (

      <button
        // onClick={toggleTheme}
        className="text-sm font-semibold text-gray-900 dark:text-white"
      >
        Dark Mode <span aria-hidden="true">→</span>
      </button>
  )
}

export default DarkMode