
import React,{useContext,} from 'react'
import {dashBoardContext} from './DashBoard'


const  PaginatedPage =() => {

  const {currentIndex,setCurrentIndex,paginationData} = useContext(dashBoardContext)

 const handleNextPage =() => {
  setCurrentIndex((prev :number)=>prev +1)
 }

 
 const handlePrevPage =() => {
  setCurrentIndex((prev:number)=>prev -1)
 }
  const totalPages = paginationData ? paginationData.length:0;
 const showNext = paginationData ? paginationData.length > 0 && currentIndex < paginationData.length - 1 : false;
  const showPrev = paginationData ? paginationData.length > 0 && currentIndex != 0 : false

  return (
       <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-2">
    <p className="text-sm md:text-base">Page {currentIndex+1} of {totalPages}</p>
    <div className="space-x-2">
      {showPrev && <button className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400 text-sm md:text-base" onClick={handlePrevPage}>Prev</button>}
    { showNext &&
      <button className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400 text-sm md:text-base" onClick={handleNextPage}>Next</button>}
    </div>
  </div>
  )
}

export default PaginatedPage