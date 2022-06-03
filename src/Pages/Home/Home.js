import React from 'react';
import Banner from './Banner';
import Download from './Download';
import Features from './Features';
import Focus from './Focus';
import Tariff from './Tariff';

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <Focus></Focus>
            <Tariff></Tariff>
            <Features></Features>
            <Download></Download>
        </section>
    );
};

export default Home;