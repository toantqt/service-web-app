import React, { useEffect } from "react";
import HeaderComponent from "../../../../components/Header/Header.component";
import Grid from "@material-ui/core/Grid";
import DetailsComponent from "../../../../components/Details/Details.component";
import OverviewComponent from "../../../../components/Overview/Overview.component";
import InterfaceComponent from "../../../../components/Interface/Interface.component";
import ContactFormComponent from "../../../../components/Contact Form/ContactForm.component";
import Overview3Component from "../../../../components/Overview/Overview3.component";

export default function DetailsPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid>
      <HeaderComponent />
      <OverviewComponent title="Thiết Kế App Bán Hàng" />
      <DetailsComponent />
      <InterfaceComponent param="app" />
      <ContactFormComponent param="bg" />
      <Overview3Component />
    </Grid>
  );
}
