export default function Contact() {
    return (
      <div>
  <div className="form-floating mb-3">
    <input
      type="text"  // "name" is not a valid input type; "text" is more appropriate
      className="form-control"
      id="floatingInput"
      placeholder="name"
    />
    <label htmlFor="floatingInput">Name</label>
  </div>
  <div className="form-floating">
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
      style={{ height: '100px' }}  // Corrected style format
    ></textarea>
    <label htmlFor="floatingTextarea1">Comments</label>
  </div>
  
</div>
    );
}