
function Footer() {
    return (
      <div
        className="project-footer text-body-secondary bg-primary-subtle font-monospace"
        data-bs-theme="dark"
      >
          <a
            href="https://www.linkedin.com/in/jorge-guzman-841714136/"
            className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            <img
              src="/images/LI-In-Bug.png"
              alt="Linkedin Profile"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
          <a
            href="https://github.com/JGuzman87"
            className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            <img
              src="/images/github-mark.png"
              alt="Github Profile"
              style={{ width: "45px", height: "40px" }}
            />
          </a>
      </div>
    );
}



export default Footer;