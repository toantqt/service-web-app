import React from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "react-slick";
import "./slider.css";
import { useHistory } from "react-router-dom";
export default function SliderComponent(props) {
  const history = useHistory();
  const handleClick = (slug) => {
    history.push(`/details/${slug}`);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };
  const arr = [
    {
      img: "https://res.cloudinary.com/serviced24/image/upload/v1644288770/service-web-app/app/app_ban_hang_ypotes.png",
      title1: "App Bán Hàng",
      title2: "Thương Mại Điện Tử",
      slug: "app-ban-hang",
    },
    {
      img: "https://res.cloudinary.com/serviced24/image/upload/v1644288770/service-web-app/app/app_doanh_nghiep_j9eugv.png",
      title1: "App Doanh Nghiệp ",
      title2: "Quản Lý Khách Hàng",
      slug: "app-doanh-nghiep",
    },
    {
      img: "https://res.cloudinary.com/serviced24/image/upload/v1644288771/service-web-app/app/app_tin_dung_fstpxl.png",
      title1: "App Tài Chính",
      title2: "Quản Lý Chi Tiêu",
      slug: "app-tai-chinh",
    },
    {
      img: "https://res.cloudinary.com/serviced24/image/upload/v1644288771/service-web-app/app/app_y_te_wewkyb.png",
      title1: "App Y Tế",
      title2: "Chăm Sóc Sức Khỏe",
      slug: "app-y-te",
    },
    {
      img: "https://res.cloudinary.com/serviced24/image/upload/v1644288770/service-web-app/app/app_edu_ltm31q.png",
      title1: "App Giáo Dục",
      title2: "Hệ Thống Đào Tạo",
      slug: "app-giao-duc",
    },
    {
      img: "https://res.cloudinary.com/serviced24/image/upload/v1644288770/service-web-app/app/app_du_lich_jxm7c7.png",
      title1: "App Du Lịch",
      title2: "Nhà Hàng Khách Sạn",
      slug: "app-du-lich",
    },
    {
      img: "https://res.cloudinary.com/serviced24/image/upload/v1644288770/service-web-app/app/app_food_liicoi.png",
      title1: "App Ăn Uống",
      title2: "Đặt Bàn Gọi Món",
      slug: "app-an-uong",
    },

    {
      img: "https://res.cloudinary.com/serviced24/image/upload/v1644288771/service-web-app/app/app_van_chuyen_ygsmbn.png",
      title1: "App Vận Chuyển",
      title2: "Giải Pháp Logicstic",
      slug: "app-van-chuyen",
    },
    {
      img: "https://res.cloudinary.com/serviced24/image/upload/v1644288770/service-web-app/app/app_hen_ho_atetpk.png",
      title1: "App Hẹn Hò",
      title2: "Kết Nối Con Người",
      slug: "app-hen-ho",
    },
  ];
  return (
    <div className="slider pt-5">
      <Slider {...settings}>
        {arr.map((e, index) => {
          return (
            <div className="wrapper">
              <div style={{ textAlign: "center" }}>
                <a>
                  <img width="78" height="83" src={e.img} alt="App Bán Hàng" />
                </a>
              </div>
              <div className="mt-4" style={{ textAlign: "center" }}>
                <span className="slider-title">
                  {e.title1} <br /> {e.title2}
                </span>
              </div>
              <div
                className="mt-4 mb-3 slider-btn"
                style={{ textAlign: "center", fontSize: "18px" }}
              >
                <span
                  onClick={() => {
                    handleClick(e.slug);
                  }}
                >
                  <i
                    className="fas fa-plus-square mr-2"
                    style={{ color: "red" }}
                  ></i>
                  Chi tiết
                </span>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
