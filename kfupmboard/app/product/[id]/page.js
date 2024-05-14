"use client"

import useIsLoading from "@/app/hooks/useIsLoading"
import MainLayout from "@/app/layouts/MainLayout"
import { useUser } from "@/app/context/user";
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

//the page for each proect
export default function Product({ params }) {
    //this state is to get the product
    const [product, setProduct] = useState({});
    const { user } = useUser();
    const router = useRouter();
    const supabase = createClientComponentClient();

    //uses the api to get the product by id
    const getProduct = async () => {
        useIsLoading(true);
        const response = await fetch(`/api/product/${params.id}`);
        const prod = await response.json();
        setProduct(prod);
        useIsLoading(false);
    };

    //when the page is loaded get the product
    useEffect(() => {
        getProduct();
    }, []);

    //function for reporting the product
    const reportProduct = async () => {
        try {
            const response = await fetch('/api/report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ product_id: product.id }),
            })

            if (!response.ok) {
                throw new Error('Failed to report product')
            }

            alert('Product reported successfully')
        } catch (error) {
            console.error(error)
            alert('An error occurred while reporting the product')
        }
    }

    //function for deleting the product
    const deleteProduct = async () => {
        
        try {
            // await supabase
            // .from('Products')
            // .delete()
            // .match({'id':product.id})
            const response = await fetch(`/api/product/delete/${params.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ product_id: product.id }),
            })

            if (!response.ok) {
                throw new Error('Failed to delete product')
            }

            alert('Product deleted successfully')
        } catch (error) {
            console.error(error)
            alert('An error occurred while deleting the product')
        }
        router.push('/');
    }


    //user interfacxe for the product
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

                        <div className="border-b py-1" />
                        <div className="pt-3">
                            <div className="font-semibold pb-1">Phone number:</div>
                            <div className="text-sm">{product?.number}</div>
                        </div>

                        <div />

                        {user?.id === product?.user_id ? (
                        <button 
                        className="bg-red-600 text-white rounded-md px-4 py-2 mt-4"
                        onClick={deleteProduct}
                        >
                            Delete
                        </button>
                    ) : (
                        <button 
                            className="bg-red-600 text-white rounded-md px-4 py-2 mt-4"
                            onClick={reportProduct}
                        >
                            Report
                        </button>
                    )}
                        
                    </div>
                </div>
            </div>
        </MainLayout>
        </>
    )
}
