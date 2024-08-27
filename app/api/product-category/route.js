import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { image, category_name, category_description, slug } = await req.json();

    // Check if the slug is unique
    const existingCategory = await prisma.productCategory.findUnique({
      where: { slug },
    });

    if (existingCategory) {
      return new Response(JSON.stringify({ error: 'Slug already exists' }), { status: 409 });
    }

    // Create the new category
    const newCategory = await prisma.productCategory.create({
      data: {
        image,
        category_name,
        category_description,
        slug,
      },
    });

    return new Response(JSON.stringify(newCategory), { status: 201 });
  } catch (error) {
    console.error("Error creating product category:", error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
