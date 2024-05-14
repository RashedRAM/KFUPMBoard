'use client';

import { AiOutlineLoading3Quarters } from "react-icons/ai";

//loading component
export default function Loading() {
    
  return ( 
    <>
      <div
        className= "fixed bg-black bg-opacity-70 inset-0 w-full z-40 flex items-center justify-center h-[100vh] overflow-hidden "
      >

        <div className="p-3 rounded-md">
          <AiOutlineLoading3Quarters size={100} className="animate-spin text-blue-400 " />
          <div className="text-center pt-5 text-xl font-bold text-white">Loading...</div>
        </div>
          
      </div>
    </>
  );
};