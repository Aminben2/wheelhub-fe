import { Link } from "react-router-dom";
import DotsDropDown from "../DotsDropDown";
import Notifications from "../Notifications";
import ProfileDropDown from "../ProfileDropDown";
import ThemeDropDown from "../ThemeDropDown";

function NabvarLgData() {
  return (
    <nav
      className="navbar navbar-light navbar-glass navbar-top navbar-expand-lg"
      data-double-top-nav="data-double-top-nav"
      style={{ display: "none" }}
    >
      <div className="w-100">
        <div className="d-flex flex-between-center">
          <button
            className="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarDoubleTop"
            aria-controls="navbarDoubleTop"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span className="navbar-toggle-icon">
              <span className="toggle-line"></span>
            </span>
          </button>
          <a className="navbar-brand me-1 me-sm-3" href="index.html">
            <div className="d-flex align-items-center">
              <img
                className="me-2"
                src="/assets/img/icons/spot-illustrations/falcon.png"
                alt=""
                width="30"
              />
              <span className="font-sans-serif text-primary">wheelhub</span>
            </div>
          </a>
          <ul className="navbar-nav align-items-center d-none d-lg-block">
            <li className="nav-item">
              <div className="search-box" data-list='{"valueNames":["title"]}'>
                <form
                  className="position-relative"
                  data-bs-toggle="search"
                  data-bs-display="static"
                >
                  <input
                    className="form-control search-input fuzzy-search"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                  <span className="fas fa-search search-box-icon"></span>
                </form>
                <div
                  className="btn-close-falcon-container position-absolute end-0 top-50 translate-middle shadow-none"
                  data-bs-dismiss="search"
                >
                  <button
                    className="btn btn-link btn-close-falcon p-0"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
            <ThemeDropDown />
            <Notifications />
            <DotsDropDown />
            <ProfileDropDown />
          </ul>
        </div>
        <hr className="my-2 d-none d-lg-block" />
        <div
          className="collapse navbar-collapse scrollbar py-lg-2"
          id="navbarDoubleTop"
        >
          <ul
            className="navbar-nav"
            data-top-nav-dropdowns="data-top-nav-dropdowns"
          >
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                id="dashboards"
              >
                Dashboard
              </a>
              <div
                className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0"
                aria-labelledby="dashboards"
              >
                <div className="bg-white dark__bg-1000 rounded-3 py-2">
                  <Link className="dropdown-item link-600 fw-medium" to="">
                    Default
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                id="pagess"
              >
                Management
              </a>
              <div
                className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0"
                aria-labelledby="pagess"
              >
                <div className="card navbar-card-pages shadow-none dark__bg-1000">
                  <div className="card-body scrollbar max-h-dropdown">
                    <img
                      className="img-dropdown"
                      src="/assets/img/icons/spot-illustrations/authentication-corner.png"
                      width="130"
                      alt=""
                    />
                    <div className="row">
                      <div className="col-6 col-xxl-3">
                        <div className="nav flex-column">
                          <p className="nav-link text-700 mb-0 fw-bold">
                            Users
                          </p>
                          <Link
                            className="nav-link py-1 link-600 fw-medium"
                            to="users"
                          >
                            All users
                          </Link>
                          <Link
                            className="nav-link py-1 link-600 fw-medium"
                            to="users/create"
                          >
                            Ceate user
                          </Link>
                        </div>
                      </div>
                      <div className="col-6 col-xxl-3">
                        <div className="nav flex-column">
                          <p className="nav-link text-700 mb-0 fw-bold">
                            Vehicles
                          </p>
                          <Link
                            className="nav-link py-1 link-600 fw-medium"
                            to="vehicles"
                          >
                            All vehicles
                          </Link>
                          <Link
                            className="nav-link py-1 link-600 fw-medium"
                            to="vehicles/create"
                          >
                            Create vehicle
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 col-xxl-3">
                        <div className="nav flex-column">
                          <p className="nav-link text-700 mb-0 fw-bold">
                            Appointements
                          </p>
                          <a
                            className="nav-link py-1 link-600 fw-medium"
                            href="pages/miscellaneous/associations.html"
                          >
                            All appointemnets
                          </a>
                          <a
                            className="nav-link py-1 link-600 fw-medium"
                            href="pages/miscellaneous/associations.html"
                          >
                            Create appointemnet
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NabvarLgData;
