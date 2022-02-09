import React from "react";
import Grid from "@material-ui/core/Grid";
import "../Contact/contact.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
export default function ContactFormComponent(props) {
  console.log(props.param);
  return (
    <Grid>
      <div className={"contact-wrapper " + (props?.param === "bg" ? "bg" : "")}>
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
                    <span style={{ fontWeight: 500 }}>0784.888.009</span>
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
            <Grid container spacing={2} className="mt-3">
              <Grid item lg={6}>
                <TextField
                  id="outlined-basic"
                  label="Họ tên"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item lg={6}>
                {" "}
                <TextField
                  id="outlined-basic"
                  label="Số điện thoại"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item lg={6}>
                {" "}
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item lg={6}>
                {" "}
                <TextField
                  id="outlined-basic"
                  label="Tiêu đề"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item lg={12}>
                {" "}
                <TextField
                  id="input-content"
                  label="Nội dung"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Grid>
            </Grid>
            <div style={{ textAlign: "center" }} className="mt-3">
              <Button
                variant="contained"
                style={{ backgroundColor: "rgb(190,30,45)", color: "white" }}
              >
                Gửi thông tin
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
