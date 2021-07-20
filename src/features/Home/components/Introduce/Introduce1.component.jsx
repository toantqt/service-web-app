import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Introduce1Component(props) {
  return (
    <Grid>
      <div className="intro1-wrapper">
        <div className="pt-5">
          <span className="header-title">
            HỖ TRỢ KHÁCH HÀNG THIẾT KẾ APP TỐT NHẤT VIỆT NAM
          </span>
        </div>
        <div className="mt-2">
          <span className="header-title1">
            Công Ty Trách Nhiệm Hữu Hạn DESIGN24
          </span>
        </div>
        <div>
          <span>
            Chúng tôi cung cấp dịch vụ thiết kế ứng dụng dành cho thiết bị di
            động và website hàng đầu Việt Nam
          </span>
        </div>
      </div>
    </Grid>
  );
}
