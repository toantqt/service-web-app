import React, { useEffect } from "react";
import HeaderComponent from "../../../../components/Header/Header.component";
import Grid from "@material-ui/core/Grid";
import OverviewComponent from "../../../../components/Overview/Overview.component";
import Overview1Component from "../../../../components/Overview/Overview1.component";
import SolutionComponent from "../../../../components/Solution/Solution.component";
import InterfaceComponent from "../../../../components/Interface/Interface.component";
import Overview2Component from "../../../../components/Overview/Overview2.component";
import Overview3Component from "../../../../components/Overview/Overview3.component";

export default function AppPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid>
      <HeaderComponent />
      <OverviewComponent title="App Chuyên Dụng" param="app" />
      <Overview1Component param="app" />
      <SolutionComponent />
      <InterfaceComponent param="app" />
      <Overview2Component />
      <Overview3Component />
    </Grid>
  );
}
