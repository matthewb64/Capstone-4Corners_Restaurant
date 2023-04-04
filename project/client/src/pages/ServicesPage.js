import React from "react";
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from "../components/FooterComponent";
import ServicesMainTemplate from "src/templates/ServicesMainTemplate";

function ServicesPage() {
  return (
    <div className="ServicesPage">
      <HeaderComponent/>
      <ServicesMainTemplate/>
      <FooterComponent/>
    </div>
  );
}

export default ServicesPage;
