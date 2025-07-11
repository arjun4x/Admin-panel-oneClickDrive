import { NextResponse } from 'next/server';

export async function GET(request: Request) {

  const { origin } = new URL(request.url);

  const response = NextResponse.redirect(`${origin}/`);

  response.cookies.set('token', '', {
    maxAge: 0,
    path: '/', 
    secure: process.env.NODE_ENV === 'production', 
    httpOnly: true,
    sameSite: 'lax',
  });

  return response;
}