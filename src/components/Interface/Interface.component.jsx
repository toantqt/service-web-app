import React from "react";
import Grid from "@material-ui/core/Grid";
import "./interface.css";
import Interface from "./interface.json";

export default function InterfaceComponent(props) {
  let lists;
  if (props?.param === "app") {
    lists = Interface.app.map((e, index) => {
      return (
        <Grid item lg={3} className="interface-item">
          <div className="item-wrapper">
            <div className="item">
              <div>
                <a>
                  <img src={e.image} width="100%" />
                </a>
              </div>
              <div className="item-content">
                <div>
                  <span className="title">{e.title}</span>
                </div>
                <div className="mt-2">
                  <span style={{ color: "#696687" }}>{e.time}</span>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      );
    });
  } else if (props?.param === "web") {
    lists = Interface.web.map((e, index) => {
      return (
        <Grid item lg={3} className="interface-item">
          <div className="item-wrapper">
            <div className="item">
              <div>
                <a>
                  <img src={e.image} width="100%" />
                </a>
              </div>
              <div className="item-content">
                <div>
                  <span className="title">{e.title}</span>
                </div>
                <div className="mt-2">
                  <span style={{ color: "#696687" }}>{e.time}</span>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      );
    });
  }

  return (
    <Grid>
      <div className="interface-wrapper">
        <div>
          <span className="interface-header">Kho Giao Diện</span>
        </div>
        <div>
          <span>
            Hệ sinh thái giao diện cho các ứng dụng đa dạng và hiện đại
          </span>
        </div>
        <Grid container spacing={2} className="mt-3">
          {lists}
        </Grid>
        <div className="mt-5 interface-btn">
          <span>
            <i className="fas fa-plus-square mr-2" style={{ color: "red" }}></i>{" "}
            Xem tất cả
          </span>
        </div>
      </div>
    </Grid>
  );
}
