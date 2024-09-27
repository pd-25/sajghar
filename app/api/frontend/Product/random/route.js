import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { unstable_noStore as noStore } from 'next/cache';
const prisma = new PrismaClient();

export async function GET(req) {
  noStore();
  try {
 
    const products = await prisma.product.findMany({
      where: {
        status: 'ACTIVE', // Filter for active products
      },
      include: {
        category: true, // Include the related category data
      },
      orderBy: {
        id: 'desc',
      },
    });


    return new Response(JSON.stringify(products), {
      status: 200,
    });
  } catch (error) {
    console.error('Error retrieving products:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}
