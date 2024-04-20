"use client"


import MainLayout from "../layouts/MainLayout"
import TextInput from "../components/TextInput"
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
                        string={"test"}
                        placeholder="item name"
                        error="error ya habibi"
                        />

                    </div>
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
                </form>

                </div>

            </div>
            
        </MainLayout>

    )
}