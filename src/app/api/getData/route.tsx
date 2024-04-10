import { tableData } from "@/lib/constant";

import { NextRequest, NextResponse } from "next/server";

// To handle a GET request to /api

export async function GET() {
  return NextResponse.json({ response: tableData }, { status: 200 });
}
