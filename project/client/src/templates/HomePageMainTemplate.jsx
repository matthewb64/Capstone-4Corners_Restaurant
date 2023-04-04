import React from "react";
import AboutUsComponent from "src/components/AboutUsComponent";
import BriefAboutComponent from "src/components/BriefAboutComponent";
import SelectionComponent from "src/components/SelectionComponent";
import BookNowComponent from '../components/BookNowComponent';

import './css/HomePageMainTemplate.css';

function HomePageMainTemplate() {
  return (
    <main className="main">
        <BookNowComponent/>
        <SelectionComponent/>
        <BriefAboutComponent/>
        <AboutUsComponent/>
    </main>
  );
}

export default HomePageMainTemplate;
