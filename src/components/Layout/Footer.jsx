import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="footer-container container">
        <div className="content_1">
          <p>
            Welcome to My Movies_Hub, your ultimate destination for cutting-edge
            gadgets!
          </p>
        </div>

        <div className="content_3">
          <h4>Experience</h4>
          <NavLink to="./contact">Contact Us</NavLink>
          <NavLink to="/movie">Movies</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="content_4">
          <h4>NEWSLETTER</h4>
          <p>
            Be the first to know about new
            <br />
            arrivals, sales & promos!
          </p>
          <div className="f-mail">
            <input type="email" placeholder="Your Email" />
            <i className="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
      <div className="f-design">
        <div className="f-design-txt">
          <p>Design and Code by Muhammad Anas Khan</p>
        </div>
      </div>
    </footer>
  );
};
