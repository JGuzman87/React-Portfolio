function Navbar() {
  // const links = ["About Me", "Profile", "Contact", "Resume"];

  // links.map((links) => <a>{links}</a>);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Jorge Guzman
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" aria-current="page" href="#">
              About Me
            </a>
            <a className="nav-link" href="#">
              Profile
            </a>
            <a className="nav-link" href="#">
              Contact
            </a>
            <a className="nav-link" href="#">
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
