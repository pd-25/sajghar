import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { unstable_noStore as noStore } from 'next/cache';
const prisma = new PrismaClient();

export async function GET(req) {
    noStore();
    try {
        const url = new URL(req.url);
        const slug = url.pathname.split('/').pop();

        const product = await prisma.product.findFirst({
            where: {
                slug: slug,
                status: 'ACTIVE' // Filter by both slug and status
            },
            include: {
                images: true, // Include the related category data
              },
        });

        if (!product) {
            return new Response(JSON.stringify({ error: 'Product not found' }), { status: 404 });
        }

        return new Response(JSON.stringify(product), { status: 200 });
    } catch (error) {
        console.error('Error fetching product:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}
