import React from 'react';
import headerBg from '../../images/headerBg.png';
import Header from '../Shared/Header';
import bannerCar from '../../images/banner_car.png';

const Banner = () => {
    return (
        <section style={{ background: `url(${headerBg})`, backgroundSize: 'cover' }} className='pt-2 h-[500px]'>
            <Header></Header>
            <div className='text-center pt-8'>
                <h2 className='text-primary text-xl uppercase font-bold'>Book Cab Now</h2>
                <p className='text-4xl font-bold text-white py-2'>+000 555 777 999</p>
                <p className='text-white font-medium' style={{ letterSpacing: '10px' }}>www.taxicab.com</p>
                <div className='flex items-center justify-center'>
                    <img src={bannerCar} className='w-[500px] mt-[50px]' alt="banner-img" />
                </div>
            </div>
        </section>
    );
};

export default Banner;