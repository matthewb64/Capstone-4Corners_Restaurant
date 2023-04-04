import React from "react";
import ServicesComponent from "src/components/ServicesComponent";
import ServicesMenuComponent from "src/components/ServicesMenuComponent";
import ServicesWelcomeComponent from "src/components/ServicesWelcomeComponent";

import './css/ServicesMainTemplate.css';

function ServicesMainTemplate() {
  return (
    <main className="services-main">
        <ServicesComponent/>
        <ServicesWelcomeComponent/>
        <ServicesMenuComponent/>
    </main>
  );
}

export default ServicesMainTemplate;
