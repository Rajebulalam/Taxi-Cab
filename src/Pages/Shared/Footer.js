import React from 'react';
import footerBg from '../../images/footer_bg.png';
import { FaFacebookF, FaGithub, FaGooglePlusG, FaInstagram, FaLinkedinIn, FaApple, FaTwitter, Fa500Px, FaMapMarkerAlt, FaMousePointer, FaEnvelope, FaTabletAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section style={{ background: `url(${footerBg})`, backgroundSize: 'cover' }} className='py-8'>
            <div className='w-full sm:w-11/12 px-4 sm:px-16 mx-auto'>
                <div className='grid grid-cols-1 text-center sm:text-left sm:grid-cols-2 md:grid-cols-3 gap-12'>
                    <div>
                        <h2 className='text-xl font-bold text-white uppercase border-b-4 border-primary py-4'>About Cab Hub</h2>
                        <p className='py-2 text-white pt-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur incidunt impedit officia voluptas fuga quos magnam, repudiandae, dolorem modi quia saepe omnis natus rem!</p>
                        <div className='py-4 flex items-center justify-center sm:justify-start'>
                            <Link className='pr-4' to='/'><FaFacebookF className='text-primary text-xl'></FaFacebookF></Link>
                            <Link className='pr-4' to='/'><FaGithub className='text-primary text-xl'></FaGithub></Link>
                            <Link className='pr-4' to='/'><FaGooglePlusG className='text-primary text-xl'></FaGooglePlusG></Link>
                            <Link className='pr-4' to='/'><FaInstagram className='text-primary text-xl'></FaInstagram></Link>
                            <Link className='pr-4' to='/'><FaLinkedinIn className='text-primary text-xl'></FaLinkedinIn></Link>
                            <Link to='/'><FaTwitter className='text-primary text-xl'></FaTwitter></Link>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold text-white uppercase border-b-4 border-primary py-4'>Download</h2>
                        <p className='py-2 text-white pt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, et.</p>
                        <div>
                            <div className='flex items-center justify-center sm:justify-start pt-4'>
                                <p className='pr-3 text-primary text-md'>Android Users</p>
                                <Fa500Px className='text-white text-xl'></Fa500Px>
                            </div>
                            <div className='flex items-center justify-center sm:justify-start pt-3'>
                                <p className='pr-3 text-primary'>IOS Users</p>
                                <FaApple className='text-white text-xl'></FaApple>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-bold text-white uppercase border-b-4 border-primary py-4'>Contact</h2>
                        <div className='pt-6'>
                            <div className='flex items-center justify-center sm:justify-start'>
                                <div className='pr-4'>
                                    <FaMapMarkerAlt className='text-white text-xl'></FaMapMarkerAlt>
                                </div>
                                <div>
                                    <p className='text-white'>4333, Dhalai, Hathazari, Chattogram, Bangladesh</p>
                                </div>
                            </div>
                            <div className='flex pt-4 justify-center sm:justify-start'>
                                <FaTabletAlt className='text-white text-xl'></FaTabletAlt>
                                <p className='text-white pl-4'>+880 1872 238027</p>
                            </div>
                            <div className='flex pt-4 justify-center sm:justify-start'>
                                <FaEnvelope className='text-white text-xl'></FaEnvelope>
                                <p className='text-white pl-4'>rajebulalam01@gmail.com</p>
                            </div>
                            <div className='flex pt-4 justify-center sm:justify-start'>
                                <FaMousePointer className='text-white text-xl'></FaMousePointer>
                                <Link to='https://rajebulalamkhokan.com/' className='text-white pl-4'>www.rajebulalamkhokan.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-center text-white pt-10'>Copyright &copy; 2022 Rajebul Alam</p>
            </div>
        </section>
    );
};

export default Footer;