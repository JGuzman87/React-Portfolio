export default function Contact() {
    return (
      
        <div className="bg-dark text-white min-vh-100 p-4">
      <h1>Contact Me</h1>
        <body class="bg-dark p-3 m-0 border-0">
          <div className="form-floating mb-3">
            <input
              type="text" 
              className="form-control"
              id="floatingInput"
              placeholder="name"
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInputEmail"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInputEmail">Email address</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea1"
              style={{ height: "100px" }} // Corrected style format
            ></textarea>
            <label htmlFor="floatingTextarea1">Comments</label>
          </div>
        </body>
      </div>
    );
}