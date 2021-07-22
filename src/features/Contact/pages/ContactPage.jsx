import React, { useEffect } from "react";
import HeaderComponent from "../../../components/Header/Header.component";
import OverviewComponent from "../../../components/Overview/Overview.component";
import Grid from "@material-ui/core/Grid";
import ContactFormComponent from "../../../components/Contact Form/ContactForm.component";

export default function ContactPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid>
      <HeaderComponent />
      <OverviewComponent title="Liên hệ" />
      <ContactFormComponent />
      <Grid>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0724032762455!2d105.76331631433185!3d10.010878275594706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a089ccbbce7857%3A0x6de2489f59508e98!2zMTUxLzczIFRy4bqnbiBIb8OgbmcgTmEsIEjGsG5nIEzhu6NpLCBOaW5oIEtp4buBdSwgQ-G6p24gVGjGoSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1626933747712!5m2!1svi!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </Grid>
    </Grid>
  );
}
