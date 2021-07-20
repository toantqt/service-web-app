import React from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "react-slick";
import "./slider.css";
export default function SliderComponent(props) {
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
      img: "https://zinpro.vn/public/anh1/files/icon/icon-thiet-ke-app-ban-hang.png",
      title1: "App Bán Hàng",
      title2: "Thương Mại Điện Tử",
    },
    {
      img: "https://zinpro.vn/public/anh1/files/icon/doanh-nghiep.png",
      title1: "App Doanh Nghiệp ",
      title2: "Quản Lý Khách Hàng",
    },
    {
      img: "https://zinpro.vn/public/anh1/files/icon/tai-chinh.png",
      title1: "App Tài Chính",
      title2: "Quản Lý Chi Tiêu",
    },
    {
      img: "https://zinpro.vn/public/anh1/files/icon/suc-khoe.png",
      title1: "App Y Tế",
      title2: "Chăm Sóc Sức Khỏe",
    },
    {
      img: "https://zinpro.vn/public/anh1/files/icon/giao-duc.png",
      title1: "App Giáo Dục",
      title2: "Hệ Thống Đào Tạo",
    },
    {
      img: "https://zinpro.vn/public/anh1/files/icon/du-lich.png",
      title1: "App Du Lịch",
      title2: "Nhà Hàng Khách Sạn",
    },
    {
      img: "https://zinpro.vn/public/anh1/files/icon/app-an-uong.png",
      title1: "App Ăn Uống",
      title2: "Đặt Bàn Gọi Món",
    },

    {
      img: "https://zinpro.vn/public/anh1/files/icon/app-van-chuyen.png",
      title1: "App Vận Chuyển",
      title2: "Giải Pháp Logicstic",
    },
    {
      img: "https://zinpro.vn/public/anh1/files/icon/app-hen-ho.png",
      title1: "App Hẹn Hò",
      title2: "Kết Nối Con Người",
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
                className="mt-4 mb-3"
                style={{ textAlign: "center", fontSize: "18px" }}
              >
                <i
                  className="fas fa-plus-square mr-2"
                  style={{ color: "red" }}
                ></i>
                Chi tiết
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
