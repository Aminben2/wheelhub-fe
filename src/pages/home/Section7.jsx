import React from "react";

function Section7() {
  return (
    <section className="bg-dark pt-8 pb-4" data-bs-theme="light">
      <div className="container">
        <div className="position-absolute btn-back-to-top bg-dark">
          <a className="text-600" href="#banner" data-bs-offset-top="0">
            <span
              className="fas fa-chevron-up"
              data-fa-transform="rotate-45"
            ></span>
          </a>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <h5 className="text-uppercase text-white opacity-85 mb-3">
              Our Mission
            </h5>
            <p className="text-600">
              Falcon enables front end developers to build custom streamlined
              user interfaces in a matter of hours, while it gives backend
              developers all the UI elements they need to develop their web
              app.And it's rich design can be easily integrated with backends
              whether your app is based on ruby on rails, laravel, express or
              any other server side system.
            </p>
            <div className="icon-group mt-4">
              <a className="icon-item bg-white text-facebook" href="#!">
                <span className="fab fa-facebook-f"></span>
              </a>
              <a className="icon-item bg-white text-twitter" href="#!">
                <span className="fab fa-twitter"></span>
              </a>
              <a className="icon-item bg-white text-google-plus" href="#!">
                <span className="fab fa-google-plus-g"></span>
              </a>
              <a className="icon-item bg-white text-linkedin" href="#!">
                <span className="fab fa-linkedin-in"></span>
              </a>
              <a className="icon-item bg-white" href="#!">
                <span className="fab fa-medium-m"></span>
              </a>
            </div>
          </div>
          <div className="col ps-lg-6 ps-xl-8">
            <div className="row mt-5 mt-lg-0">
              <div className="col-6 col-md-3">
                <h5 className="text-uppercase text-white opacity-85 mb-3">
                  Company
                </h5>
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <a className="link-600" href="#!">
                      About
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-600" href="#!">
                      Contact
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-600" href="#!">
                      Careers
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-600" href="#!">
                      Blog
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-600" href="#!">
                      Terms
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-600" href="#!">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a className="link-600" href="#!">
                      Imprint
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <h5 className="text-uppercase text-white opacity-85 mb-3">
                  Product
                </h5>
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <a className="link-600" href="#!">
                      Features
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-600" href="#!">
                      Roadmap
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-600" href="#!">
                      Changelog
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-600" href="#!">
                      Pricing
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-600" href="#!">
                      Docs
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-600" href="#!">
                      System Status
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-600" href="#!">
                      Agencies
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-600" href="#!">
                      Enterprise
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col mt-5 mt-md-0">
                <h5 className="text-uppercase text-white opacity-85 mb-3">
                  From the Blog
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <h5 className="fs-9 mb-0">
                      <a className="link-600" href="#!">
                        Interactive graphs and charts
                      </a>
                    </h5>
                    <p className="text-600 opacity-50">
                      Jan 15 &bull; 8min read
                    </p>
                  </li>
                  <li>
                    <h5 className="fs-9 mb-0">
                      <a className="link-600" href="#!">
                        Lifetime free updates
                      </a>
                    </h5>
                    <p className="text-600 opacity-50">
                      Jan 5 &bull; 3min read &starf;
                    </p>
                  </li>
                  <li>
                    <h5 className="fs-9 mb-0">
                      <a className="link-600" href="#!">
                        Merry Christmas From us
                      </a>
                    </h5>
                    <p className="text-600 opacity-50">
                      Dec 25 &bull; 2min read
                    </p>
                  </li>
                  <li>
                    <h5 className="fs-9 mb-0">
                      <a className="link-600" href="#!">
                        The New Falcon Theme
                      </a>
                    </h5>
                    <p className="text-600 opacity-50">
                      Dec 23 &bull; 10min read
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section7;
