import React,{useContext} from 'react'
import { dashBoardContext } from './DashBoard';
import { listing } from '@/types/DashBoardInterFace';
import { updateList } from '@/lib/updateList/updateData';
import NoResult from './NoResult';

const DashBoardResultPage = () => {

  const {currentIndex,showModal,setShowModal,setEditList,paginationData,setFilterValue}=useContext(dashBoardContext);
    const resultBind = paginationData ? paginationData[currentIndex] ?? [] : [];

    const handleModal = (list:listing) =>{
      setEditList(list);
      setShowModal(!showModal);
    }



const handleStatusChange = async (status: 'Approved' | 'Rejected',list:listing) => {
  if (list) {
    const newEditVal: listing = structuredClone(list);
    newEditVal.status = status;
   const response = await updateList(newEditVal);
   window.location.reload();
   console.log(response);
  }
};


console.log(resultBind,'sdfsdfsdfs')
debugger

  return (
    <>
          {resultBind.length != 0 ? 
<div className="overflow-x-auto bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border border-white/20 dark:border-gray-500/20 shadow-lg rounded-xl">

    <table className="w-full table-auto text-left">
      <thead className="bg-gray-200 dark:bg-gray-700">
        <tr>
          <th className="p-3 text-sm md:text-base">ID</th>
          <th className="p-3 text-sm md:text-base">Title</th>
          <th className="p-3 text-sm md:text-base hidden sm:table-cell">Location</th>
          <th className="p-3 text-sm md:text-base">PricePerDay</th>
          <th className="p-3 text-sm md:text-base">Status</th>
          <th className="p-3 text-sm md:text-base">Actions</th>
        </tr>
      </thead>


       
        <tbody>      
            {
          resultBind?.map((list,index)=>{
            // console.log(list,'list');
         return(
         <tr className="border-t" key={index}>
          <td className="p-3 text-sm md:text-base">{list?.id}</td>
          <td className="p-3 text-sm md:text-base">{list.title}</td>
          <td className="p-3 text-sm md:text-base hidden sm:table-cell">{list.location}</td>
          <td className="p-3 text-sm md:text-base">{list?.pricePerDay}</td>
          <td className="p-3">
            <span className="px-2 py-1 text-xs md:text-sm bg-yellow-100 text-yellow-700 rounded-full">{list.status}</span>
          </td>
          <td className="p-3 space-x-1 md:space-x-2">
            <button className="text-green-600 hover:underline text-xs md:text-sm" onClick={()=>{handleStatusChange('Approved',list)}}>Approve</button>
            <button className="text-red-600 hover:underline text-xs md:text-sm" onClick={()=>{handleStatusChange('Rejected',list)}}>Reject</button>
            <button className="text-blue-600 hover:underline text-xs md:text-sm" onClick={()=>{
              handleModal(list)
              }}>Edit</button>
          </td>
         </tr>
            )      
            }) 
   }
        {/* Add more rows as needed */}
      </tbody>
    


 
    </table>
  </div>
  : 

    <NoResult setFilterValue={setFilterValue}/>

  
}  
    </>

  )
}

export default DashBoardResultPage