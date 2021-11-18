import React from 'react';
import './EntryPage.css'
import img1 from '../../../images/entry-page/img1.png'
import img2 from '../../../images/entry-page/img2.png'
import img3 from '../../../images/entry-page/img3.png'
import img4 from '../../../images/entry-page/img4.png'

const EntryPage = () => {
    return (
        <div className="container mt-5">
            <div className="row ">
                <div className="col-md-6  ">
                    <div className=" d-flex justify-content-end align-items-center entry-page1 border">
                        <div className="pe-3">
                            <p className="text-secondary">BEAUTIFUL</p>
                            <h2 className="">Wedding Rings</h2>
                            <p>Shop Now</p>
                            <hr
                                className="mb-3 mt-0 mx-auto"
                                style={{
                                    width: "70px",
                                    backgroundColor: "#7c4dff",
                                    height: "2px",
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className="d-flex justify-content-end align-items-center entry-page2 border">
                        <div className="pe-3">
                            <p className="text-secondary">EARRING</p>
                            <h2 className="">Tangerine Floral Earring</h2>
                            <p>Shop Now</p>
                            <hr
                                className="mb-3 mt-0 mx-auto"
                                style={{
                                    width: "70px",
                                    backgroundColor: "#7c4dff",
                                    height: "2px",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row  mt-4">
                <div className="col-md-6">
                    <div className=" d-flex justify-content-end align-items-center entry-page3 border">
                        <div className="pe-3">
                            <p className="text-secondary">NEW ARRIVALS</p>
                            <h2 className="">Pearl Necklaces</h2>
                            <p>Shop Now</p>
                            <hr
                                className="mb-3 mt-0 mx-auto"
                                style={{
                                    width: "70px",
                                    backgroundColor: "#7c4dff",
                                    height: "2px",
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="d-flex justify-content-end align-items-center entry-page4 border">
                        <div className="pe-3">
                            <p className="text-secondary">NEW DESIGN</p>
                            <h2 className="">Diamond Jewelry</h2>
                            <p>Shop Now</p>
                            <hr
                                className="mb-3 mt-0 mx-auto"
                                style={{
                                    width: "70px",
                                    backgroundColor: "#7c4dff",
                                    height: "2px",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EntryPage;