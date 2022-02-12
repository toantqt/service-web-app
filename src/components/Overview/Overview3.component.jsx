import React from "react";
import Grid from "@material-ui/core/Grid";
import "./overview.css";

export default function Overview3Component(props) {
  const data = [
    {
      image:
        "https://res.cloudinary.com/serviced24/image/upload/v1644635098/service-web-app/icon/nho_gon_p6xyts.jpg",
      title: "KÍCH THƯỚC NHỎ",
      content:
        "Tối ưu kích thước ứng dụng giúp cài đặt ứng dụng nhanh chóng và ít bị xóa hơn.",
    },
    {
      image:
        "https://res.cloudinary.com/serviced24/image/upload/v1644635098/service-web-app/icon/tich_diem_ch2ybx.jpg",
      title: "TÍCH ĐIỂM THÀNH VIÊN",
      content:
        "Tất cả những thông tin về điểm thưởng, thăng hạng thành viên và lịch sử",
    },
    {
      image:
        "https://res.cloudinary.com/serviced24/image/upload/v1644635098/service-web-app/icon/doi_thuog_wgfdko.jpg",
      title: "ĐỔI THƯỞNG",
      content: "Thống kê danh sách phần thưởng, khách hàng nhận thưởng",
    },
    {
      image:
        "https://res.cloudinary.com/serviced24/image/upload/v1644635098/service-web-app/icon/bao_cao_y0jfdo.jpg",
      title: "BÁO CÁO",
      content:
        "Báo cáo các số liệu liên quan đến khách hàng và ưu đãi theo tiêu chí.",
    },
    {
      image:
        "https://res.cloudinary.com/serviced24/image/upload/v1644635098/service-web-app/icon/marketing_gtvrrh.jpg",
      title: "MARKETING",
      content:
        "Nền tảng duy nhất triển khai hệ thống đồng bộ trên ứng dụng và website",
    },
    {
      image:
        "https://res.cloudinary.com/serviced24/image/upload/v1644635098/service-web-app/icon/ecom_fseiik.jpg",
      title: "E-COMMERCE",
      content:
        "Cho phép khách hàng thực hiện các thao tác mua sản phẩm/ dịch vụ",
    },
    {
      image:
        "https://res.cloudinary.com/serviced24/image/upload/v1644635098/service-web-app/icon/danh_gia_aktqkk.jpg",
      title: "ĐÁNH GIÁ",
      content:
        "Cho phép khánh hàng đưa ra đánh giá về chất lượng sản phẩm, dịch vụ",
    },
    {
      image:
        "https://res.cloudinary.com/serviced24/image/upload/v1644635098/service-web-app/icon/noi_ding_jshn49.jpg",
      title: "NỘI DUNG",
      content: "Quản lý nội mọi nội dung mà doanh nghiệp muốn thông tin",
    },
  ];

  const lists = data.map((e, index) => {
    return (
      <Grid item lg={3}>
        <div style={{ textAlign: "center" }}>
          <img src={e.image} alt="" />
        </div>
        <div style={{ textAlign: "center" }} className="mt-2 item-title">
          <span>{e.title}</span>
        </div>
        <div className="mt-2">
          <span>{e.content}</span>
        </div>
      </Grid>
    );
  });
  return (
    <Grid>
      <div className="overview3-wrapper">
        <div style={{ width: "70%", margin: "0 auto", textAlign: "center" }}>
          <span className="overview2-title">
            Những Tính Năng Tốt Nhất Mà DESIGN24 Mang Lại Cho Doanh Nghiệp Của
            Bạn
          </span>
        </div>
        <div style={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
          <span>
            Chúng tôi tạo ra sự khác biệt bằng cách tập trung làm tròn những
            nhiệm vụ có tính ứng dụng cao, thực tiễn và chuyên biệt. Mọi công
            trình nghiên cứu và phát triển công nghệ của chúng tôi đều tập trung
            tối đa cho lĩnh vực Bán hàng và Thương Mại Điện Tử.
          </span>
        </div>
        <div style={{ marginTop: "80px" }}>
          <Grid container spacing={5}>
            {lists}
          </Grid>
        </div>
      </div>
    </Grid>
  );
}
