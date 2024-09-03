import { useState } from 'react';

import { validateEmail } from '../../utils/helpers';


function Contact() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
   
    if (name === 'name'){
      setName(value);
    }else if(name === 'email') {
      setEmail(value);
    }else if (name === 'comment') {
      setComment(value)
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(!validateEmail(email)) {
      setErrorMessage('Not a valid email');
      return;
    }
    setName('');
    setEmail('');
    setComment('');
    setErrorMessage('');
  }

    return (
      <div className="bg-dark text-white min-vh-100 p-4 font-monospace">
        <h1>Contact Me</h1>
        <div className="bg-dark p-3 m-0 border-0">
          <form className="form-floating mb-3" onSubmit={handleFormSubmit}>
            <div className="form-floating mb-3">
              <input
                name="name"
                value={name}
                type="text"
                onChange={handleInputChange}
                className="form-control"
                id="floatingInput"
                placeholder="name"
              />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                name="email"
                value={email}
                type="email"
                className="form-control"
                onChange={handleInputChange}
                id="floatingInputEmail"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInputEmail">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                name="comment"
                value={comment}
                onChange={handleInputChange}
                className="form-control mb-3"
                placeholder="Leave a comment here"
                id="floatingTextarea1"
                style={{ height: "100px" }}
              ></textarea>
              <label htmlFor="floatingTextarea1">Comments</label>
            </div>
            {errorMessage && (
              <div className="text-danger mb-3">{errorMessage}</div>
            )}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
}

export default Contact;