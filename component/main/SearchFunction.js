
"use server"
// lib/searchProducts.js
import prisma from '@/db'; // Ensure this is the correct path to your Prisma instance
import { unstable_noStore as noStore } from 'next/cache';
export async function searchProducts(query) {
  noStore();
  if (!query || query.length < 3) return [];

  try {
    const results = await prisma.product.findMany({
      where: {
        name: {
          contains: query,
        },
        status: 'ACTIVE',
      },
      include :{
        category : true,

      },
      orderBy: {
        id: 'desc',
      },
    });
 console.log(results)
    return results;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
}
