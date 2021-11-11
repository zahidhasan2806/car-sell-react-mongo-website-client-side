import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Review from '../../DashBoard/Reviews/Review/Review';
// import Review from '../../DashBoard/Reviews/Review/Review';
import Banner from '../Banner/Banner';
import CarCategory from '../CarCategory/CarCategory';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <CarCategory></CarCategory>
            <Review></Review>
        </div>
    );
};

export default Home;