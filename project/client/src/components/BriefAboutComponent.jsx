import React from "react";
import { Container } from "react-bootstrap";

import './css/BriefAboutComponent.css';

function BriefAboutComponent() {
  return (
    <div className="brief-wrap">
      <Container>
        <div className="brief-label">Brief about the company</div>
        <div className="brief-text">
          <p>
          Welcome to our restaurant, where we celebrate diversity and cultural exchange through food. Our restaurant offers a fusion of flavors from around the world, blending traditional recipes with modern techniques to create a unique culinary experience.
          Our chef, who hails from a multicultural background, has traveled extensively, exploring different cuisines and techniques from various cultures. He brings his passion for food and his knowledge of diverse culinary traditions to our restaurant, creating a menu that reflects his global culinary journey.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default BriefAboutComponent;
