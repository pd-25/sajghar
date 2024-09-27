import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from 'next/cache';
const prisma = new PrismaClient();

export async function GET(req) {
  noStore();
  try {
    const inquiry = await prisma.productInquiry.findMany(
     { orderBy: {
        id: 'desc',
      },}
    );
    return new Response(JSON.stringify(inquiry), { status: 200 });
  } catch (error) {
    console.error("Error retrieving product inquiry:", error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
