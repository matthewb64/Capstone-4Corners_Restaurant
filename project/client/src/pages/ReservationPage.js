import React from "react";
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from "../components/FooterComponent";
import ReservationMainTemplate from "src/templates/ReservationMainTemplate";

function ReservationPage() {
  return (
    <div className="ReservationPage">
      <HeaderComponent/>
      <ReservationMainTemplate/>
      <FooterComponent/>
    </div>
  );
}

export default ReservationPage;
