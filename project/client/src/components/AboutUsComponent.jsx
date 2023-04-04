import React from "react";
import Container from 'react-bootstrap/Container';

import './css/AboutUsComponent.css';

function AboutUsComponent() {
  return (
    <div className="about-us-wrap">
      <Container>
        <div className="about-us-text-wrap">
          <p>About us</p>
          <em>
          At our restaurant, we believe that food is a universal language that brings people together. 
          We celebrate the rich cultural heritage of our community and welcome guests from all walks of life to experience our diverse menu.
          Whether you're in the mood for spicy Indian curries, flavorful Thai stir-fries, or hearty Italian pasta dishes, our restaurant has 
          something for everyone. Come and enjoy a culinary journey around the world at our multicultural restaurant.
         
          </em>
        </div>
        <div className="about-us-quote-wrap">
            <div className="about-us-quote">
                <img alt="Quote" src="images/services-image.jpg"/>
            </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutUsComponent;
