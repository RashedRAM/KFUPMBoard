"use client"


import TopMenu from './includes/TopMenu'
import MainHeader from './includes/MainHeader';
import Footer from './includes/Footer';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';

//this is the comment for the template laytout the main page follows
export default function MainLayout({ children }) {
    const [isLoading, setIsLoading] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect (() => {
        window.addEventListener('storage', function () {
            let res = localStorage.getItem('isLoading');
            res === 'false' ? setIsLoading(false) : setIsLoading(true);

        });
    });
    return (
        <>
            <div id="MainLayout" className="min-w-[410px] max-w-[1300px] mx-auto">
                <div>
                    {isLoading ? <Loading/> : <div></div>}
                    <TopMenu setIsAdmin={setIsAdmin}/>
                    <MainHeader isAdmin={isAdmin}/>

                    {children}

                    <Footer/>
                </div>
            </div> 
        </>
    );
}