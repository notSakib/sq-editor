import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import { makeData } from "@/lib/utils";

// To handle a GET request to /api

export async function GET() {
  return NextResponse.json({ response: makeData(50_000) }, { status: 200 });
}
