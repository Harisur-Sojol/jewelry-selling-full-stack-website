import React from 'react';
import './Blog.css'
import img1 from '../../../images/blog/img1.png'
import img2 from '../../../images/blog/img2.png'
import img3 from '../../../images/blog/img3.png'

const Blog = () => {
    return (
        <div className="container my-5">
            <h2>From Our Blog</h2>
            <p className="mb-4">There are latest blog posts</p>
            <div className="row g-5">
                <div className="col-md-4">
                    <img src={img1} className="blog-img" alt="" />
                    <div className="me-5">
                        <p className="text-secondary mt-2 me-3">By <span style={{color:"#c29958"}}>Admin</span> / April 25,2021</p>
                        <h5 className="me-5" style={{color:"#222"}}>Quisque Egestas</h5>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src={img2} className="blog-img" alt="" />
                    <div className="me-5">
                        <p className="text-secondary mt-2 me-1">By <span style={{color:"#c29958"}}>Admin</span> / April 25,2021</p>
                        <h5 className="me-4" style={{color:"#222"}}>Post With Gallery</h5>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src={img3} className="blog-img" alt="" />
                    <div className="me-5">
                        <p className="text-secondary mt-2 me-3">By <span style={{color:"#c29958"}}>Admin</span> / April 25,2021</p>
                        <h5 className="me-4" style={{color:"#222"}}>Maecenas Ultricies</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;