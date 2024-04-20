"use client"


import MainLayout from "../layouts/MainLayout"
import TextInput from "../components/TextInput"
import Link from "next/link"
//import { AiOutlineLoading3Quarters } from "react-icons/ai"

export default function List() {
    return (

        <MainLayout>
            <div
                id="ListPage"
                className="mt-4 max-w-[600px] mx-auto px-2"
            >
                <div className="mx-auto bg-white rounded-lg p-3">

                <div className="text-xl text-bold mb-2">Item Details</div>
                <form>
                    <div className="mb-4">
                        <TextInput
                        className="w-full"
                        string={"item name"}
                        placeholder="item name"
                        
                        />

                    </div>
                    <div className="mb-4">
                        <TextInput
                        className="w-full"
                        
                        placeholder="item description"
                        error="error ya habibi"
                        />
                    </div>
                    <div className="mb-4">
                        <TextInput
                        className="w-full"
                        
                        placeholder="building mumber"
                        error="error ya habibi"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    
                    <Link href="/success">
                    <button className="
                                mt-6
                                w-full 
                                text-white 
                                text-lg 
                                font-semibold 
                                p-3 
                                rounded
                                bg-indigo-500
                    "
                    >
                        List Item
                    </button>
                    </Link>

                    

                </form>

                </div>

            </div>
            
        </MainLayout>

    )
}