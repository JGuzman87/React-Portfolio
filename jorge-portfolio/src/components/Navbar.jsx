import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const currentPage = useLocation().pathname;

  return (
    <nav
      className="navbar navbar-expand-lg bg-primary-subtle font-monospace
"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <h2 class="text-secondary-emphasis">Jorge Guzman</h2>
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
            <Link
              to="/About"
              className={` "nav-link" ${
                currentPage === "/About" ? "nav-link active" : "nav-link"
              }`}
            >
              About Me
            </Link>

            <Link
              to="/Portfolio"
              className={` "nav-link" ${
                currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/Contact"
              className="nav-link"
              {...(currentPage === "/Contact" ? "nav-link active" : "navlink")}
            >
              Contact
            </Link>

            <Link
              to="/Resume"
              className="nav-link"
              {...(currentPage === "/Resume" ? "nav-link-active" : "navlink")}
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
