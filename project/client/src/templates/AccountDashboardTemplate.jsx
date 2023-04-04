import { Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import authService from "src/services/auth.service";
import reserveService from "src/services/reserve.service";

import "./css/AccountDashboardTemplate.css";

function AccountDashboardTemplate() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [reservations, setReservations] = useState();

  useEffect(() => {
    reserveService
      .getReservation(authService.getCurrentUser().id)
      .then(function (response) {
        // get all reservations for current user
        setReservations(response);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="loader">Loading...</div>; // loading component place
  }

  return (
    <main className="dashboard-main">
      <div className="account-info-wrap">
        <div className="account-greeting-wrap">
          <div className="account-greeting">
            Hello, {authService.getCurrentUser().email}
          </div>
        </div>
        <div className="account-logout-wrap">
          <div className="acount-logout">
            <Button
              onClick={() => {
                authService.logout();
                window.location.reload();
              }}
              variant="outlined"
              color="error"
            >
              Log Out
            </Button>
          </div>
        </div>
      </div>
      <div className="selected-reservation-info-wrap">
        <h3>Reservation Info</h3>
        <div className="selected-reservation-info">
          <div className="reservations">
            {reservations.reservation.map((reservation) => {
              return (
                <>
                  <h5 className="thank-text">Thanks For Your Reservation:</h5>
                  <div
                    key={reservation.id}
                    className={"reservation-" + reservation.id + "-wrap"}
                  >
                    <Row>
                      <Col>
                        <i className="bi bi-egg-fill"></i>
                        <h5 className="above-info">
                          Restaurant: {reservation.restaurant}
                        </h5>
                      </Col>
                      <Col>
                        <i className="bi bi-person-fill"></i>
                        <h5 className="above-info">
                          Guests: {reservation.guests_number}
                        </h5>
                      </Col>
                      <Col>
                        <i className="bi bi-calendar2-date-fill"></i>
                        <h5 className="above-info">
                          Date: {reservation.date.date}
                        </h5>
                      </Col>
                      <Col>
                        <i className="bi bi-clock-fill"></i>
                        <h5 className="above-info">
                          Time: {reservation.date.time}
                        </h5>
                      </Col>
                    </Row>
                    <div className="personal-info-reservation-wrap">
                      <Row
                        xxl={"1"}
                        xl={"1"}
                        lg={"1"}
                        md={"1"}
                        sm={"1"}
                        xs={"1"}
                      >
                        <Col>
                          <h4>Name :</h4>
                          <h5>{reservation.guest_name}</h5>
                        </Col>
                        <Col>
                          <h4>Surname :</h4>
                          <h5>{reservation.guest_surname}</h5>
                        </Col>
                        <Col>
                          <h4>Email :</h4>
                          <h5>{reservation.guest_email}</h5>
                        </Col>
                        <Col>
                          <h4>Phone :</h4>
                          <h5>{reservation.guest_phone}</h5>
                        </Col>
                        <Col>
                          <h4>Occasion :</h4>
                          <h5>{reservation.occasion}</h5>
                        </Col>
                        <Col>
                          <h4>Credit number :</h4>
                          <h5>{reservation.credit_number}</h5>
                        </Col>
                        <Col className="delete-reservation-button-wrap">
                          <Button
                            variant="contained"
                            color="error"
                            size="large"
                            onClick={() => {
                              console.log(reserveService.unreserve(reservation.id));
                              window.location.reload();
                            }}
                          >
                            Delete reservation
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default AccountDashboardTemplate;
