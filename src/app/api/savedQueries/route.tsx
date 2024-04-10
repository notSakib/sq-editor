import { NextRequest, NextResponse } from "next/server";

// To handle a GET request to /api
let savedQueries: any = [
  "SELECT * FROM CUSTOMER",
  "SELECT id,name FROM CUSTOMER",
  "SELECT * FROM USEr",
  "SELECT * FROM ORDER",
];
export async function GET(request: NextRequest) {
  return NextResponse.json({ response: savedQueries }, { status: 200 });
}
export async function POST(request: NextRequest) {
  const data = await request.json();
  savedQueries = [...savedQueries, data.query];
  return NextResponse.json({ response: savedQueries }, { status: 200 });
}
export async function DELETE(request: NextRequest) {
  const data = await request.json();
  savedQueries = savedQueries.filter(
    (_: any, index: number) => index !== data.index
  );

  return NextResponse.json({ response: savedQueries }, { status: 200 });
}
