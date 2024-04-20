"use client"


import TopMenu from './includes/TopMenu'
import MainHeader from './includes/MainHeader';
import Footer from './includes/Footer';


export default function MainLayout({ children }) {
    return (
        <>
            <div id="MainLayout" className="min-w-[410px] max-w-[1300px] mx-auto">
                <div>
                    <TopMenu />
                    <MainHeader/>

                    {children}

                    <Footer/>
                </div>
            </div> 
        </>
    );
}