import React from "react";
import { Link } from "react-router-dom";

import './css/BookNowComponent.css';

function BookNowComponent() {
  return (
    <Link to={"/reservation"} className="booknow-container-wrap">
      <div className="main-logo-wrap">
        <Link to={"/"}>
          <img src="logo192.png" />
        </Link>
      </div>
      <div className="booknow">
        <img alt="" src="images/book-now.jpg" />
        <p className="booknow-text">Book Now</p>
      </div>
    </Link>
  );
}

export default BookNowComponent;
