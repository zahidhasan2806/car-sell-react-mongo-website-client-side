import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import Review from '../../DashBoard/Reviews/Review/Review';
import About from '../About/About';
import Banner from '../Banner/Banner';
import CarCategory from '../CarCategory/CarCategory';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <CarCategory></CarCategory>
            <About></About>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;