import React from 'react';
import car from '../../images/car.png'
import './Tariff.css';
import star from '../../images/start-yellow.gif'

const Tariff = () => {
    return (
        <section className='pt-8 px-4 md:px-16 w-full sm:w-11/12 mx-auto'>
            <h2 className='text-center font-bold text-primary text-xl uppercase'>Our</h2>
            <h2 className='text-center font-bold text-2xl uppercase text-black pb-6'>Tariffs</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-16'>
                <div className='bg-accent hover text-center px-5 pb-6 rounded-md mb-14 sm:mb-0'>
                    <div className='flex items-center justify-center mt-[-60px]'>
                        <img src={car} className='w-[250px]' alt="carImage" />
                    </div>
                    <h2 className='text-xl font-extrabold text-black uppercase py-5'>Economy Class</h2>
                    <p className='py-2 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eos amet vitae id cum temporibus quo corporis. Nulla, voluptatibus harum.</p>
                    <p className='text-primary number font-bold text-3xl py-2'>$1,5/MI</p>
                    <div className='flex items-center justify-center py-6'>
                        <button className='bg-primary text-black rounded-md font-bold border-0 px-6 py-2 uppercase my-0' type="submit">Read More</button>
                    </div>
                    <div className='display'>
                        <img src={star} alt="star" />
                    </div>
                </div>
                <div className='active text-center rounded-md px-5 pb-6 mb-14 sm:mb-0'>
                    <div className='flex items-center justify-center mt-[-60px]'>
                        <img src={car} className='w-[250px]' alt="carImage" />
                    </div>
                    <h2 className='text-xl font-extrabold text-black uppercase py-5'>Economy Class</h2>
                    <p className='py-2 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eos amet vitae id cum temporibus quo corporis. Nulla, voluptatibus harum.</p>
                    <p className='text-black font-bold text-3xl py-2'>$1,5/MI</p>
                    <div className='flex items-center justify-center py-6'>
                        <button className='bg-primary text-black rounded-md font-bold border-0 px-6 py-2 uppercase my-0' type="submit">Read More</button>
                    </div>
                    <div className='display'>
                        <img src={star} alt="star" />
                    </div>
                </div>
                <div className='bg-accent hover rounded-md text-center px-5 pb-6'>
                    <div className='flex items-center justify-center mt-[-60px]'>
                        <img src={car} className='w-[250px]' alt="carImage" />
                    </div>
                    <h2 className='text-xl font-extrabold text-black uppercase py-5'>Economy Class</h2>
                    <p className='py-2 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eos amet vitae id cum temporibus quo corporis. Nulla, voluptatibus harum.</p>
                    <p className='text-primary number font-bold text-3xl py-2'>$1,5/MI</p>
                    <div className='flex items-center justify-center py-6'>
                        <button className='bg-primary text-black rounded-md font-bold border-0 px-6 py-2 uppercase my-0' type="submit">Read More</button>
                    </div>
                    <div className='display'>
                        <img src={star} alt="star" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tariff;