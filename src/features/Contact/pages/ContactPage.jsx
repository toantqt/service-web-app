import React, { useEffect } from "react";
import HeaderComponent from "../../../components/Header/Header.component";
import OverviewComponent from "../../../components/Overview/Overview.component";
import Grid from "@material-ui/core/Grid";

export default function ContactPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid>
      <HeaderComponent />
      <OverviewComponent title="Liên hệ" />
    </Grid>
  );
}
