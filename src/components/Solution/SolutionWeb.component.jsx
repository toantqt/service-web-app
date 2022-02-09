import React from "react";
import Grid from "@material-ui/core/Grid";
import "./solution.css";

export default function SolutionWebComponent(props) {
  return (
    <Grid>
      <div className="solution-wrapper">
        <div>
          <span className="title">Gói Thiết Kế Website</span>
        </div>
        <div>
          <span>Giải pháp chuyên dụng tốt nhất cho mọi doanh nghiệp</span>
        </div>
        <Grid container spacing={1} className="mt-5">
          <Grid item lg={4} className="solution-item">
            <div className="item-wrapper">
              <div className="item-header">
                <span className="header-title">Gói Doanh nghiệp</span>
              </div>
              <div className="item-img mt-3">
                <img src="https://res.cloudinary.com/serviced24/image/upload/v1644372695/service-web-app/web/goi_doanh_nghiep_yshnl0.png" />
              </div>
              <div className="witr_pricing_border mt-3"></div>
              <div className="item-content">
                <ul>
                  <li>Trang chủ</li>
                  <li>Banner trang chủ</li>
                  <li>Popup trang chủ</li>
                  <li>Giới thiệu</li>
                  <li>Tin tức</li>
                  <li>Sản phẩm - Dịch vụ</li>
                  <li>Videos- Hình ảnh</li>
                  <li>Thông báo tự động</li>
                  <li>Liên kết Cộng tác viên</li>
                  <li>Quản trị website</li>
                </ul>
              </div>
              <div className="mt-5 pb-5">
                <a className="item-btn">Tạo website ngay </a>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} className="solution-item item-3">
            <div className="item-wrapper">
              <div className="item-header">
                <span className="header-title">Gói Bán Hàng</span>
              </div>
              <div className="item-img mt-3">
                <img src="https://res.cloudinary.com/serviced24/image/upload/v1644372696/service-web-app/web/web_ban_hang_kieixa.png" />
              </div>
              <div className="witr_pricing_border mt-3"></div>
              <div className="item-content">
                <ul>
                  <li>Trang chủ</li>
                  <li>Banner trang chủ</li>
                  <li>Popup trang chủ</li>
                  <li>Tin tức</li>
                  <li>Cửa hàng</li>
                  <li>Giỏ hàng - Đặt hàng</li>
                  <li>Thành viên - Đăng nhập, Đăng ký</li>
                  <li>Thanh toán</li>
                  <li>Thông báo tự động</li>
                  <li>Phân tích người dùng</li>
                  <li>Quản trị website</li>
                </ul>
              </div>
              <div className="mt-5 pb-5">
                <a className="item-btn">Tạo website ngay </a>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} className="solution-item">
            <div className="item-wrapper">
              <div className="item-header">
                <span className="header-title">Gói Thiết kế theo yêu cầu</span>
              </div>
              <div className="item-img mt-3">
                <img src="https://res.cloudinary.com/serviced24/image/upload/v1644372696/service-web-app/web/goi_theo_yeu_cau_dhic3j.png" />
              </div>
              <div className="witr_pricing_border mt-3"></div>
              <div className="item-content">
                <ul>
                  <li>Tất cả chức năng website bán hàng</li>
                  <li>Chức năng khác báo giá theo yêu cầu</li>
                </ul>
              </div>
              <div className="mt-5 pb-5">
                <a className="item-btn">Tạo website ngay </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
