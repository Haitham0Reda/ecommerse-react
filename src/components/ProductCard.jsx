import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {



    const { grid } = props;
    let location = useLocation();
    return (
        <>
            <div
                className={`${location.pathname === '/store' ? `gr-${grid}` : 'col-3'}`}
            >
                <Link className="product-card">
                    <div className="product-image">
                        <div className="wishlist-icon">
                            <Link>
                                <img src="/images/wish.svg" alt="wishlist" />
                            </Link>
                        </div>
                        <img
                            src="images/watch.jpg"
                            alt="product_image"
                            className="img-fluid w-100 h-100"
                        />
                        <img
                            src="images\watch-01.avif"
                            alt="product_image"
                            className="img-fluid w-100 h-100"
                        />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havel's</h6>
                        <h5 className="product-title">
                            kids headphones bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            isHalf={true}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt..."
                        </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar">
                        <div className="d-flex flex-column gap-15">
                            <Link>
                                <img src="\images\prodcompare.svg" alt="addcart" />
                            </Link>
                            <Link>
                                <img src="\images\view.svg" alt="view" />
                            </Link>
                            <Link>
                                <img src="\images\add-cart.svg" alt="addcart" />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
            <div
                className={`${location.pathname === '/store' ? `gr-${grid}` : 'col-3'}`}
            >
                <Link className="product-card">
                    <div className="product-image">
                        <div className="wishlist-icon">
                            <Link>
                                <img src="/images/wish.svg" alt="wishlist" />
                            </Link>
                        </div>
                        <img
                            src="images/watch.jpg"
                            alt="product_image"
                            className="img-fluid w-100 h-100"
                        />
                        <img
                            src="images\watch-01.avif"
                            alt="product_image"
                            className="img-fluid w-100 h-100"
                        />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            kids headphones bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            isHalf={true}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt..."
                        </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar">
                        <div className="d-flex flex-column gap-15">
                            <Link>
                                <img src="\images\prodcompare.svg" alt="addcart" />
                            </Link>
                            <Link>
                                <img src="\images\view.svg" alt="view" />
                            </Link>
                            <Link>
                                <img src="\images\add-cart.svg" alt="addcart" />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default ProductCard;
