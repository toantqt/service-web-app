import React from "react";
import Grid from "@material-ui/core/Grid";
import "./overview.css";
export default function OverviewComponent(props) {
  return (
    <Grid>
      <div
        className={
          "overview-wrapper " + (props?.param === "web" ? "bg-web" : "bg-app")
        }
      >
        <div style={{ textAlign: "center" }}>
          {/* <div>
            <span className="overview-title">{props?.title}</span>
          </div> */}
          {/* <div style={{ fontWeight: 500 }}>
            <span>Trang Chủ </span>
            <i class="fas fa-chevron-right"></i>
            &nbsp;<span style={{ color: "#d71700" }}>{props?.title}</span>
          </div> */}
        </div>
      </div>
    </Grid>
  );
}
