import React from 'react';
import './Feature.css'
import banner from '../../../images/feature/banner.png'
import img1 from '../../../images/feature/img1.png'
import img2 from '../../../images/feature/img2.png'
import img3 from '../../../images/feature/img3.png'
import img4 from '../../../images/feature/img4.png'
import img5 from '../../../images/feature/img5.png'
import img6 from '../../../images/feature/img6.png'
import img7 from '../../../images/feature/img7.png'
import img8 from '../../../images/feature/img8.png'

const Feature = () => {
    return (
        <div className="container">
            <div className="row g-5">
                <div className="col-md-6 feature-area d-flex align-items-center">
                    <div>
                        <p className="text-secondary fs-5">BEAUTIFUL</p>
                        <h1 className="text-center">Wedding Ring</h1>
                        <p className="text-secondary fs-5">Shop Now</p>
                        <hr className=" mx-auto" style={{ backgroundColor: "#7c4dff", height: "2px", width: "74px"}} />
                    </div>
                </div>
                <div className="col-md-3">
                    <h4>Featured Products</h4>
                    <div className="d-flex align-items-center shadow my-4">
                        <img src={img1} className=" feature-img" alt="" />
                        <div className="ms-3">
                            <p>Carat Solitaire Diamond</p>
                            <p className="text-secondary">$78.00</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center shadow my-4">
                        <img src={img2} className="feature-img" alt="" />
                        <div className="ms-3">
                            <p>Carat Solitaire Diamond</p>
                            <p className="text-secondary">$78.00</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center shadow my-4">
                        <img src={img3} className="feature-img" alt="" />
                        <div className="ms-3">
                            <p>Carat Solitaire Diamond</p>
                            <p className="text-secondary">$78.00</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center shadow my-4">
                        <img src={img4} className="feature-img" alt="" />
                        <div className="ms-3">
                            <p>Carat Solitaire Diamond</p>
                            <p className="text-secondary">$78.00</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <h4>Best Sellers</h4>
                    <div className="d-flex align-items-center shadow my-4">
                        <img src={img5} className="feature-img" alt="" />
                        <div className="ms-3">
                            <p>Carat Solitaire Diamond</p>
                            <p className="text-secondary">$78.00</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center shadow my-4">
                        <img src={img6} className="feature-img" alt="" />
                        <div className="ms-3">
                            <p>Carat Solitaire Diamond</p>
                            <p className="text-secondary">$78.00</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center shadow my-4">
                        <img src={img7} className="feature-img" alt="" />
                        <div className="ms-3">
                            <p>Carat Solitaire Diamond</p>
                            <p className="text-secondary">$78.00</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center shadow my-4">
                        <img src={img8} className="feature-img" alt="" />
                        <div className="ms-3">
                            <p>Carat Solitaire Diamond</p>
                            <p className="text-secondary">$78.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;