'use client';

import Link from "next/link";

//styling for each product
export default function Product({ product }) {
    
  return ( 
    <>
      <Link 
        href={`/product/${product.id}`} 
        className='max-w-[200px] p-1.5 border border-gray-50 hover:border-gray-200 hover:shadow-xl bg-gray-100 rounded mx-auto'
      >
        { product?.url ? <img className="rounded cursor-pointer" src={product.url+'/190'} /> : null }

        <div className="pt-2 px-1">

          <div className="font-semibold text-[15px] hover:underline cursor-pointer">{product?.title}</div>
          <div className="font-extrabold">Building {(product?.building)}</div>

          

        </div>
      </Link>
    </>
  );
};