import React from "react";
import Grid from "@material-ui/core/Grid";
import "./overview.css";
import Overview from "./overview.json";
export default function Overview1Component(props) {
  let lists;
  if (props?.param === "app") {
    lists = Overview.app.map((e, index) => {
      return (
        <Grid item lg={4}>
          <div className="overview1-item">
            <div>
              <img src={e.image} alt="" />
            </div>
            <div className="mt-3">
              <span className="overview1-title">{e.title}</span>
            </div>
            <div className="overview1-content mt-3">
              <span>{e.content}</span>
            </div>
            <div className="mt-5">
              <span className="overview1-btn">
                <i className="fas fa-plus-square mr-2"></i> Chi tiết
              </span>
            </div>
          </div>
        </Grid>
      );
    });
  } else if (props?.param === "web") {
    lists = Overview.web.map((e, index) => {
      return (
        <Grid item lg={4}>
          <div className="overview1-item">
            <div>
              <img src={e.image} alt="" />
            </div>
            <div className="mt-3">
              <span className="overview1-title">{e.title}</span>
            </div>
            <div className="overview1-content mt-3">
              <span>{e.content}</span>
            </div>
            <div className="mt-5">
              <span className="overview1-btn">
                <i className="fas fa-plus-square mr-2"></i> Chi tiết
              </span>
            </div>
          </div>
        </Grid>
      );
    });
  }

  return (
    <Grid>
      <div className="overview1-wrapper">
        <Grid container spacing={1}>
          {lists}
        </Grid>
      </div>
    </Grid>
  );
}
