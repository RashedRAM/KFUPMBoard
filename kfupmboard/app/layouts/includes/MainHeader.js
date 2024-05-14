import debounce from "debounce";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineSearch } from 'react-icons/ai'
import { BiLoaderCircle } from 'react-icons/bi'
import { useUser } from "@/app/context/user";

export default function MainHeader() {
    const [items, setItems] = useState([]);
    const [isSearching, setIsSearching] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const { user } = useUser();

    //useEffect(() => {
        //const checkAdminStatus = async () => {
            //try {
                //const response = await fetch('/api/check-admin');
                //const result = await response.json();
                //if (result.isAdmin) {
                    //setIsAdmin(true);
                //}
            //} catch (error) {
                //console.error('Error checking admin status:', error);
            //}
        //};

        //checkAdminStatus();
   // }, []);

    const handleSearchName = debounce(async (event) => {
        if (event.target.value === "") {
            setItems([]);
            return;
        }

        setIsSearching(true);

        try {
            const response = await fetch(`/api/products/search-by-name/${event.target.value}`);
            const result = await response.json();

            if (result) {
                setItems(result);
                setIsSearching(false);
                return;
            }
            setItems([]);
            setIsSearching(false);
        } catch (error) {
            console.log(error);
            alert(error);
        }
    }, 500);

    return (
        <>
        <div id="MainHeader" className="border-b">
            <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                <div className="flex items-center w-full bg-white">
                    <div className="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto">
                        <Link href="/">
                            <img width="220" src="/images/logo.svg" />
                        </Link>
                        <div className="w-full">
                            <div className="relative">
                                <div className="flex items-center">
                                    <div className="relative flex items-center border-2 border-gray-900 w-full p-2">
                                        <button className="flex items-center">
                                            <AiOutlineSearch size={22}/>
                                        </button>
                                        <input 
                                            className="
                                                w-full
                                                placeholder-gray-400
                                                text-sm
                                                pl-3
                                                focus:outline-none
                                            "
                                            onChange={handleSearchName}
                                            placeholder="Search for stuff"
                                            type="text"
                                        />
                                        {isSearching ? <BiLoaderCircle className="mr-2 animate-spin" size={22} /> : null}
                                        {items.length > 0 ?
                                            <div className="absolute bg-white max-w-[910px] h-auto w-full z-20 left-0 top-12 border p-1">
                                                {items.map((item) => (
                                                    <div className="p-1" key={item.id}>
                                                        <Link 
                                                            href={`/product/${item?.id}`}
                                                            className="flex items-center justify-between w-full cursor-pointer hover:bg-gray-200 p-1 px-2"
                                                        >
                                                            <div className="flex items-center">
                                                                <img className="rounded-md" width="40" src={item?.url+'/40'} />
                                                                <div className="truncate ml-2">{ item?.title }</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        : null}
                                    </div>
                                    <button className="flex items-center bg-indigo-600 text-sm font-semibold text-white p-[11px] ml-2 px-14">
                                        Search
                                    </button>
                                    <Link href="/list">
                                        <button className="flex items-center bg-indigo-400 text-sm font-semibold text-white p-[1px] ml-2 px-14">
                                            List Item
                                        </button>
                                    </Link>
                                    {user &&((user.id =="649661db-d7c2-45c7-bace-c6aceb35ba8e")|| (user.id == "bb447bdf-7bd0-4843-986b-887669ac3db2")||(user.id =="6f76b82f-e3cb-40d4-9f6b-89d8101101db")|| (user.id =="46872906-fb62-4913-bfc8-706b5d720dd0")) && (
                                        <Link href="/reported">
                                            <button className="flex items-center bg-red-600 text-sm font-semibold text-white p-[1px] ml-2 px-14">
                                                Reports
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
