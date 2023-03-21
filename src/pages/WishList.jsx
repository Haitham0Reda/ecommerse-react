import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import MetaTitle from "../components/MetaTitle";
import { BsXLg } from 'react-icons/bs'


const wishlist = () => {
    return (
        <>
            <MetaTitle title="WishList" />
            <BreadCrumb title="WishList" />
            <div className="wishlist-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row d-flex flex-wrap">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <BsXLg className='position-absolute cross' />
                                <div className="wishlist-card-image">
                                    <img src="/images/watch.jpg" alt="watch" />
                                </div>
                                <div className="wishlist-card-details ">
                                    <h5 className="title">Milanese Loop Watch Band for 42mm/44mm Apple Watch</h5>
                                    <h6 className="price pb-2">$10.00 </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <BsXLg className='position-absolute cross' />
                                <div className="wishlist-card-image">
                                    <img src="/images/watch.jpg" alt="watch" />
                                </div>
                                <div className="wishlist-card-details ">
                                    <h5 className="title">Milanese Loop Watch Band for 42mm/44mm Apple Watch</h5>
                                    <h6 className="price pb-2">$10.00 </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <BsXLg className='position-absolute cross' />
                                <div className="wishlist-card-image">
                                    <img src="/images/watch.jpg" alt="watch" />
                                </div>
                                <div className="wishlist-card-details ">
                                    <h5 className="title">Milanese Loop Watch Band for 42mm/44mm Apple Watch</h5>
                                    <h6 className="price pb-2">$10.00 </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <BsXLg className='position-absolute cross' />
                                <div className="wishlist-card-image">
                                    <img src="/images/watch.jpg" alt="watch" />
                                </div>
                                <div className="wishlist-card-details ">
                                    <h5 className="title">Milanese Loop Watch Band for 42mm/44mm Apple Watch</h5>
                                    <h6 className="price pb-2">$10.00 </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default wishlist