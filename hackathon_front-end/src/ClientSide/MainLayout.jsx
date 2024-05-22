// src/layouts/MainLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
// import Header from '../components/Header';
import Footer from './Footer';
import Component from './Navbar';
import Header from './Header';

const MainLayout = () => {
    return (
        <>
            <Component />
            {/*  */}
            {/* <header>
                <Header />
            </header> */}
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;
