
import CategorySlug from '@/component/main/category/CategorySlug';
import prisma from '@/db';
import React from 'react'
import { unstable_noStore as noStore } from 'next/cache';
const page = ({params}) => {
  const  catslug  = params.catslug;
  return (
    <CategorySlug catslug={catslug}/>
  )
}

export default page



export async function generateMetadata({ params })  {
  noStore();
  const catslug = params.catslug;

  const data = await prisma.productCategory.findUnique({
    where: { slug: catslug },
  });



  if (!data) {
    console.log('No data found for the given slug:', catslug);
    return {
      title: 'Category not found',
    };
  }

  return {
  title: `Sajghor - ${data.category_name} Collection | Kolkata`,
  description: "Browse the exquisite ${data.category_name} collection at Sajghor, where tradition meets modernity. Discover unique designs inspired by Bengali heritage and contemporary fashion.",
  };
}
