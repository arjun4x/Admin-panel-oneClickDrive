import { NextResponse } from 'next/server';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'carlistings.db');

export async function PUT(req: Request) {
  console.log("ddddddddddddddddddddddddddddd");

  try {
    // const id = context.params?.id;
    // console.log('ID:', id);

    const body = await req.json();
    console.log('Body:', body);

    const { title, location, pricePerDay, status ,id} = body;

    const db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    await db.run(
      `UPDATE listings
       SET title = ?, location = ?, pricePerDay = ?, status = ?
       WHERE id = ?`,
      [title, location, pricePerDay, status, id]
    );

    return NextResponse.json({ message: 'Listing updated successfully' });
  } catch (error) {
      console.log("ddddddddddddddddddddddddddddd");
    return NextResponse.json(
      
      { error: 'Failed to update listing', details: (error as any)?.message || error },
      { status: 500 }
    );
  }
}