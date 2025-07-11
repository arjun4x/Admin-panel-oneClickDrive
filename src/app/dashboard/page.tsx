import React from 'react'
import DashBoard from '@/Components/DashBoard/DashBoard'
import { fetchListContent } from '@/lib/api/listFetch'
import { FetchListResult}  from '@/types/DashBoardInterFace'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const DashBoardMain = async() => {
const cookie =  cookies().get('token');
const token: string | undefined = cookie?.value;
   if (!token) 
redirect('/');




       const result: FetchListResult = await fetchListContent();
       console.log(result,'dasfsfsdfsdf');
  return (
    <>
    <DashBoard
    result={result}
    />
    </>
  )
}

export default DashBoardMain