import ProductSlug from '@/component/main/category/ProductSlug'
import React from 'react'
import { unstable_noStore as noStore } from 'next/cache';
import prisma from '@/db';
const page = async ({params}) => {
  noStore();
  
  const product = await prisma.product.findFirst({
    where: {
        slug: params.productslug,
        status: 'ACTIVE' // Filter by both slug and status
    },
    include: {
        images: true, // Include the related category data
      },
});
// console.log(product)
  return (
    <ProductSlug productdata ={product}/>
  )
}

export default page


export async function generateMetadata({ params })  {
  noStore();
  const catslug = params.productslug;

  const data = await prisma.product.findUnique({
    where: { slug: catslug },
  });



  if (!data) {
    console.log('No data found for the given slug:', catslug);
    return {
      title: 'Category not found',
    };
  }

  return {
    title: `Sajghor - ${data.name} | Kolkata`,
    description: `Discover the elegance of the ${data.name} from Sajghor. This unique piece blends traditional Bengali craftsmanship with modern fashion, perfect for any occasion.`,
  
  };
}