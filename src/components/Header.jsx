import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { CiUser, CiHeart } from 'react-icons/ci'
import { BsArrowRepeat, BsCart3 } from 'react-icons/bs'
import { GrFormClose } from 'react-icons/gr'

const Header = () => {

    const [showSideMenu, setShowSideMenu] = useState(false);

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowSideMenu(true);
    }

    const handleSideMenuClose = () => {
        setShowSideMenu(false);
    }

    return (
        <>

            <header className="header-top py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
                        </div>
                        <div className="col-6">
                            <p className='text-end text-white mb-0'>
                                Hotline: <Link className='text-white' to="tel: +2 01278374798">+2 01278374798</Link>
                            </p>

                        </div>
                    </div>
                </div>
            </header>

            <header className="header-upper">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2>
                                <Link className='text-white pt-2'>
                                    CO-MMERCE
                                </Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <input
                                    type="search"
                                    className="form-control py-2"
                                    placeholder="Search Product Here..."
                                    aria-label="Search Product Here..."
                                    aria-describedby="basic-addon2" />
                                <button
                                    type="button"
                                    className="input-group-text p-3"
                                    id="basic-addon2">
                                    <BsSearch className='fs-6' />
                                </button>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link to='/compare-product' className='d-flex align-items-center gap-10 text-white'>
                                        <BsArrowRepeat className='fs-2' />
                                        <p className='mb-0 fs-6 fw-light'>
                                            Compare <br />Products
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/wishlist' className='d-flex align-items-center gap-10 text-white'>
                                        <CiHeart className='fs-2' />
                                        <p className='mb-0 fs-6 fw-light'>
                                            Favorite <br /> Wishlist
                                        </p>
                                    </Link>
                                </div>
                                <div className='dropdown log-menu'>
                                    <button className='border-none ' data-bs-toggle="dropdown" aria-expanded="false">
                                        <Link to='/Login' className='d-flex align-items-center gap-10 text-white '>
                                            <CiUser className='fs-2' />
                                            <p className='mb-0 fs-6 fw-light'>
                                                Log In <br /> My Account
                                            </p>
                                        </Link>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/Login">Login</Link></li>
                                        <li><Link className="dropdown-item" to="/SignUp">SignUp</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <Link to='/cart' onClick={handleCartClick} className='d-flex align-items-center gap-10 text-white'>
                                        <BsCart3 className='fs-2' />
                                        <div className='d-flex flex-column gap-10'>
                                            <span className='badge bg-white text-dark'>0</span>
                                            <p className='mb-0 fs-6'>
                                                $ 0.00
                                            </p>
                                        </div>
                                    </Link>
                                    {
                                        showSideMenu && <div className="side-menu">
                                        <div className="container-fluid">
                                            <div className="row">
                                                    <div className="col-12">
                                                        <GrFormClose onClick={handleSideMenuClose} className='fs-2' />
                                                        
                                                </div>
                                            </div>
                                        </div>
                                        </div> 
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>

            <header className="header-bottom py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div className='border-end'>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center pe-4" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src="/images/menu.svg" alt="menu" />
                                            <span className='me-5'>Show Categories</span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
                                            <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
                                            <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='menu-links'>
                                    <div className="d-flex align-items-center gap-15">
                                        <Link to='/'>Home</Link>
                                        <Link to='/store'>Our Store</Link>
                                        <Link to='/blogs'>Blogs</Link>
                                        <Link to='/contact'>Contact</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header