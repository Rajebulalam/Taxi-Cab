import React from 'react';
import testimonial from '../../images/testimonial.png';
import jhon from '../../images/jhon.png';

const Testimonial = () => {
    return (
        <section style={{ background: `url(${testimonial})`, backgroundRepeat: 'cover' }} >
            <div className='py-12 px-4 sm:px-16 w-full sm:w-11/12 mx-auto'>
                <h3 className='text-primary font-bold text-center text-2xl uppercase'>Happy Client's</h3>
                <h2 className='text-white font-bold text-center text-3xl uppercase'>Testimonials</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 pt-16'>
                    <div className='bg-black px-3 py-5 rounded-xl'>
                        <p className='text-white py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quas neque voluptate tempore illum esse voluptas id perspiciatis architecto reprehenderit!</p>
                        <div className='flex items-center'>
                            <img src={jhon} alt="personImage" />
                            <div className='pl-4'>
                                <h3 className='font-bold text-xl uppercase text-primary'>Adam Zampa</h3>
                                <h4 className='font-bold text-md uppercase text-white'>Business Man</h4>
                            </div>
                        </div>
                    </div>
                    <div className='bg-black px-3 py-5 rounded-xl'>
                        <p className='text-white py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quas neque voluptate tempore illum esse voluptas id perspiciatis architecto reprehenderit!</p>
                        <div className='flex items-center'>
                            <img src={jhon} alt="personImage" />
                            <div className='pl-4'>
                                <h3 className='font-bold text-xl uppercase text-primary'>Adam Zampa</h3>
                                <h4 className='font-bold text-md uppercase text-white'>Business Man</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;