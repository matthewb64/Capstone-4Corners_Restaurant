import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CalendarComponent from "./CalendarComponent";

import './css/ReservationFormComponent.css';



function ReservationFormComponent(props) {
  return (
    <div
      className="reservation-form display-none"
      id={"reservation-" + props.id}
    >
      <div className="reservation-from-text-wrap">
        <h1>Reservation</h1>
      </div>
      <section className="form-section">
        <CalendarComponent />
      </section>
    </div>
  );
}

export default ReservationFormComponent;
