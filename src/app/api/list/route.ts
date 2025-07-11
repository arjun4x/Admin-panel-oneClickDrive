// import { openDB } from '@/lib/db';
// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function getListFromDB(req:NextApiRequest, res:NextApiResponse) {
// try{
//   const db = await openDB();
//   const listings = await db.all('SELECT * FROM listings');
//   res.status(200).json({ listings });
// }catch(error){
//   res.status(500).json({ error });
// }

// }

import { openDB } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const db = await openDB();
    const listings = await db.all('SELECT * FROM listings');
    return NextResponse.json({ listings }, { status: 200 });
  } catch (error) {
    console.error('DB Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

