"use client"

import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

export default function TopMenu() {
    return (
        <>
        <div id="TopMenu" className="border-b">
            <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
            <ul 
                        id="TopMenuLeft"
                        className="flex items-center text-[11px] text-[#333333] px-2 h-8"
            >
                        <li className="relative px-3">
                            <Link href="/auth" className="flex items-center gap-2 hover:underline cursor-pointer">
                                <div>Login</div>
                                <BsChevronDown/>

                            </Link>
                            <div
                            id= "AuthDropdown"
                            className="hidden absolute bg-white w-[200px] text-[#333333] z-40 top-[20px] left-0 border shadow-lg"
                            >
                                <div>
                                    <div className="flex items-center justify-start gap-1 p-3">
                                        <img width={50} src="https://avatars.githubusercontent.com/u/94685999?v=4" />
                                        <div className="font-bold text-[13px]">Rashed</div>
                                    </div>

                                    <div className="border-b"/>
                                    <ul className="bg-white">
                                    <li className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                                            My offered items
                                            </li>
                                        <li className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                                            Sign Out
                                            </li>

                                    </ul>
                                    
                                </div>

                            </div>
                            

                        </li>

            </ul>


            </div>
        </div>
        </>
    )
}