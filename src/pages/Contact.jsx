import {useState, useEffect} from 'react';
import { useForm, ValidationError } from "@formspree/react";


function Contact() {

  const [state, handleSubmit] = useForm("xbldvbyy");
  const [formData, setFormData] = useState({name: '', email: '', comment: '',});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.vale});
  }

 useEffect(() => {
  if (state.succeeded) {
    setFormData({ name: "", email: "", comment: "" });
  }
 }, [state.succeeded]);



  return (
    <div className="text-white min-vh-100 p-4 font-monospace">
      <h1>Contact Me</h1>
      <div className="form-container ">
        {state.succeeded && (
          <p>Thank You for reaching out!</p>
        )} 
          <form className=" form-floating mb-3" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <p>Name</p>
              <input
                name="name"
                type="text"
                value={formData.name}
                className="form-control"
                id="floatingInput"
                placeholder="name"
                onChange={handleChange}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="form-floating mb-3">
              <p>Email Address</p>
              <input
                name="email"
                type="email"
                value={formData.email}
                className="form-control"
                id="floatingInputEmail"
                placeholder="name@example.com"
                onChange={handleChange}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="form-floating mb-3">
              <p>Comments</p>
              <textarea
                name="comment"
                className="form-control mb-3"
                placeholder="Leave a comment here"
                value={formData.comment}
                id="floatingTextarea1"
                style={{ height: "100px" }}
                onChange={handleChange}
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        
      </div>
    </div>
  );
}

export default Contact;
