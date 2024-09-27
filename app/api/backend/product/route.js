import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
import { unstable_noStore as noStore } from 'next/cache';
export async function GET(req) {
  noStore();
  try {
    // Fetch products with their related category information
    const products = await prisma.product.findMany({
      include: {
        category: true, // Include the related category data
      },
      orderBy: {
        id: 'desc',
      },
    });

    // Map the products to include category name
    const productsWithCategoryName = products.map(product => ({
      ...product,
      category_name: product.category.name // Add category name to the product
    }));

    return new Response(JSON.stringify(productsWithCategoryName), { status: 200 });
  } catch (error) {
    console.error("Error retrieving products:", error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
