import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
export default function BannerComponent(props) {
  console.log(props);
  return (
    <Grid>
      <div className="banner-printing">
        <img src={props?.banner} width="100%" height="100%" />
      </div>
    </Grid>
  );
}
