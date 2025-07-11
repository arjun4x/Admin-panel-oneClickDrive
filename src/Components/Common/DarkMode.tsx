'use client'
// import { useState, useEffect } from 'react'

const  DarkMode =() => {

  //  const [darkMode, setDarkMode] = useState(false)
  // // const [dropdownOpen, setDropdownOpen] = useState(false)

  // useEffect(() => {
  //   // On mount, apply saved theme
  //   if (
  //     localStorage.theme === 'dark' ||
  //     (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  //   ) {
  //     document.documentElement.classList.add('dark')
  //     setDarkMode(true)
  //   }
  // }, [])

  // const toggleTheme = () => {
  //   const isDark = !darkMode
  //   setDarkMode(isDark)
  //   document.documentElement.classList.toggle('dark', isDark)
  //   localStorage.theme = isDark ? 'dark' : 'light'
  // }


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