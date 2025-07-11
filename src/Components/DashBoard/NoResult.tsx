
import {
  FilterValueType
} from "@/types/DashBoardInterFace";



const NoResult = ({setFilterValue}:{setFilterValue :React.Dispatch<React.SetStateAction<FilterValueType>>}) => {

  const handleReset = () =>{
setFilterValue({
    status: "All",
  })

  }

  return (
 <div className="flex flex-col items-center justify-center py-16 text-center">
      <svg
        className="w-20 h-20 text-gray-400 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
        />
      </svg>
      <h2 className="text-xl font-semibold text-gray-700">No Results Found</h2>
      <p className="text-gray-500 mt-2">Try adjusting your filters or search again.</p>
            <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={handleReset}>
        Reset Filters
      </button>
    </div>
  )
}

export default NoResult