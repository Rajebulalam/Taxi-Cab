import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {

    const menuItem = <>
        <li className='hover:bg-primary hover:text-black hover:rounded-full px-3 my-1'><Link className='hover:bg-transparent' to='/'>Home</Link></li>
        <li className='hover:bg-primary hover:text-black hover:rounded-full px-3 my-0'><Link className='hover:bg-transparent' to='/'>About</Link></li>
        <li className='hover:bg-primary hover:text-black hover:rounded-full px-3 my-1'><Link className='hover:bg-transparent' to='/'>Features</Link></li>
        <li className='hover:bg-primary hover:text-black hover:rounded-full px-3 my-1'><Link className='hover:bg-transparent' to='/'>Blog</Link></li>
        <li className='hover:bg-primary hover:text-black hover:rounded-full px-3 my-1'><Link className='hover:bg-transparent' to='/'>Order</Link></li>
        <li className='hover:bg-primary hover:text-black hover:rounded-full px-3 my-1'><Link className='hover:bg-transparent' to='/'>Contacts</Link></li>
        <li className='bg-primary ml-2 text-black rounded-full px-3 my-1 hover:bg-white'><Link className='hover:bg-transparent' to='/'>Login</Link></li>
    </>

    return (
        <section className='px-4 sm:px-10'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost bg-primary hover:bg-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact bg-secondary dropdown-content mt-3 p-2 shadow text-white rounded-box w-52">
                            {
                                menuItem
                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost"> <img src={logo} alt="logo-img" /> </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal text-white uppercase font-medium p-0">
                        {
                            menuItem
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Header;