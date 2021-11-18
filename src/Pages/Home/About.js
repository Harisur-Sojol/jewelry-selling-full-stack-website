import React from 'react';
import '../../Styles/About.css'
import aboutImg from '../../images/about-image.png'

const About = () => {
    return (
        <div className="container my-5">
      <div className="row my-5">
        <div className="col-lg-6 col-md-8 col-sm-12 my-5">
          <div className="img-div">
            <img src={aboutImg} className="img-fluid"/>
          </div>
        </div>
        <div className="col-lg-6 col-md-8 col-sm-12 text-start my-5 ">
          <h4 className="text-uppercase about-header">about us</h4>
          <h1 className="text-uppercase about-massive-header">Innovative Jewellery
</h1>
          <p className="text-muted mt-5">
            Pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut
            aliquam massa nisl quis neque. Suspendisse in orci enim pharetra,
            erat sed fermentum feugiat.
          </p>
          <ul>
            <li className = 'text-muted mt-2'>Pharetra, erat sed fermentum feugiat.</li>
            <li className = 'text-muted mt-2'>Spendisse in orci enim pharetra, erat sed fermentum.</li>
            <li className = 'text-muted mt-2'>Pharetra, erat sed fermentum feugiat.</li>
          </ul>
          <button className = 'btn btn-warning text-uppercase '>learn more</button>
        </div>
      </div>
    </div>
    );
};

export default About;