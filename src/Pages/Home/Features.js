import React from 'react';
import featureBg from '../../images/featureBg.png';
import star from '../../images/star.png';
import cup from '../../images/cup.png';
import flag from '../../images/flag.png';
import setting from '../../images/setting.png';

const Features = () => {
    return (
        <section style={{ background: `url(${featureBg})`, backgroundSize: 'cover' }} className='py-8 px-4'>
            <div className='w-full sm:w-11/12 mx-auto sm:px-14'>
                <h3 className='text-primary font-bold text-center text-2xl uppercase'>We Do Best</h3>
                <h2 className='text-white font-bold text-center text-3xl uppercase'>Than You Wish</h2>
                <div className='py-10 grid grid-cols-1 sm:grid-cols-2 gap-14'>
                    <div className='flex items-center'>
                        <div className='bg-primary p-4 flex items-center justify-center rounded-full w-[10%]'>
                            <img src={star} alt="featureImg" />
                        </div>
                        <div className='w-[90%] pl-4'>
                            <h4 className='text-primary font-bold uppercase'>Home Pickup</h4>
                            <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione voluptatum assumenda iure. Saepe, praesentium.</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='bg-primary p-4 flex items-center justify-center rounded-full w-[10%]'>
                            <img src={cup} alt="featureImg" />
                        </div>
                        <div className='w-[90%] pl-4'>
                            <h4 className='text-primary font-bold uppercase'>First Booking</h4>
                            <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione voluptatum assumenda iure. Saepe, praesentium.</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='bg-primary p-4 flex items-center justify-center rounded-full w-[10%]'>
                            <img src={flag} alt="featureImg" />
                        </div>
                        <div className='w-[90%] pl-4'>
                            <h4 className='text-primary font-bold uppercase'>Bonus for Ride</h4>
                            <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione voluptatum assumenda iure. Saepe, praesentium.</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='bg-primary p-4 flex items-center justify-center rounded-full w-[10%]'>
                            <img src={setting} alt="featureImg" />
                        </div>
                        <div className='w-[90%] pl-4'>
                            <h4 className='text-primary font-bold uppercase'>GPS Searching</h4>
                            <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione voluptatum assumenda iure. Saepe, praesentium.</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center py-4'>
                    <button className='bg-primary text-black rounded-md font-bold hover:bg-black hover:text-primary border-0 px-6 py-3 uppercase my-0' type="submit">Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Features;