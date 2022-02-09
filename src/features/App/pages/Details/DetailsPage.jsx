import React, { useEffect, useState } from "react";
import HeaderComponent from "../../../../components/Header/Header.component";
import Grid from "@material-ui/core/Grid";
import DetailsComponent from "../../../../components/Details/Details.component";
import OverviewComponent from "../../../../components/Overview/Overview.component";
import InterfaceComponent from "../../../../components/Interface/Interface.component";
import ContactFormComponent from "../../../../components/Contact Form/ContactForm.component";
import Overview3Component from "../../../../components/Overview/Overview3.component";
import Routes from "../../../../routes/Routes";
import slug from "../../../../resources/slug";

export default function DetailsPage(props) {
  const [title, setTitle] = useState("");
  const [param, setParam] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
    if (props?.location?.pathname) {
      switch (props?.location?.pathname) {
        case slug.DETAILS_APP_1:
          setTitle("Thiết Kế App Bán Hàng");
          setParam("app");
          break;
        case slug.DETAILS_APP_2:
          setTitle("Thiết Kế App Doanh Nghiệp");
          setParam("app");
          break;
        case slug.DETAILS_APP_3:
          setTitle("Thiết Kế App Tài Chính");
          setParam("app");
          break;
        case slug.DETAILS_APP_4:
          setTitle("Thiết Kế App Y Tế");
          setParam("app");
          break;
        case slug.DETAILS_APP_5:
          setTitle("Thiết Kế App Giáo Dục");
          setParam("app");
          break;
        case slug.DETAILS_APP_6:
          setTitle("Thiết Kế App Du Lịch");
          setParam("app");
          break;
        case slug.DETAILS_APP_7:
          setTitle("Thiết Kế App Ăn Uống");
          setParam("app");
          break;
        case slug.DETAILS_APP_8:
          setTitle("Thiết Kế App Vận Chuyển");
          setParam("app");
          break;
        case slug.DETAILS_APP_9:
          setTitle("Thiết Kế App Hẹn Hò");
          setParam("app");
          break;
        case slug.DETAILS_WEB_1:
          setTitle("Thiết Kế Website Bán Hàng");
          setParam("web");
          break;
      }
    }
  }, [props]);
  return (
    <Grid>
      <HeaderComponent />
      <OverviewComponent title={title} />
      <Routes />
      <InterfaceComponent param={param} />
      <ContactFormComponent param="bg" />
      <Overview3Component />
    </Grid>
  );
}
