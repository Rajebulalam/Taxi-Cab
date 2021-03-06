import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Connect from './Connect';
import Download from './Download';
import Features from './Features';
import Focus from './Focus';
import Tariff from './Tariff';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <Focus></Focus>
            <Tariff></Tariff>
            <Features></Features>
            <Download></Download>
            <Testimonial></Testimonial>
            <Connect></Connect>
            <Footer></Footer>
        </section>
    );
};

export default Home;