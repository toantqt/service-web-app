import React from "react";
import Grid from "@material-ui/core/Grid";
import "./overview.css";

export default function Overview4Component(props) {
  return (
    <Grid>
      <div className="overview4-wrapper">
        <Grid container spacing={5}>
          <Grid item lg={6}>
            <img
              src="https://zinpro.vn/public/anh1/files/ban-co-biet-app-mobile.png"
              width="100%"
              alt=""
            />
          </Grid>
          <Grid item lg={6}>
            <div>
              <span style={{ fontSize: "20px", color: "#be1e2d" }}>
                Các Bước Triển Khai Khi
              </span>
            </div>
            <div>
              <span className="title">
                Thiết Kế Website Chuyên Nghiệp Tại Design24
              </span>
            </div>
            <div className="mt-3">
              <ul>
                <li>Bước 1: Tiếp nhận yêu cầu từ khách hàng</li>
                <li>
                  Bước 2: Nghiên cứu, đánh yêu cầu và đưa ra tư vấn cụ thể theo
                  yêu cầu của khách hàng
                </li>
                <li>Bước 3: Tiến hành thiết kế giao diện trang chủ</li>
                <li>
                  Bước 4: Nhận phản hồi từ khách hàng, tiến hành chỉnh sửa, hoàn
                  thiện
                </li>
                <li>Bước 5: Thiết kế tiếp tục cho các trang con</li>
                <li>Bước 6: Lập trình hiển thị Responsive</li>
                <li>Bước 7: Phát hành bản Beta và kiểm thử.</li>
                <li>Bước 8: Lập trình chức năng theo yêu cầu</li>
                <li>Bước 9: Bàn giao và nghiệm thu</li>
                <li>Bước 9: Bàn giao và nghiệm thu</li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
