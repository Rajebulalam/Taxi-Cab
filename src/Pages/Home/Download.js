import React from 'react';
import googlePlay from '../../images/google_play.png';
import apple from '../../images/apple.png';
import mobile from '../../images/mobile.png';

const Download = () => {
    return (
        <section className='w-full sm:w-11/12 px-4 pt-8 sm:px-16 mx-auto'>
            <h3 className='text-primary font-bold text-center text-2xl uppercase'>Download</h3>
            <h2 className='text-black font-bold text-center text-3xl uppercase'>Best Cab Services</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-14 pb-10 w-full sm:w-5/6 mx-auto'>
                <div>
                    <h2 className='text-black font-bold py-6 text-2xl'>Downlaod the Cab voucher app free! Get Exciting New Offers</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quibusdam, fuga voluptates ipsa cupiditate error aut est ratione, tempore, exercitationem doloremque architecto corrupti eligendi sequi in similique ipsum neque nisi.</p>
                    <div className='flex items-center justify-center'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10 '>
                            <img src={googlePlay} className='w-[170px]' alt="googlePlay" />
                            <img src={apple} className='w-[170px]' alt="appleApp" />
                        </div>
                    </div>
                </div>
                <div className='sm:flex items-center justify-center pl-0 sm:pl-16 hidden'>
                    <img src={mobile} alt="mobile" />
                </div>
            </div>
        </section>
    );
};

export default Download;