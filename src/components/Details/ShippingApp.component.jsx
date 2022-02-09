import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./details.css";
export default function ShippingAppComponent(props) {
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
                Ngày nay, nhu cầu mua sắm và bán hàng online ngày càng phổ biến
                và tăng cao. Do đó, dịch vụ vận chuyển hàng hóa cũng hết sức cần
                thiết trong việc hỗ trợ các doanh nghiệp mang hàng hóa đến tận
                tay người tiêu dùng. Vì vậy, thiết kế App vận chuyển cũng góp
                phần hỗ trợ không ít trong việc vận hành và quản lí sản phẩm.
              </span>
            </div>
            <div>
              <div className="mt-3">
                <span className="details-title">
                  Tìm hiểu về App vận chuyển
                </span>
              </div>
              <div className="mt-3">
                <span className="introduce">
                  Ứng dụng quản lý vận chuyển được thiết kế và xây dựng dựa trên
                  các đặc trưng của ngành vận tải, giúp doanh nghiệp quản lý và
                  theo dõi các hoạt động kinh doanh. Đồng thời, trong thời buổi
                  nhu cầu giao thương hàng hoá trong nước và quốc tế ngày càng
                  tăng mạnh, đòi hỏi công nghệ thay thế cho các hoạt động quản
                  lý thủ công. App mobile logistic đã ra đời để giải quyết các
                  bài toán trên.
                </span>
              </div>
              <div className="mt-2">
                <span className="introduce">
                  App vận chuyển được thiết kế chuyên sâu dành riêng cho ngành
                  vận chuyển, phù hợp với các thiết bị thông minh trên hệ điều
                  hành IOS, Android…
                </span>
              </div>
            </div>
            <div className="mt-3">
              <span className="details-title">
                Lợi ích khi thiết kế App vận chuyển
              </span>
            </div>
            <div className="mt-2">
              <ul>
                <li>
                  Hạn chế rủi ro: App vận chuyển hỗ trợ bạn trong việc thống kê
                  và quản lí hàng hóa một cách sát xao, tránh thất thóat hàng
                  hóa không mong muốn.
                </li>
                <li>
                  Tiết kiệm thời gian: Ứng dụng vận chuyển hàng hóa tạo nên một
                  chuỗi cung ứng tự động, trình tự công việc cũng được sắp xếp
                  theo một trật tự nhất định và logic, giúp công việc họat động
                  thuận lợi và nhanh chóng.
                </li>
                <li>
                  Tiết kiệm chi phí: chiến lược marketing vẫn được đẩy mạnh trên
                  App mobile logistic, tuy nhiên đã giảm thiểu được tối đa các
                  chi phí cho các phương tiện truyền thông thông tin khác như:
                  báo in, đài truyền hình, các kênh marketing khác.
                </li>
                <li>
                  Thu hút khách hàng: ngoài việc giúp khách hàng trải nghiệm các
                  dịch vụ, App mobile còn tạo cầu nối đến với thị trường khách
                  hàng muốn kinh doanh vận chuyển số lượng lớn, có hệ thống quản
                  trị chuyên nghiệp, dễ sử dụng.
                </li>
                <li>
                  Thúc đẩy doanh số: App Mobile ăn uống là công cụ hữu hiệu giúp
                  doanh nghiệp đẩy mạnh doanh thu vượt trội khi mở đầu cho hình
                  thức kinh doanh online.
                </li>
                <li>
                  Cập nhật tin tức vận chuyển tức thời tới các đối tượng quan
                  tâm giúp hệ thống vận hành nhanh chóng.
                </li>
              </ul>
            </div>
            <div className="mt-3">
              <span className="details-title">
                Thiết kế App vận chuyển tại Design24
              </span>
            </div>
            <div className="mt-3">
              <span className="introduce">
                Đội ngũ nhân viên giàu kinh nghiệm, khả năng sáng tạo linh họat,
                luôn nắm bắt kịp thời những xu hướng mới nhất trên thị trường,
                Design24 cam kết sẽ giúp bạn sở hữu một App Mobile Logistic vô
                cùng ấn tượng và chuyên nghiệp, khẳng định được vị thế và thương
                hiệu của bạn trong mắt khách hàng.
              </span>
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
                        Hotline 0835-299-922
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
