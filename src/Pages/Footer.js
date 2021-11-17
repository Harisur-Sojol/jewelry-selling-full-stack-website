import React from "react";
import logo from '../images/logo/logo.png'

const Footer = () => {
  return (
    <div className="">
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#1c2331" }}
      >
        {/* <section
          className="d-flex justify-content-between p-4"
          style={{ backgroundColor: "#6351ce" }}
        >
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section> */}

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mt-5">
                <img src={logo} className="bg-white w-25"/>
                <p className="mt-4">We are a team of designers and developers that create high quality Magento, Prestashop, Opencart.</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-5 mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr
                  className="mb-3 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="#!" className="text-white">
                    Todays Market
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Prices
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Contributor?
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-5 mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                  className="mb-3 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="#!" className="text-white">
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Become an Affiliate
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Shipping Rates
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mt-5 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-3 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <i className="fas fa-home mr-3"></i> 4710-4890 Breckinridge USA
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> support@plazathemes.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 1-1001-234-5678
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2021 Copyright | design by HARISUR RAHMAN SOJOL
          
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;
