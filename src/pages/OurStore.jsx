import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import MetaTitle from "../components/MetaTitle";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard"

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>
      <MetaTitle title="Our Store" />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <div className="filtter-card mb-3">
                <h3 className="filtter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-3 text-uppercase">
                    <li>watch</li>
                    <li>tv</li>
                    <li>camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filtter-card mb-3">
                <h3 className="filtter-title">Filter By</h3>
                <h5 className="sub-title">Availability</h5>
                <div className="ps-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="availability"
                      name="availability"
                      value=""
                    />
                    <label className="form-check-label" htmlFor="">
                      In stock (21)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="availability"
                      name="availability"
                      value=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Out of stock (1)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center justify-content-between gap-10">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="$"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="$"
                    />
                    <label htmlFor="floatingInput">To</label>
                  </div>
                </div>
                <h5 className="sub-title">Colors</h5>
                <div>
                  <div className="d-flex flex-wrap">
                    <ul className="colors ps-3 d-flex flex-wrap gap-15">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div className="ps-3">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="color-1"
                        name="form-check"
                        value=""
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        S (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="color-2"
                        name="form-check"
                        value=""
                      />
                      <label className="form-check-label" htmlFor="color-2">
                        M (5)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="color-3"
                        name="form-check"
                        value=""
                      />
                      <label className="form-check-label" htmlFor="color-3">
                        L (10)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="color-4"
                        name="form-check"
                        value=""
                      />
                      <label className="form-check-label" htmlFor="color-4">
                        XL (8)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="color-5"
                        name="form-check"
                        value=""
                      />
                      <label className="form-check-label" htmlFor="color-5">
                        XXL (4)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filtter-card mb-3">
                <h3 className="filtter-title">Product Tag</h3>
                <div className="product-tags d-flex flex-wrap align-item-center gap-10 ps-3">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3 text-uppercase">
                    laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3 text-uppercase">
                    mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3 text-uppercase">
                    speaker
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3 text-uppercase">
                    vivo
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3 text-uppercase">
                    wire
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3 text-uppercase">
                    tablet
                  </span>
                </div>
              </div>
              <div className="filtter-card mb-3">
                <h3 className="filtter-title">Random Products</h3>
                <div>
                  <div className="random-product d-flex border-bottom">
                    <div className="random-product-img">
                      <img
                        src="\images\Headphone-01.avif"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="random-product-content">
                      <h6>
                        Kids headphones bulk 10 pack multi colored for students
                      </h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        isHalf={true}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="price">$100.00</p>
                    </div>
                  </div>
                  <div className="random-product d-flex mt-4">
                    <div className="random-product-img">
                      <img
                        src="\images\watch-03.avif"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="random-product-content">
                      <h6>
                        Kids headphones bulk 10 pack multi colored for students
                      </h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        isHalf={true}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="price">$100.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-20">
                    <p className="mb-0" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select
                      name=""
                      className="form-control form-select"
                      id=""
                      defaultValue="best-selling"
                    >
                      <option value="manual">Featured</option>
                      <option value="best-selling">Best selling</option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                      <option value="created-ascending">
                        Date, old to new
                      </option>
                      <option value="created-descending">
                        Date, new to old
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="total-products mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="images/gr4.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="images/gr3.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="images/gr2.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="images/gr.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list d-flex flex-wrap gap-10">
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
