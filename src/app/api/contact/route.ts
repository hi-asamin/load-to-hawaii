import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body: ContactApiRequestBody = await req.json();
  console.log(body.email);
  return NextResponse.json(body, { status: 200 });
}
