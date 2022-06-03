import React from 'react';
import car from '../../images/car.png'

const Focus = () => {
    return (
        <section className='bg-primary py-10 '>
            <div className='w-full sm:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 px-4 sm:px-16 gap-10'>
                <div className='pt-10 mx-auto'>
                    <h3 className='font-extrabold text-lg text-black uppercase'>Best In City</h3>
                    <h2 className='text-3xl font-bold text-black uppercase pt-2 p-0'>Trusted Cab Services In Chattogram</h2>
                    <p className='py-6 text-lg pb-8'>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur dapibus pulvinar, sapien eros sodales ante, euismod aliquet nulla metus a mauris.Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur dapibus pulvinar, sapien eros sodales ante, euismod aliquet nulla metus a mauris.</p>
                    <button className='px-6 py-2 rounded-md text-white bg-black btn' type="submit">Read More</button>
                </div>
                <div className='flex items-center justify-center pt-10 px-3 md:px-6'>
                    <div className='bg-white w-full shadow-2xl'>
                        <h3 className='bg-black text-white uppercase font-bold text-xl p-3 text-center'>Booking A <span className='text-primary'>Cab</span></h3>
                        <div className='px-2 py-10 flex items-center justify-center'>
                            <img src={car} alt="car_img" />
                        </div>
                        <div className='text-center'>
                            <button className='px-6 py-2 w-full rounded-none text-white bg-black btn' type="submit">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Focus;