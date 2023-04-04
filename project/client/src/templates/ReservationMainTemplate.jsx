import { FormControl } from "@mui/material";
import { Form } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import ReservationFormComponent from "src/components/ReservationFormComponent";
import ReservationTextComponent from "src/components/ReservationTextComponent";
import reserveService from "src/services/reserve.service";
import './css/ReservationMainTemplate.css';


function HandleSubmit(event, navigate)
{
  event.preventDefault();
  
  reserveService.reserve( // reservation service call of metod
    event.target.date.value,
    event.target.time.value,
    event.target.datetime.value,
    event.target.restaurant.value,
    event.target.user_id.value,
    event.target.guests_number.value,
    event.target.occasion.value,
    event.target.guest_name.value,
    event.target.guest_surname.value,
    event.target.guest_email.value,
    event.target.guest_phone.value,
    parseInt(event.target.credit_number.value.replace(/\s/g, ''), 10)
  );
  navigate('/account');
}

function ReservationMainTemplate() {
  const navigate = useNavigate();
  return (
    <main className="reservation-main">
      <ReservationTextComponent id={"1"} />
      <form onSubmit={(event) => HandleSubmit(event, navigate)}>
        <FormControl required fullWidth>
          <ReservationFormComponent id={"2"} />
        </FormControl>
      </form>
    </main>
  );
}

export default ReservationMainTemplate;
