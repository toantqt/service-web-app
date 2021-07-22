import React from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "react-slick";
import Phone from "../../assets/image/phone.png";

export default function SliderHeadComponent(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Grid>
      <div className="intro-wrapper">
        <Grid container spacing={1}>
          <Grid item lg={3}></Grid>
          <Grid item lg={6}>
            <div
              className="phone-frame"
              style={{ backgroundImage: `url(${Phone})` }}
            >
              <Slider
                {...settings}
                style={{ width: "400px", margin: "0 auto" }}
              >
                <div className="slide-item slide1"></div>
                <div className="slide-item slide2"></div>
                <div className="slide-item slide3"></div>
              </Slider>
            </div>
          </Grid>
          <Grid item lg={3}></Grid>
        </Grid>
      </div>
    </Grid>
  );
}
