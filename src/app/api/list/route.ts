import { openDB } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('Fetching listings from database');
    const db = await openDB();
    const listings = await db.all('SELECT * FROM listings');
    console.log(`Found ${listings.length} listings`);
    return NextResponse.json({ listings }, { status: 200 });
  } catch (error) {
    console.error('DB Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}