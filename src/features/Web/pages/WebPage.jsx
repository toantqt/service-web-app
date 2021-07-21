import React from "react";
import HeaderComponent from "../../../components/Header/Header.component";
import Grid from "@material-ui/core/Grid";
import OverviewComponent from "../../../components/Overview/Overview.component";
import Overview1Component from "../../../components/Overview/Overview1.component";
import SolutionComponent from "../../../components/Solution/Solution.component";
import InterfaceComponent from "../../../components/Interface/Interface.component";
import Overview2Component from "../../../components/Overview/Overview2.component";
import Overview3Component from "../../../components/Overview/Overview3.component";
import SolutionWebComponent from "../../../components/Solution/SolutionWeb.component";
import Overview4Component from "../../../components/Overview/Overview4.component";

export default function WebPage(props) {
  return (
    <Grid>
      <HeaderComponent />
      <OverviewComponent title="Thiết Kế Website" />
      <Overview1Component param="web" />
      <SolutionWebComponent />
      <InterfaceComponent param="web" />
      <Overview4Component />
      <Overview3Component />
    </Grid>
  );
}
