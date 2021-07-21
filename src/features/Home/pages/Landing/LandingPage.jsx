import React from "react";
import HeaderComponent from "../../../../components/Header/Header.component";
import "../../../../assets/css/style.css";
import "./landing.css";
import IntroduceComponent from "../../components/Introduce/Introduce.component";
import Introduce1Component from "../../components/Introduce/Introduce1.component";
import SliderComponent from "../../../../components/Slider/Slider.component";
import InterfaceComponent from "../../../../components/Interface/Interface.component";
import SolutionComponent from "../../../../components/Solution/Solution.component";
import AboutUSComponent from "../../../../components/About/AboutUS.component";
import ContactComponent from "../../../../components/Contact/Contact.component";
export default function LadingPage(props) {
  return (
    <div id="bg-img">
      <HeaderComponent />
      <div className="main">
        <IntroduceComponent />
      </div>

      <Introduce1Component />
      <SliderComponent />
      <InterfaceComponent />
      <SolutionComponent />
      <AboutUSComponent />
      <ContactComponent />
      <div style={{ height: "500px" }}></div>
    </div>
  );
}
