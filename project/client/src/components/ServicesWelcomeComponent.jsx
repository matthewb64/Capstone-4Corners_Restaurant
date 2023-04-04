import React from "react";
import Container from 'react-bootstrap/Container';

import './css/ServicesWelcomeComponent.css';

function ServicesWelcomeComponent() {
  return (
    <div className="welcome-services-wrap">
      <Container>
        <div className="about-us-text-wrap">
          <p>4 Corners : Chef</p>
          <em>
            Welcome to our restaurant, where we celebrate diversity and cultural exchange through food. Our restaurant offers a fusion of flavors from around the world, blending traditional recipes with modern techniques to create a unique culinary experience.
            Our chef, who hails from a multicultural background, has traveled extensively, exploring different cuisines and techniques from various cultures. He brings his passion for food and his knowledge of diverse culinary traditions to our restaurant, creating a menu that reflects his global culinary journey.

            <br></br>
            <br></br>
            At our restaurant, we believe that food is a universal language that brings people together. We celebrate the rich cultural heritage of our community and welcome guests from all walks of life to experience our diverse menu.
            Whether you're in the mood for spicy Indian curries, flavorful Thai stir-fries, or hearty Italian pasta dishes, our restaurant has something for everyone. Come and enjoy a culinary journey around the world at our multicultural restaurant.
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

export default ServicesWelcomeComponent;
