import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./details.css";
export default function EducationAppComponent(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid>
      <div className="details-wrapper">
        <Grid container spacing={1}>
          <Grid item lg={8}>
            <div>
              <span className="introduce">
                Cuộc cách mạng 4.0 đã dần giúp con người ngày càng linh họat và
                ứng biến trong mọi tình huống. Cụ thể, trong tình hình dịch bệnh
                vừa qua, ngành giáo dục đã thực sự phát triển sôi nổi khi biết
                cách vận dụng các App giáo dục vào trong quá trình giảng dạy,
                giám sát và quản lí giáo viên, học sinh từ xa.
              </span>
            </div>
            <div className="mt-2">
              <span className="introduce">
                App giáo dục (E – learning) là ứng dụng học tập mạnh mẽ trên nền
                tảng di động giúp nhà trường quản lí đào tạo, kiểm tra giáo
                viên, học sinh, sinh viên ở mọi lúc mọi nơi một cách khoa học và
                đạt hiệu quả cao, chỉ cần kết nối Internet là đã có thể tham gia
                và lớp học và tương tác cùng giáo viên.
              </span>
            </div>
            <div className="mt-3">
              <span className="details-title">
                Những lợi ích khi thiết kế App giáo dục
              </span>
            </div>

            <ul className="mt-2">
              <li>
                Tương tác cao: Nhờ có App giáo dục, mà khoảng cách tương tác
                giữa giáo viên - phụ huynh; giáo viên – học sinh đã dần thu hẹp,
                gắn kết hơn. Sự tương tác nhiều và nhanh chóng đã giúp cho nhà
                trường có thể thông báo kịp thời về tình hình học tập và đưa ra
                hướng giải quyết hiệu quả hơn.
              </li>
              <li>
                Khẳng định thương hiệu: Khi một đơn vị giáo dục sử dụng ứng dụng
                di động vào trong giáo dục, sẽ góp phần đẩy mạnh công tác quảng
                bá, giới thiệu hình ảnh, các dịch vụ đến được nhiều người hơn.
                Đồng thời, tiết kiệm được chi phí quảng cáo tối đa.
              </li>
              <li>
                Cập nhật thông tin đầy đủ: App giáo dục luôn cập nhật những tin
                tức, kiến thức mới nhất vào trong kho tài liệu của trường, giúp
                học viên có thể dễ dàng tìm kiếm thông tin khi cần một cách
                nhanh chóng.
              </li>
              <li>
                Linh động: Học viên có thể tham gia vào lớp học ở mọi lúc mọi
                nơi mà không gò bó về mặt thời gian, không gian.
              </li>
              <li>
                Giao diện đơn giản: sử dụng được cả hai hệ điều hành IOS và
                Android.
              </li>
              <li>
                Tăng tính kết nối: phụ huynh có thể dễ dàng nắm bắt và trao đổi
                với nhà trường về tình hình học tập của con em.
              </li>
            </ul>
          </Grid>
          <Grid item lg={4}>
            <div className="contact-frame">
              <div className="contact-head">
                <a>LIÊN HỆ</a>
              </div>
              <div className="mt-4">
                <Grid container spacing={3}>
                  <Grid item lg={3}>
                    <img
                      src="https://zinpro.vn/public/anh1/images/icon/icon-thiet-ke-app-ban-hang.png"
                      alt=""
                    />
                  </Grid>
                  <Grid item lg={9}>
                    <div>
                      <span style={{ fontSize: "23px", fontWeight: 500 }}>
                        Hỗ Trợ 24/7
                      </span>
                    </div>
                    <div className="mt-2">
                      <span style={{ fontSize: "16px" }}>
                        Vui lòng liên hệ trực tiếp qua điện thoại hoặc chat box
                        để được tư vấn chi tiết hơn !
                      </span>
                    </div>
                    <div className="mt-2">
                      <span
                        style={{ color: "rgb(190,30,45)", fontWeight: 500 }}
                      >
                        Hotline 0784.888.009 - 0704.888.009
                      </span>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
