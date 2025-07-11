import React,{useContext} from 'react'
import { dashBoardContext } from './DashBoard';
import { FilterValueType } from '@/types/DashBoardInterFace';

function FilterBlock() {


  const {setFilterValue,filterValue} = useContext(dashBoardContext);

  const HandleFilter = (value: string) => {
  const filterStatus: FilterValueType = structuredClone(filterValue);
  filterStatus.status = value;
  setFilterValue(filterStatus);
};


  return (
     <div className="mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      {/* <div className="relative flex-grow">
        <input
          type="text"
          name="searchQuery"
          placeholder="Search listings..."
          className="w-full p-2 pl-10 rounded border dark:border-gray-600 dark:bg-gray-700 text-sm md:text-base"
        />
        <svg className="absolute left-3 top-3 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div> */}
      <button 
        id="filterToggle"
        className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 text-sm md:text-base"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        Filters
      </button>
    </div>

    {/* Expanded Filters - Initially hidden on mobile */}
    <div id="filtersSection" className="mt-4 hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div>
        <label className="block text-sm font-medium mb-1">Status</label>
        <select
          name="status"
          className="w-full p-2 rounded border dark:border-gray-600 dark:bg-gray-700 text-sm md:text-base"
            onChange={(e) => HandleFilter(e.target.value)}
        >
          <option value="All">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {/* <div>
        <label className="block text-sm font-medium mb-1">Location</label>
        <input
          type="text"
          name="location"
          placeholder="Any location"
          className="w-full p-2 rounded border dark:border-gray-600 dark:bg-gray-700 text-sm md:text-base"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Min Price</label>
        <input
          type="number"
          name="minPrice"
          placeholder="$ Min"
          className="w-full p-2 rounded border dark:border-gray-600 dark:bg-gray-700 text-sm md:text-base"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Max Price</label>
        <input
          type="number"
          name="maxPrice"
          placeholder="$ Max"
          className="w-full p-2 rounded border dark:border-gray-600 dark:bg-gray-700 text-sm md:text-base"
        />
      </div>

      <div className="md:col-span-2 lg:col-span-4 flex justify-end gap-2">
        <button
          className="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300"
        >
          Reset Filters
        </button>
      </div> */}
    </div>
  </div>
  )
}

export default FilterBlock