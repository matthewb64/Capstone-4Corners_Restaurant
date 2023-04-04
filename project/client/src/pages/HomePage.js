import React from "react";
import HeaderComponent from '../components/HeaderComponent';
import HomePageMainTemplate from '../templates/HomePageMainTemplate';
import FooterComponent from "../components/FooterComponent";

function HomePage() {
  return (
    <div className="HomePage">
      <HeaderComponent/>
      <HomePageMainTemplate/>
      <FooterComponent/>
    </div>
  );
}

export default HomePage;
