import React from "react";
import Grid from "@material-ui/core/Grid";
import "./about.css";
export default function AboutUSComponent(props) {
  return (
    <Grid>
      <div className="about-wrapper">
        <Grid container spacing={1}>
          <Grid item lg={6}>
            <div>
              <span className="about-head-title">Về Chúng Tôi</span>
            </div>
            <div style={{ width: "90%" }} className="mt-2">
              <span className="about-title">
                DESIGN24 - Dẫn Đầu Về Dịch Vụ Phát Triển Ứng Dụng Di Động
              </span>
            </div>
            <div className="mt-2">
              <span className="about-bottom-title">
                Các chuyên gia của Design24 có thể cung cấp các giải pháp ứng
                dụng web và di động cho các lĩnh vực kinh doanh đa dạng, giúp
                bạn tiết kiệm thời gian, tiền bạc và cơ hội phát triển. Chúng
                tôi đã có kinh nghiệm hợp tác với doanh nghiệp thuộc mọi quy mô
                và tự tin sẽ cung cấp cho bạn giải pháp sáng tạo, hiệu quả, bứt
                phá kinh doanh.
              </span>
            </div>
            <Grid container spacing={1} className="mt-3">
              <Grid item lg={2}>
                <div>
                  <a className="item-icon">
                    <i class="fab fa-apple"></i>
                  </a>
                </div>
              </Grid>
              <Grid item lg={10}>
                <div>
                  <span className="item-head-title">
                    Ứng Dụng Di Động Cho IOS Và Android
                  </span>
                </div>
                <div>
                  <span className="item-bottom-title">
                    Thiết kế và phát triển trải nghiệm kỹ thuật số trên cả hai
                    nền tảng iOS và Android. Mục tiêu của chúng tôi là tạo ra
                    một ứng dụng di động hấp dẫn, hiệu quả và giá cả phải chăng.
                    . .
                  </span>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={1} className="mt-3">
              <Grid item lg={2}>
                <div>
                  <a className="item-icon">
                    <i
                      class="far fa-thumbs-up"
                      style={{ fontSize: "40px" }}
                    ></i>
                  </a>
                </div>
              </Grid>
              <Grid item lg={10}>
                <div>
                  <span className="item-head-title">
                    Ứng Dụng Cho Khởi Nghiệp Và Tất Cả
                  </span>
                </div>
                <div>
                  <span className="item-bottom-title">
                    Chúng tôi có thể cung cấp lời khuyên chiến lược với tư cách
                    là đối tác dự án để giúp bạn chiến thắng trên mọi mặt trận
                    (bán hàng, truyền thông, tiếp thị, quản lý / tài chính ...)
                  </span>
                </div>
              </Grid>
            </Grid>
            <div className="mt-4">
              <span className="see-more">
                {" "}
                <i class="fas fa-chevron-right"></i>
                <i class="fas fa-chevron-right"></i> Xem chi tiết
              </span>
            </div>
          </Grid>
          <Grid item lg={6}>
            <div className="about-img">
              <img
                src="https://res.cloudinary.com/serviced24/image/upload/v1644547959/service-web-app/colleagues-giving-fist-bump_1_jqmxot.jpg"
                width="100%"
              />
            </div>
            <div className="about-img-content">
              <div>
                <span className="item-head-title">Hơn 10 năm Kinh nghiệm</span>
              </div>
              <div>
                <span>
                  Design24 đã có hơn 10 năm kinh nghiệm thiết kế và phát triển
                  ứng dụng, hợp tác với nhiều doanh nghiệp lớn nhỏ trên nhiều
                  lĩnh vực.
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
