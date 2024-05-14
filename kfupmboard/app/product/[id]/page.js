"use client"

import useIsLoading from "@/app/hooks/useIsLoading"
import MainLayout from "@/app/layouts/MainLayout"
import { useEffect, useState } from "react"

export default function Product({ params }) {

    const [product, setProduct] = useState({})

    const getProduct = async () => {
      useIsLoading(true)
      setProduct({})

      const response = await fetch(`/api/product/${params.id}`)
      const prod = await response.json()
      setProduct(prod)
      useIsLoading(false)
    }

    useEffect(() => {
      getProduct()
    }, [])

    
    return (
        <>
        <MainLayout>
            <div className="max-w-[1200px] mx-auto">
                <div className="flex px-4 py-10">
                {product?.url 
              ? <img className="w-[40%] rounded-lg" src={product?.url+'/280'} /> 
              : <div className="w-[40%]"></div> 
            }

            <div className="px-4 w-full">
                <div className="font-bold text-xl">{product?.title}</div>
                <div className="text-sm text-gray-700 pt-2">Building: {product?.building}</div>

                <div className="border-b py-1" />

                <div className="pt-3 pb-2">
                <div className="flex items-center">
                  Type: <span className="font-bold text-[17px] ml-2">Temporary</span>
                </div>
              </div>

              <div className="border-b py-1" />
              <div className="pt-3">
                <div className="font-semibold pb-1">Description:</div>
                <div className="text-sm">{product?.description}</div>
              </div>

              <button className="bg-indigo-900 text-white rounded-md px-4 py-2 mt-4 ">Contact</button>
              <div/>
              <button className="bg-red-600 text-white rounded-md px-4 py-2 mt-4 ">Report</button>



            </div>

                </div>
                
            </div>
        </MainLayout>
        </>
    )
}