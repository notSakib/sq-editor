import { NextRequest, NextResponse } from "next/server";
export async function GET() {
  const dbColumns = ["Order", "Customer", "City", "Living"];
  return NextResponse.json({ response: dbColumns }, { status: 200 });
}
