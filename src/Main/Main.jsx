import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';
import Products from '../Components/Products/Products';


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Products></Products>
            
        </div>
    );
};

export default Main;