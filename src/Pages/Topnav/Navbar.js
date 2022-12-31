import React from 'react';
import './Navbar.css'
import down from '../../images/down-arrow.svg'
const Navbar = () => {



    return (
        <div>


            {/* top nav */}
            <div className="top-nav flex justify-between px-5 lg:px-60 shadow-inner border py-3">

                <div className="top-nav-left  grid grid-cols-3">
                    <p className='top-nav-left-text flex justify-center align-middle my-auto'> <img className='w-5 h-4 mx-3 my-auto' src='https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/ind-flag.svg' alt='x'/>+918000161161</p>
                    <p className='top-nav-left-text flex justify-center align-middle my-auto'> <img className='w-5 h-4 mx-3 my-auto' src='https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/us-flag.svg' alt='x'/>+918000161161</p>
                    <p className='top-nav-left-text flex justify-center align-middle my-auto '> <img className='w-5 h-4 mx-3 my-auto' src='https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/uk-flag.svg' alt='x'/>+918000161161</p>
                </div>

                <div className="top-nav-right flex  justify-between ">
                <p className='top-button mr-2'>Press Release</p>
                <p className='top-button mr-2'>Our Fresh Work</p>
                <p className='top-button top-color'>Schedule Call</p>
                </div>
            </div>



            {/* main nav */}
            <div className="navbar bg-white px-6 lg:px-60 py-0 lg:py-8 shadow-lg my-auto ">

                <div className="navbar-start">


                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Company</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    {/* logo import here */}
                    <img className='logo-top' src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/logo.svg" alt="Workflow" />

                </div>

                {/* Desktop */}
                <div className="navbar-end hidden lg:flex ">
                    <ul className="menu menu-horizontal desk-li-sty">

                        <li tabIndex={0}>
                            <a>
                                Company
                                <img className='arrow-down' src={down} alt="Workflow" />
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <a>
                                Services
                                <img className='arrow-down' src={down} alt="Workflow" />
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <a>
                                Hire Developers
                                <img className='arrow-down' src={down} alt="Workflow" />
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>

                        <li><a>Case Study</a></li>

                        <li tabIndex={0}>
                            <a>
                                Resources
                                <img className='arrow-down' src={down} alt="Workflow" />
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>

                        <li><a>Contact Us</a></li>

                        <li><p className='top-button'>Get A Free Quote</p></li>



                    </ul>
                </div>

            </div>


        </div>

    );
};

export default Navbar;