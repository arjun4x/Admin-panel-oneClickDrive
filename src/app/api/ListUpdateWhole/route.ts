// import { NextResponse } from 'next/server';
// import { open } from 'sqlite';
// import sqlite3 from 'sqlite3';
// import path from 'path';

// const dbPath = path.resolve(process.cwd(), 'carlistings.db');

// export async function PUT(req: Request) {

//   try {
//     // const id = context.params?.id;
//     // console.log('ID:', id);

//     const body = await req.json();
//     console.log('Body:', body);

//     const { title, location, pricePerDay, status ,id} = body;

//     const db = await open({
//       filename: dbPath,
//       driver: sqlite3.Database,
//     });

//     await db.run(
//       `UPDATE listings
//        SET title = ?, location = ?, pricePerDay = ?, status = ?
//        WHERE id = ?`,
//       [title, location, pricePerDay, status, id]
//     );

//     return NextResponse.json({ message: 'Listing updated successfully' });
//   } catch (error) {
//     return NextResponse.json(
      
//       { error: 'Failed to update listing', details: (error as any)?.message || error },
//       { status: 500 }
//     );
//   }
// }

// import { NextRequest, NextResponse } from 'next/server';
// import { openDB } from '../../../lib/db';

// export async function PUT(req: NextRequest) {
//   try {
//     const db = await openDB();
//     const body = await req.json();
//     const { id, title, location, pricePerDay, status, description, make, model, year, imageUrl } = body;

//     await db.run(
//       `UPDATE listings SET
//         title = ?, 
//         location = ?, 
//         pricePerDay = ?, 
//         status = ?, 
//         description = ?, 
//         make = ?, 
//         model = ?, 
//         year = ?, 
//         imageUrl = ?
//        WHERE id = ?`,
//       [title, location, pricePerDay, status, description, make, model, year, imageUrl, id]
//     );

//     return NextResponse.json({ message: 'Listing updated successfully' }, { status: 200 });
//   } catch (error: unknown) {
//     const err = error as Error;
//     return NextResponse.json(
//       { error: 'Failed to update listing', details: err.message },
//       { status: 500 }
//     );
//   }
// }

// app/api/ListUpdateWhole/route.ts
// import { NextRequest, NextResponse } from 'next/server';
// import { openDB } from '@/lib/db';

// export async function PUT(req: NextRequest) {
//   try {
//     const db = await openDB();
//     const body = await req.json();
//     const { listVal } = body;
    
//     if (!listVal) {
//       return NextResponse.json(
//         { error: 'Missing listVal in request body' },
//         { status: 400 }
//       );
//     }

//     await db.run(
//       `UPDATE listings SET
//         title = ?, 
//         location = ?, 
//         pricePerDay = ?, 
//         status = ?, 
//         description = ?, 
//         make = ?, 
//         model = ?, 
//         year = ?, 
//         imageUrl = ?
//        WHERE id = ?`,
//       [
//         listVal.title,
//         listVal.location,
//         listVal.pricePerDay,
//         listVal.status,
//         listVal.description,
//         listVal.make,
//         listVal.model,
//         listVal.year,
//         listVal.imageUrl,
//         listVal.id
//       ]
//     );
//     await db.exec('COMMIT');

//     return NextResponse.json(
//       { message: 'Listing updated successfully' },
//       { status: 200 }
//     );
//   } catch (error: unknown) {
//     const err = error as Error;
//     console.error('Update error:', err);
//     return NextResponse.json(
//       { error: 'Failed to update listing', details: err.message },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from 'next/server';
import { openDB } from '@/lib/db';

export async function PUT(req: NextRequest) {
  try {
    const db = await openDB(); // Open database connection
    const body = await req.json();
    const { listVal } = body;

    if (!listVal) {
      return NextResponse.json(
        { error: 'Missing listVal in request body' },
        { status: 400 }
      );
    }

    await db.run(
      `UPDATE listings SET
        title = ?, 
        location = ?, 
        pricePerDay = ?, 
        status = ?, 
        description = ?, 
        make = ?, 
        model = ?, 
        year = ?, 
        imageUrl = ?
       WHERE id = ?`,
      [
        listVal.title,
        listVal.location,
        listVal.pricePerDay,
        listVal.status,
        listVal.description,
        listVal.make,
        listVal.model,
        listVal.year,
        listVal.imageUrl,
        listVal.id
      ]
    );

    // No need for COMMIT unless you're explicitly managing transactions

    return NextResponse.json(
      { message: 'Listing updated successfully' },
      { status: 200 }
    );
  } catch (error: unknown) {
    const err = error as Error;
    console.error('Update error:', err);
    return NextResponse.json(
      { error: 'Failed to update listing', details: err.message },
      { status: 500 }
    );
  }
}

