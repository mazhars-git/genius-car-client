import React from 'react'
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Main() {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet> 
            <Footer></Footer>
        </div>
    )
}

export default Main;
