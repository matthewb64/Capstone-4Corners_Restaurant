import React from "react";
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from "../components/FooterComponent";
import AboutPageMainTemplate from "src/templates/AboutPageMainTemplate";

function AboutPage() {
  return (
    <div className="AboutPage">
      <HeaderComponent/>
      <AboutPageMainTemplate/>
      <FooterComponent/>
    </div>
  );
}

export default AboutPage;
