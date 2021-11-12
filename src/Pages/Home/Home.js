import React from 'react';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import Products from './Products/Products';
import SalesTeam from './SalesTeam/SalesTeam';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products />
            <SalesTeam></SalesTeam>
            <Footer />
        </div>
    );
};

export default Home;