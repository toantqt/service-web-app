import React from "react";
import HeaderComponent from "../../../../components/Header/Header.component";
import "../../../../assets/css/style.css";
import "./landing.css";
import IntroduceComponent from "../../components/Introduce/Introduce.component";
import Introduce1Component from "../../components/Introduce/Introduce1.component";
import SliderComponent from "../../../../components/Slider/Slider.component";
export default function LadingPage(props) {
  return (
    <div id="bg-img">
      <HeaderComponent />
      <div className="main">
        <IntroduceComponent />
      </div>

      <Introduce1Component />
      <SliderComponent />
      <div style={{ height: "500px" }}></div>
    </div>
  );
}
