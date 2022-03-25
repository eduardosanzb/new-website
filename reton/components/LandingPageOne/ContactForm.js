import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import baseUrl from "../../utils/baseUrl";
const MySwal = withReactContent(Swal);

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const { register, handleSubmit, errors } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    console.log(contact);
  };

  const onSubmit = async (e) => {
    // e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      await axios.post(url, payload);
      console.log(url);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="contact" className="contact-area border-bottom pt-100 pb-70">
      <div className="common-right-text">
        <span>CONTACT</span>
      </div>

      <div className="container">
        <div className="section-title">
          <span className="sub-title">CONTACT</span>
          <h2>
            Do You want to <span>chat </span>
            Please Drop A Message
          </h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, seddiam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p> */}
        </div>

        <div className="row align-items-center">
          {/* <div className="col-md-6 col-lg-6">
            <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  value={contact.name}
                  onChange={handleChange}
                  ref={register({ required: true })}
                />
                <div className="invalid-feedback" style={{ display: "block" }}>
                  {errors.name && "Name is required."}
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={contact.email}
                  onChange={handleChange}
                  ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                />
                <div className="invalid-feedback" style={{ display: "block" }}>
                  {errors.email && "Email is required."}
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  value={contact.subject}
                  onChange={handleChange}
                  ref={register({ required: true })}
                />
                <div className="invalid-feedback" style={{ display: "block" }}>
                  {errors.subject && "Subject is required."}
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="number"
                  className="form-control"
                  placeholder="Phone"
                  value={contact.number}
                  onChange={handleChange}
                  ref={register({ required: true })}
                />
                <div className="invalid-feedback" style={{ display: "block" }}>
                  {errors.number && "Number is required."}
                </div>
              </div>

              <div className="form-group">
                <textarea
                  name="text"
                  className="form-control"
                  cols="30"
                  rows="6"
                  placeholder="Write message"
                  value={contact.text}
                  onChange={handleChange}
                  ref={register({ required: true })}
                />
                <div className="invalid-feedback" style={{ display: "block" }}>
                  {errors.text && "Text body is required."}
                </div>
              </div>

              <button type="submit" className="btn common-btn">
                Send Message <span></span>
              </button>
            </form>
          </div> */}

          <div className="col-md-6 col-lg-6">
            <div className="contact-content">
              <div className="top">
                <ul>
                  <li>
                    <span>Email:</span>
                    <a href="mailto:eduardosanzb@gmail.com">
                      eduardosanzb@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bottom">
                <ul>
                  <li>
                    <Link href="https://twitter.com/eduardosanzb">
                      <a target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/in/eduardosanzb/">
                      <a target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="https://github.com/eduardosanzb">
                      <a target="_blank">
                        <i className="bx bxl-github"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
