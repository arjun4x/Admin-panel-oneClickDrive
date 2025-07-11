import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = cookies();

  // Delete cookie by setting it with maxAge=0 or expires in the past
  cookieStore.delete('token');

//   return NextResponse.redirect(new URL('/', 'http://localhost:3000'));
}