"use client"


import TopMenu from './includes/TopMenu'
import MainHeader from './includes/MainHeader';
import Footer from './includes/Footer';


export default function MainLayout({ children }) {
    return (
        <>
            <div id="MainLayout" className="min-w-[1050px] max-w-[1030px] mx-auto">
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