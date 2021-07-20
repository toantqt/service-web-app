import React from "react";
import Grid from "@material-ui/core/Grid";

export default function IntroduceComponent(props) {
  return (
    <Grid>
      <div className="intro-wrapper">
        <div>
          <span className="title">
            THIẾT KẾ APP CHUYÊN NGHIỆP UY TÍN HÀNG ĐẦU
          </span>
        </div>
        <div className="mt-5">
          <span className="sub-title">
            Phục vụ vượt mong đợi của khách hàng, luôn là thương hiệu mang đến
            trải nghiệm khách hàng tốt nhất Việt Nam
          </span>
        </div>
        <div className="action mt-3">
          <a className="btn">Liên hệ ngay</a>
          <a className="btn btn-phone ml-2">
            {" "}
            <i className="fas fa-phone-square-alt mr-1"></i> 0784.888.009
          </a>
        </div>
      </div>
    </Grid>
  );
}
