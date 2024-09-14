function ProfileDropDown() {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link pe-0 ps-2"
        id="navbarDropdownUser"
        role="button"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <div className="avatar avatar-xl">
          <img
            className="rounded-circle"
            src="/assets/img/team/3-thumb.png"
            alt=""
          />
        </div>
      </a>
      <div
        className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end py-0"
        aria-labelledby="navbarDropdownUser"
      >
        <div className="bg-white dark__bg-1000 rounded-2 py-2">
          <a className="dropdown-item fw-bold text-warning" href="#!">
            <span className="fas fa-crown me-1"></span>
            <span>Go Pro</span>
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#!">
            Set status
          </a>
          <a className="dropdown-item" href="pages/user/profile.html">
            Profile &amp; account
          </a>
          <a className="dropdown-item" href="#!">
            Feedback
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="pages/user/settings.html">
            Settings
          </a>
          <a
            className="dropdown-item"
            href="pages/authentication/card/logout.html"
          >
            Logout
          </a>
        </div>
      </div>
    </li>
  );
}

export default ProfileDropDown;
