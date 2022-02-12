import React from "react";
import Grid from "@material-ui/core/Grid";
import "./overview.css";

export default function Overview2Component(props) {
  return (
    <Grid>
      <div className="overview2-wrapper">
        <Grid container spacing={1} style={{ paddingBottom: "100px" }}>
          <Grid item lg={6}>
            <div style={{ width: "80%" }}>
              <span className="overview2-title">
                Tại Sao Khách Hàng Lựa Chọn Thiết Kế App Của Design24?
              </span>
            </div>
            <div style={{ width: "100%" }} className="ml-4 mt-5">
              <img
                src="https://res.cloudinary.com/serviced24/image/upload/v1644374078/service-web-app/question_aygjl6.png"
                width="60%"
                style={{ margin: "0 auto" }}
              />
            </div>
          </Grid>
          <Grid item lg={6}>
            <div className="overview2-item mt-3">
              <Grid container spacing={3}>
                <Grid item lg={2}>
                  <div>
                    <img
                      src="https://res.cloudinary.com/serviced24/image/upload/v1644635099/service-web-app/icon/toi_uu_xkejfh.jpg"
                      width="100%"
                    />
                  </div>
                </Grid>
                <Grid item lg={10}>
                  <div>
                    <span className="head-title">
                      Mã Nguồn Tối Ưu, Máy Chủ Cao Cấp, Cung Cấp Giải Pháp Nhanh
                      Chóng
                    </span>
                  </div>
                  <div className="mt-2">
                    <span>
                      Dịch vụ an toàn, phát triển các ứng dụng di động đa nền
                      tảng. Hệ thống thống lưu trữ dữ liệu bằng phương pháp điện
                      toán đám mây cho iOS, Android, đảm bảo độ bảo mật cao cho
                      các nền tảng dữ liệu."
                    </span>
                  </div>
                </Grid>
              </Grid>
            </div>

            <div className="overview2-item mt-5 ml-5">
              <Grid container spacing={3}>
                <Grid item lg={2}>
                  <div>
                    <img
                      src="https://res.cloudinary.com/serviced24/image/upload/v1644635098/service-web-app/icon/ban_hang_tygfr5.jpg"
                      width="100%"
                    />
                  </div>
                </Grid>
                <Grid item lg={10}>
                  <div>
                    <span className="head-title">
                      Hỗ Trợ Bán Hàng Chuyên Nghiệp
                    </span>
                  </div>
                  <div className="mt-2">
                    <span>
                      Cung cấp giải pháp theo yêu cầu, thử nghiệm và triển khai
                      các ứng dụng dành cho thiết bị di động một cách độc lập,
                      có thể tiếp cận với đối tượng khách hàng tiềm năng, tăng
                      giá trị chuyển đổi.
                    </span>
                  </div>
                </Grid>
              </Grid>
            </div>

            <div className="overview2-item mt-5">
              <Grid container spacing={3}>
                <Grid item lg={2}>
                  <div>
                    <img
                      src="https://res.cloudinary.com/serviced24/image/upload/v1644635098/service-web-app/icon/ky_thuat_yd40qt.jpg"
                      width="100%"
                    />
                  </div>
                </Grid>
                <Grid item lg={10}>
                  <div>
                    <span className="head-title">
                      Hỗ Trợ Xử Lý Mọi Vấn Đề Liên Quan Đến Kỹ Thuật
                    </span>
                  </div>
                  <div className="mt-2">
                    <span>
                      Sao lưu dữ liệu hàng tuần. Bảo mật ý tưởng, bảo mật hệ
                      thống và dữ liệu người dùng. Được duy trì bởi các chuyên
                      gia bảo mật dày dạn kinh nghiệm. Tư duy logic, sáng tạo,
                      thẩm mỹ, lấy người dùng làm trọng tâm
                    </span>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
