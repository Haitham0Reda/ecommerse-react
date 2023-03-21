import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';

const Home = () => {
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative p-1">
                                <img
                                    className='img-fluid rounded-3'
                                    src="/images/main-banner-1.jpg"
                                    alt="main-banner" />
                                <div className="main-banner-content position-absolute">
                                    <h4>SUPERCHARGED FOR PROS.</h4>
                                    <h5>ipad S13+ Pro.</h5>
                                    <p>From $999.00 or $41.62/mo.</p>
                                    <Link className='button'>BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="d-flex flex-warp justify-content-between align-items-center flex-column">
                                <div className="small-banner position-relative p-1 mb-3">
                                    <img
                                        className='img-fluid rounded-3'
                                        src="/images/catbanner-01.jpg"
                                        alt="main-banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>Best sale</h4>
                                        <h5>Laptops Max</h5>
                                        <p>From $1699.00 or <br /> $64.62/mo.</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative p-1">
                                    <img
                                        className='img-fluid rounded-3'
                                        src="/images/catbanner-02.jpg"
                                        alt="main-banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>15% off</h4>
                                        <h5>Smartwatch 7</h5>
                                        <p>Shop the latest brand<br />styles and colors.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="d-flex flex-warp justify-content-between align-items-center flex-column">
                                <div className="small-banner position-relative p-1 mb-3">
                                    <img
                                        className='img-fluid rounded-3'
                                        src="/images/catbanner-03.jpg"
                                        alt="main-banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>New Arrival</h4>
                                        <h5>Buy IPad Air</h5>
                                        <p>From $599.00 or <br /> $49.91/mo. for 12 mo.</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative p-1">
                                    <img
                                        className='img-fluid rounded-3'
                                        src="/images/catbanner-04.jpg"
                                        alt="main-banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>free Engraving</h4>
                                        <h5>AirPods Max</h5>
                                        <p>High-fidelity playback &<br /> ultra-low distortion</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="services d-flex align-items-center justify-content-between">
                                <div className='d-flex align-items-center'>
                                    <img className='pe-3 pb-2' src="/images/service.png" alt="services" />
                                    <div className='d-flex align-items-start flex-column'>
                                        <h6>Free Shipping</h6>
                                        <p>From all orders over $100</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <img className='pe-3 pb-2' src="/images/service-02.png" alt="services" />
                                    <div className='d-flex align-items-start flex-column'>
                                        <h6>Daily Surprise Offers</h6>
                                        <p>Save up to 25% off</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <img className='pe-3 pb-2' src="/images/service-03.png" alt="services" />
                                    <div className='d-flex align-items-start flex-column'>
                                        <h6>Support 24/7</h6>
                                        <p>Shop with an expert</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <img className='pe-3 pb-2' src="/images/service-04.png" alt="services" />
                                    <div className='d-flex align-items-start flex-column'>
                                        <h6>Affordable Prices</h6>
                                        <p>Get Factory direct price</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <img className='pe-3 pb-2' src="/images/service-05.png" alt="services" />
                                    <div className='d-flex align-items-start flex-column'>
                                        <h6>Secure Payments</h6>
                                        <p>100% protected payment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex flex-wrap align-items-center justify-content-between">
                                <div className='d-flex gap-30 align-items-center justify-content-center'>
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/camera.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap-30 align-items-center justify-content-center'>
                                    <div>
                                        <h6>Smart Tv</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/tv.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap-30 align-items-center justify-content-center'>
                                    <div>
                                        <h6>Smartwatches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/camera.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap-30 align-items-center justify-content-center'>
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/headphone.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap-30 align-items-center justify-content-center'>
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/camera.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap-30 align-items-center justify-content-center'>
                                    <div>
                                        <h6>Smart Tv</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/tv.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap-30 align-items-center justify-content-center'>
                                    <div>
                                        <h6>Smartwatches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/camera.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap-30 align-items-center justify-content-center'>
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/headphone.jpg" alt="camera" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="feature-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Featured Collection
                            </h3>
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>

            <section className="famous-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="famous-card ">
                                <img src="/images/famous-1.jpg" className='img-fluid' alt="famous" />
                                <div className="famous-content">
                                    <h5 className='text-white'>Big Screen</h5>
                                    <h6 className='text-white'>Smart Watch Series 7</h6>
                                    <p className='text-white'>From $399 or $16.62/mo. for 24 mo.*</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card ">
                                <img src="/images/famous-2.jpg" className='img-fluid' alt="famous" />
                                <div className="famous-content">
                                    <h5 className='text-dark'>Studio Display</h5>
                                    <h6 className='text-dark'>600 nits of brightness.</h6>
                                    <p className='text-dark'>27-inch 5K Retina display</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card ">
                                <img src="/images/famous-3.jpg" className='img-fluid' alt="famous" />
                                <div className="famous-content">
                                    <h5 className='text-dark'>smartphones</h5>
                                    <h6 className='text-dark'>Smartphone 13 Pro.</h6>
                                    <p className='text-dark'>Now in Green. From $999.00 or $41.62/mo.
                                        for 24 mo. Footnote*</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card ">
                                <img src="/images/famous-4.jpg" className='img-fluid' alt="famous" />
                                <div className="famous-content">
                                    <h5 className='text-dark'>home speakers</h5>
                                    <h6 className='text-dark'>Room-filling sound.</h6>
                                    <p className='text-dark'>From $699 or $116.58/mo. for 12 mo.*</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="special-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Special Products
                            </h3>
                        </div>
                        <div className="row flex-wrap">
                            <SpecialProduct />
                            <SpecialProduct />
                            <SpecialProduct />
                            <SpecialProduct />
                            <SpecialProduct />
                            <SpecialProduct />
                        </div>
                    </div>
                </div>
            </section>

            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Our Popular Products
                            </h3>
                        </div>
                        <div className="row">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </section>

            <section className="marquee-wrapper py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="marquee-inner-wrapper marquee-card-wrapper">
                                <Marquee className='d-flex'>
                                    <div className='mx-4 w-25'>
                                        <img src="\images\brand-01.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="\images\brand-02.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="\images\brand-03.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="\images\brand-04.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="\images\brand-05.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="\images\brand-06.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="\images\brand-07.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="\images\brand-08.png" alt="brand" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Our latest News
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <BlogCard />
                            </div>
                            <div className="col-3">
                                <BlogCard />
                            </div>
                            <div className="col-3">
                                <BlogCard />
                            </div>
                            <div className="col-3">
                                <BlogCard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home