import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram, BsFacebook } from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-30 align-items-center">
                                <img src="/images/newsletter.png" alt="newsletter" />
                                <h4 className='text-white mb-0'>Sign Up for Newsletter</h4>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-1"
                                    placeholder="Your Email Address..."
                                    aria-label="Your Email Address..."
                                    aria-describedby="basic-addon2" />
                                <span
                                    className="input-group-text p-2 bg-dark text-white px-4 rounded-start "
                                    id="basic-addon2">
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className='py-4'>
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-4">
                            <h5 className='text-white mb-4'>Contact Us</h5>
                            <div>
                                <address className='text-white'>
                                    Egypt: 179h Hadeek El-Ahram,<br />Sixth Of October,Giza<br />
                                    ZipCode: 12559
                                </address>
                                <Link
                                    to="tel:+2 01278374798"
                                    className='mt-2 d-block mb-3 text-white'>
                                    Tel: +2 01278374798
                                </Link>
                                <Link
                                    to="mailto:haithammoreda@gmail.com"
                                    className='mt-2 d-block mb-3 text-white'>
                                    Email: haithammoreda@gmail.com
                                </Link>
                                <div className="social-icons d-flex align-items-center gap-30 fs-4">
                                    <Link to="">
                                        <BsLinkedin className='text-white' />
                                    </Link>
                                    <Link to="">
                                        <BsFacebook className='text-white' />
                                    </Link>
                                    <Link to="">
                                        <BsInstagram className='text-white' />
                                    </Link>
                                    <Link to="">
                                        <BsGithub className='text-white' />
                                    </Link>
                                    <Link to="">
                                        <BsYoutube className='text-white' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h5 className='text-white mb-4'>Information</h5>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                                <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                                <Link className='text-white py-2 mb-1'>Terms Of Service</Link>
                                <Link className='text-white py-2 mb-1'>Blogs</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h5 className='text-white mb-4'>Account</h5>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Search</Link>
                                <Link className='text-white py-2 mb-1'>About Us</Link>
                                <Link className='text-white py-2 mb-1'>Faq</Link>
                                <Link className='text-white py-2 mb-1'>Contact</Link>
                                <Link className='text-white py-2 mb-1'>Size Chart</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h5 className='text-white mb-4'>Quick Links</h5>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Laptops</Link>
                                <Link className='text-white py-2 mb-1'>Headphones</Link>
                                <Link className='text-white py-2 mb-1'>Tablets</Link>
                                <Link className='text-white py-2 mb-1'>Smart Watches</Link>
                                <Link className='text-white py-2 mb-1'>Accessories</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className='py-4'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white">
                                &copy; {new Date().getFullYear()}; Powered by <span className='owner'>HAITHAM MOHAMED REDA</span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer