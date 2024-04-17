'use client'

import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div id="Footer" className="border-t mt-20 px-2">
                <div className="flex items-baseline justify-between w-full mx-auto max-w-[1200px] py-10">
                    <ul className="text-gray-700">
                        <Link href="/">
                                <img width="120" src="/images/logo.svg" />
                    </Link>
                    </ul>

                    <ul className="text-gray-600">
                        <li className=" text-sm">All rights reserved  2024®</li>
                    </ul>

                    <ul className="text-gray-700">
                        <li className="font-bold text-lg">About KFUPMBoard</li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">Who are we</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Contact Us</li>
                        <li className="flex items-center space-x-4 mt-2">
                        <Link href="/">
                                <img src="/images/twitter.svg" alt="Twitter" className="w-6 h-6" />  
                            </Link>
                            <Link href="/">
                                <img src="/images/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />  
                            </Link>
                        </li>
                    </ul>

                   

                    
                </div>
            </div>
        </>
    )
  }
  