import React from "react";
import Grid from "@material-ui/core/Grid";
import "./contact.css";
export default function ContactComponent(props) {
  return (
    <Grid>
      <div className="about-contact">
        <Grid container spacing={1}>
          <Grid item lg={6}>
            <div>
              <span className="contact-title">
                CÔNG TY TRÁCH NHIỆM HỮU HẠN DESIGN24
              </span>
            </div>
            <div>
              <span>
                Chuyên gia tư vấn của chúng tôi sẽ luôn có giải pháp hợp lý nhất
                cho bạn! Vui lòng liên hệ ngay với chúng tôi nhé !
              </span>
            </div>
            <div className="mt-5">
              <Grid container spacing={1}>
                <Grid item lg={2}>
                  <a className="contact-icon">
                    <i class="fas fa-phone-alt"></i>
                  </a>
                </Grid>
                <Grid item lg={10}>
                  <div>
                    <span style={{ fontWeight: 500 }}>
                      0835-299-922 <br /> support@zinpro.vn
                    </span>
                  </div>
                </Grid>
              </Grid>
              <div className="mt-3">
                <Grid container spacing={1}>
                  <Grid item lg={2}>
                    <a className="contact-icon">
                      <i class="fas fa-map-marker-alt"></i>
                    </a>
                  </Grid>
                  <Grid item lg={10}>
                    <div>
                      <span style={{ fontWeight: 500 }}>
                        Tầng 4 Tòa Nhà HUD3 Tower, 121-123 Tô Hiệu, Phường
                        Nguyễn Trãi, Quận Hà Đông, Thành Phố Hà Nội
                      </span>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid item lg={6}>
            <img src="https://zinpro.vn/style/img/map.webp" width="100%" />
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
