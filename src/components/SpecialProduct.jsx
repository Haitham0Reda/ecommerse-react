import React from 'react'
import ReactStars from 'react-rating-stars-component'
import CountCircleTimer from '../Helper/CountCircleTimer'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from 'react-router-dom';


const SpecialProduct = () => {
    return (
        <div className='col-4 mb-3'>
            <div className="special-product-card">
                <div className="d-flex justify-content-between">
                    <div className="special-product-card-image">
                        <img src="/images/watch.jpg" className='img-fluid' alt="" />
                    </div>
                    <div className="special-product-content">
                        <h5 className='brand'>Haveils</h5>
                        <h6 className='title'>Samsung Galaxy Note10+ Mobile Phone, Sim...</h6>
                        <ReactStars
                            count={5}
                            size={20}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className="price">
                            <span className='red-p text-danger'>$100</span>
                            &nbsp;
                            <strike>$299</strike>
                        </p>
                        <div className="discount-till d-flex align-items-center gap-10">
                            <span><b>2 days</b></span>
                            <span>
                                <CountCircleTimer />
                            </span>
                        </div>
                        <div className="product-count my-3">
                            <p>Products: 5</p>
                            <ProgressBar variant="success" now={45} style={{height: "10px"}} className="me-3" />
                        </div>
                        <Link className='button my-3'>Add To Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialProduct