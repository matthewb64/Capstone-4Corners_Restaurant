import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import './css/CalendarComponent.css';
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { MenuItem, Select, TextField } from "@mui/material";
import moment from "moment/moment";
import datesService from "src/services/dates.service";
import { Formik } from "formik";
import authService from "src/services/auth.service";

var datesAll; // global variable for storing received dates

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
  else
  {
    return 0;
  }
  document.getElementById('reservation' + '-' + id).classList.add('display-none');
  document.getElementById('reservation' + '-' + next).classList.remove('display-none');
}

async function getAllDates()
{
  const Alldates = await datesService.dates().then(function (response){
    return response;
  });
  datesAll = Alldates;
}

function getDisabledDate(date)
{
  let blackoutDate = [];
  if(datesAll)
  {
    datesAll.dates.forEach(date => {
      blackoutDate.push(moment(date.datetime).format());
    });
  }
  return blackoutDate.includes(moment(date).format()); // check if dates has all the dates in calendar
}


function CalendarComponent(props) {
    const [date, setDate] = useState(new Date().setSeconds(0,0));
    const [restaurant_id, setRestaurantId] = useState('default');
    const [occasion, setOccasion] = useState('default');
    const [email, setEmail] = useState(authService.getCurrentUser().email);
      const {
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps,
      } = usePaymentInputs();

    getAllDates();
  return (
    <Container>
      <div className="calendar-wrap">
        <Formik>
          <Row
            xl={"2"}
            lg={"2"}
            md={"1"}
            sm={"1"}
            xs={"1"}
            style={{ width: "100%" }}
          >
            <Col>
              <div className="restaurant-guests-wrap">
                <div className="restaurant-image">
                  <Select
                    required
                    className="restaurant_id"
                    name="restaurant"
                    defaultValue={restaurant_id}
                    onChange={(newValue) => {
                      setRestaurantId(newValue);
                    }}
                  >
                    <MenuItem disabled value={"default"}>
                      Select Restaurant
                    </MenuItem>
                    <MenuItem value={"Restaurant 1"}>Restaurant 1</MenuItem>
                    <MenuItem value={"Restaurant 2"}>Restaurant 2</MenuItem>
                    <MenuItem value={"Restaurant 3"}>Restaurant 3</MenuItem>
                    <MenuItem value={"Restaurant 4"}>Restaurant 4</MenuItem>
                  </Select>
                  <input
                    type={"hidden"}
                    name="user_id"
                    value={authService.getCurrentUser().id}
                  />
                  <img src="images/restaurant-image.jpg" />
                </div>
              </div>
            </Col>
            <Col>
              <div className="calendar-form-wrap">
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DateTimePicker
                    className="datetime-picker"
                    renderInput={(props) => <TextField {...props} />}
                    label="Date & Time"
                    disablePast
                    ampmInClock
                    shouldDisableDate={getDisabledDate}
                    value={date}
                    minutesStep={30}
                    minTime={moment("2022-02-14T08:00")}
                    maxTime={moment("2022-02-14T19:00")}
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                  />
                  <input
                    type={"hidden"}
                    value={new Date(date)}
                    name="datetime"
                  />
                  <input type={"hidden"} value={(new Date(date).getFullYear() + '-' + new Date(date).getMonth() + '-' + new Date(date).getDay())} name="date" />
                  <input type={"hidden"} value={(new Date(date).getHours() + ':' + new Date(date).getMinutes() + ':' + new Date(date).getSeconds())} name="time" />
                  <TextField
                    required
                    className="guests_number"
                    id="outlined-number"
                    label="Number of Guests"
                    type="number"
                    name="guests_number"
                    InputProps={{
                      inputProps: { min: "1", max: "10", step: "1" },
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <Select
                    required
                    className="occasion"
                    name="occasion"
                    defaultValue={occasion}
                    onChange={(newValue) => {
                      setOccasion(newValue);
                    }}
                  >
                    <MenuItem disabled value={"default"}>
                      Select Occasion
                    </MenuItem>
                    <MenuItem value={"birthday"}>Birthday</MenuItem>
                    <MenuItem value={"meeting"}>Meeting</MenuItem>
                    <MenuItem value={"anniversary"}>Anniversary</MenuItem>
                    <MenuItem value={"new year"}>New Year</MenuItem>
                  </Select>
                  <TextField
                    required
                    className="guest_name"
                    id="outlined-number"
                    label="Guest Name"
                    type="text"
                    name="guest_name"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    required
                    className="guest_surname"
                    id="outlined-number"
                    label="Guest Surname"
                    type="text"
                    name="guest_surname"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    required
                    className="guest_email"
                    id="outlined-number"
                    label="Guest Email"
                    type="email"
                    defaultValue={email}
                    onChange={(newValue) => {
                      setEmail(newValue);
                    }}
                    name="guest_email"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    required
                    className="guest_phone"
                    id="outlined-number"
                    label="Guest Phone"
                    type="phone"
                    name="guest_phone"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <PaymentInputsWrapper
                    className="credit_number"
                    {...wrapperProps}
                  >
                    <svg {...getCardImageProps({ images })} />
                    <input {...getCardNumberProps()} name="credit_number" />
                    <input {...getExpiryDateProps()} />
                    <input {...getCVCProps()} />
                  </PaymentInputsWrapper>
                </LocalizationProvider>
              </div>
            </Col>
          </Row>
        </Formik>
      </div>
      <div className="buttons-wrap">
        <div className="book-a-table-wrap">
          <button
            id={2}
            className="book-a-table"
            type="submit"
          >
            Book a Table
          </button>
        </div>
        <div className="cancel-wrap">
          <button
            id={2}
            action={"back"}
            className="cancel"
            onClick={handleClick}
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>
    </Container>
  );
}

export default CalendarComponent;
