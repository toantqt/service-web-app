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
                      0784.888.009 - 0704.888.009
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
                        TP.HCM: 302A Nguyễn Thượng Hiền, Phường 5, Quận Phú
                        Nhuận
                      </span>
                    </div>
                    <div>
                      <span style={{ fontWeight: 500 }}>
                        CẦN THƠ: 151/73 Trần Hoàng Na, Phường Hưng Lợi, Quận
                        Ninh Kiều
                      </span>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid item lg={6}>
            <img
              src="https://res.cloudinary.com/serviced24/image/upload/v1644392672/service-web-app/map_irkwgr.jpg"
              width="100%"
            />
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
