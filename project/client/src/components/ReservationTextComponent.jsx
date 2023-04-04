import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import './css/ReservationTextComponent.css';

function handleClick(event)
{
  const id = event.target.getAttribute('id');
  if(event.target.getAttribute('action') === "front")
  {
    var next = Math.floor(id) + 1;
  }
  else if(event.target.getAttribute('action') === "back")
  {
    var next = Math.floor(id) - 1;
  }
  document.getElementById('reservation' + '-' + id).classList.add('display-none');
  document.getElementById('reservation' + '-' + next).classList.remove('display-none');
}

function ReservationTextComponent(props) {
  return (
    <div className="reservation-first" id={'reservation-'+ props.id}>
      <section className="reservation-text-wrap">
        <div className="reservation-image-wrap">
          <div className="reservation-image">
            <img src="/images/book-now.jpg" />
          </div>
          <div className="reservation-text">
            <p>Reservation</p>
          </div>
        </div>
      </section>
      <section className="reserve-table-text-wrap">
        <Container>
          <div className="reserve-table-text-label">Reserve Table</div>
          <div className="reserve-table-text">
            <em>
            Looking to make your dining experience at our restaurant even more special? Then why not reserve a table today?
            </em>
          </div>
        </Container>
      </section>
      <section className="reservation-info-wrap">
        <div className="reservation-info-label-wrap">
          <div className="reservation-info-label">Restaurant 4Corners</div>
          <div className="reservation-info-label-text">
            <em>Our table reservation service allows you to secure your spot at our restaurant at a time that suits you. Whether you're planning a romantic evening out, a family celebration, or a business lunch, we'll work with you to create a personalized dining experience that exceeds your expectations.</em>
          </div>
        </div>
        <Container>
          <div className="reservation-info-images-wrap">
            <div className="reservation-restaurant-image-wrap">
              <div className="reservation-logo-wrap">
                <Link to={"/"}>
                  <img src="logo192.png" />
                </Link>
              </div>
              <img
                className="restaurant-image"
                src="/images/restaurant-image.jpg"
              ></img>
            </div>
          </div>
          <div className="reservation-info-reserve-wrap">
            <div className="reservation-reserve-label">Book a Reservation</div>
            <div className="reservation-reserve-text">
              <h1>Book now</h1>
              <em>Our menu is a celebration of the rich culinary traditions of our region, 
                with dishes that are crafted from the freshest ingredients and prepared with care and attention to detail. From classic comfort foods to innovative creations, we have something for everyone.</em>
              <div className="reservation-reserve-info">
                <Row>
                  <Col>
                    <div className="years-of-experience-wrap">
                      <h3>15</h3>
                      <h6>Years of Experience</h6>
                    </div>
                  </Col>
                  <Col>
                  <div className="successful-reviews-wrap">
                      <h3>1k</h3>
                      <h6>Successful Reviews</h6>
                    </div>
                  </Col>
                  <Col>
                    <div className="happy-customers-wrap">
                      <h3>20k</h3>
                      <h6>Happy Customers</h6>
                    </div>
                  </Col>
                  <Col>
                    <div className="rating-wrap">
                      <h3>4.9</h3>
                      <h6>Overall Rating</h6>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="reservation-reserve-button-wrap">
                <button id={1} action={'front'} onClick={handleClick}>
                  Reserve Now
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default ReservationTextComponent;
