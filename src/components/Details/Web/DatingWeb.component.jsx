import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "../details.css";
export default function DatingWebComponent(props) {
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
                Thời đại công nghệ phát triển, tư duy con người cũng trở nên
                hiện đại, do đó xu hướng kết bạn, hẹn hò qua Internet đã được dễ
                dàng hơn. Chẳng cần phải đến tay “ông tơ – bà nguyệt” mới có thể
                tìm được nửa kia của mình, mà giờ đây chỉ cần một vài thao tác
                đơn giản truy cập vào các trang web hẹn hò, bạn đã có thể tìm
                được người đúng như mong đợi.
              </span>
            </div>

            <div className="mt-3">
              <span className="details-title">
                Giới thiệu về dịch vụ thiết kế Website hẹn hò
              </span>
            </div>
            <div>
              <span className="introduce ">
                Thiết kế website hẹn hò, kết bạn trực tuyến được xem là một
                trang mạng xã hội thu nhỏ. Trong đó, người tham gia thông qua
                tài khoản cá nhân, có thể tìm hiểu, làm quen, kết bạn thậm chí
                là đi đến các cuộc gặp gỡ ngoài đời với người bạn tương thích
                của mình.
              </span>
            </div>
            <div className="mt-2">
              <span className="introduce ">
                Thiết kế website hẹn hò được xem như là một sợi dây kết nối, là
                nơi thu thập toàn bộ các hồ sơ người dùng và các thông tin cơ
                bản, đảm bảo tính xác thực của người dùng và giúp các cuộc gặp
                gỡ trên mạng đáng tin cậy, an toàn hơn.
              </span>
            </div>

            <div className="mt-3">
              <span className="details-title">
                Lợi ích của dịch vụ thiết kế Website hẹn hò
              </span>
            </div>

            <div className="mt-2">
              <ul className="mt-2">
                <li>
                  Kết nối thuận tiện: website này được lập ra nhằm hỗ trợ các
                  bạn trẻ không có quá nhiều thời gian hoặc tâm lí e dè có thể
                  dễ dàng kết nối, làm quen và trò chuyện với nhiều người, dựa
                  theo sự tương thích của cá nhân mà có thể tìm được đối tượng
                  phù hợp.
                </li>
                <li>
                  Tính năng đa dạng: website hẹn hò cung cấp nhiều tính năng vô
                  cùng hấp dẫn cho người dùng như: nhắn tin, gọi điện, video
                  call…hoàn toàn miễn phí, giúp người dùng có những phút giây
                  trải nghiệm đầy thú vị.
                </li>
                <li>
                  Tăng tính cạnh tranh: thiết kế website hẹn hò giúp doanh
                  nghiệp nâng tầm thương hiệu, tăng khả năng cạnh tranh so với
                  các đối thủ khác. Với giao diện bắt mắt và khả năng cập nhật
                  thông tin nhanh chóng, website hẹn hò còn giúp thu hút và giữ
                  chân khách hàng.
                </li>
              </ul>
            </div>
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
