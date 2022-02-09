import React from "react";
import Grid from "@material-ui/core/Grid";
import "./solution.css";

export default function SolutionComponent(props) {
  return (
    <Grid>
      <div className="solution-wrapper">
        <div>
          <span className="title">Giải Pháp Ứng Dụng Thông Minh 5.0</span>
        </div>
        <div>
          <span>
            Giải pháp ứng dụng di động chuyên dụng tốt nhất cho mọi doanh nghiệp
          </span>
        </div>
        <Grid container spacing={1} className="mt-5">
          <Grid item lg={3} className="solution-item">
            <div className="item-wrapper">
              <div className="item-header">
                <span className="header-title">Tổ Chức Doanh Nghiệp</span>
              </div>
              <div className="item-img mt-3">
                <img src="https://res.cloudinary.com/serviced24/image/upload/v1644288771/service-web-app/app/icon_cho_app-10_b6lm2s.png" />
              </div>
              <div className="witr_pricing_border mt-3"></div>
              <div className="item-content">
                <ul>
                  <li>Tiết kiệm thời gian</li>
                  <li>Tối ưu hóa quy trình kinh doanh</li>
                  <li>Ghép nối nhiều hệ thống tổ chức</li>
                  <li>Kiểm soát dữ liệu tốt hơn</li>
                  <li>Tăng cường bảo mật dữ liệu</li>
                  <li>Giám sát hoạt động tốt hơn</li>
                  <li>
                    Liên kết với phần mềm văn phòng (Word, Outlook, Excel)
                  </li>
                  <li>Truy cập 24/7</li>
                  <li>Tự động hóa các quy trình kinh doanh</li>
                  <li>Các ứng dụng Internet phong phú</li>
                </ul>
              </div>
              <div className="mt-5 pb-5">
                <a className="item-btn">Liên hệ </a>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} className="solution-item">
            <div className="item-wrapper">
              <div className="item-header">
                <span className="header-title">Cơ Quan Nhà Nước</span>
              </div>
              <div className="item-img mt-3">
                <img src="https://res.cloudinary.com/serviced24/image/upload/v1644288771/service-web-app/app/nha_nuoc_d07clz.png" />
              </div>
              <div className="witr_pricing_border mt-3"></div>
              <div className="item-content">
                <ul>
                  <li>Thiết kế mô hình ứng dụng riêng biệt</li>
                  <li>Phát triển iOS, Android</li>
                  <li>Đơn giản hóa quyền truy cập</li>
                  <li>Tạo các ứng dụng tích hợp với website</li>
                  <li>Tối ưu hóa thiết kế giao diện người dùng</li>
                  <li>Hình ảnh đa dạng, hiện đại và năng động</li>
                  <li>Quảng cáo ứng dụng - Tiếp thị di động</li>
                  <li>Xuất bản ứng dụng trên Cửa hàng</li>
                  <li>Phát triển niềm tin của khách hàng</li>
                </ul>
              </div>
              <div className="mt-5 pb-5">
                <a className="item-btn">Liên hệ </a>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} className="solution-item item-3">
            <div className="item-wrapper">
              <div className="item-header">
                <span className="header-title">Khách Hàng Cá Nhân</span>
              </div>
              <div className="item-img mt-3">
                <img src="https://res.cloudinary.com/serviced24/image/upload/v1644288771/service-web-app/app/ca_nhan_l4qi72.png" />
              </div>
              <div className="witr_pricing_border mt-3"></div>
              <div className="item-content">
                <ul>
                  <li>Phân tích nhu cầu</li>
                  <li>Đề xuất giải pháp</li>
                  <li>Lộ trình và điều kiện</li>
                  <li>Thảo luận khởi động dự án</li>
                  <li>Thiết kế, phát triển</li>
                  <li>Thử nghiệm và tải lên</li>
                  <li>Kiểm tra và sửa chữa</li>
                  <li>Theo dõi và hỗ trợ</li>
                </ul>
              </div>
              <div className="mt-5 pb-5">
                <a className="item-btn">Liên hệ </a>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} className="solution-item">
            <div className="item-wrapper">
              <div className="item-header">
                <span className="header-title">Dự Án Lớn</span>
              </div>
              <div className="item-img mt-3">
                <img src="https://res.cloudinary.com/serviced24/image/upload/v1644288771/service-web-app/app/big_project_t7dfom.png" />
              </div>
              <div className="witr_pricing_border mt-3"></div>
              <div className="item-content">
                <ul>
                  <li>Thiết kế và sản xuất Ứng dụng Di động</li>
                  <li>Hỗ trợ chuyển đổi kỹ thuật số</li>
                  <li>Ứng dụng cho tất cả các loại hệ thống</li>
                  <li>Tích hợp</li>
                  <li>Tối ưu hóa</li>
                  <li>Khả năng tương tác</li>
                  <li>Bảo mật dữ liệu</li>
                  <li>Mở rộng quy mô</li>
                </ul>
              </div>
              <div className="mt-5 pb-5">
                <a className="item-btn">Liên hệ </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
