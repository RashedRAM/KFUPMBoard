// TopMenu.js

"use client";

import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { useUser } from "@/app/context/user";
import { useState } from "react";

export default function TopMenu({ setIsAdmin }) {
    const { user } = useUser();

    const [isMenu, setIsMenu] = useState(false);
    const [role, setRole] = useState('User');

    const isLoggedIn = () => {
        if (user && user?.id) {
            return (
                console.log(user.user_metadata.name),
                <button
                    onClick={() => !isMenu ? setIsMenu(true) : setIsMenu(false)}
                    className="flex items-center gap-2 hover:underline cursor-pointer"
                >
                    <div>Hi, {user.user_metadata.name}</div>
                    <BsChevronDown />
                </button>
            );
        }

        return (
            <Link href="/auth" className="flex items-center gap-2 hover:underline cursor-pointer">
                <div>Login</div>
                <BsChevronDown />
            </Link>
        );
    };

    const toggleRole = () => {
        const newRole = role === 'User' ? 'Admin' : 'User';
        setRole(newRole);
        setIsAdmin(newRole === 'Admin');
    };

    return (
        <>
            <div id="TopMenu" className="border-b">
                <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                    <ul 
                        id="TopMenuLeft"
                        className="flex items-center text-[11px] text-[#333333] px-2 h-8"
                    >
                        <li className="relative px-3">
                            {isLoggedIn()}
                            {user && user?.id && (
                                <button
                                    onClick={toggleRole}
                                    className="ml-4 flex items-center gap-2 hover:underline cursor-pointer"
                                >
                                    <div>{role}</div>
                                </button>
                            )}
                            <div
                                id="AuthDropdown"
                                className={`
                                    absolute bg-white w-[200px] text-[#333333] z-40 top-[20px] left-0 border shadow-lg
                                    ${isMenu ? 'visible' : 'hidden'}
                                `}
                            >
                                <div>
                                    <div className="flex items-center justify-start gap-1 p-3">
                                        <img width={50} src={user?.user_metadata.picture} />
                                        <div className="font-bold text-[13px]">{user?.user_metadata.name}</div>
                                    </div>
                                    <div className="border-b" />
                                    <ul className="bg-white">
                                        <li className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                                            <Link href="/OfferedItems" className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                                                My offered items
                                            </Link>
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
    );
}
