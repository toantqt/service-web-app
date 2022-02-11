import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "../details.css";
export default function MedicalWebComponent(props) {
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
                Y tế là lĩnh vực vô cùng quan trọng và cần thiết trong đời sống
                của con người. Do đó, nhằm cung cấp, bổ sung thêm những kiến
                thức bổ ích cũng như lựa chọ các dịch vụ khám chữa bệnh an toàn,
                phù hợp và đạt chất lượng, mỗi đơn vị y tế cần sở hữu riêng cho
                mình một Website y tế để cung cấp các thông tin hữu ích và giới
                thiệu đơn vị đến khách hàng.
              </span>
            </div>
            <div className="mt-3">
              <span className="details-title">
                Giới thiệu về dịch vụ thiết kế Website Y tế
              </span>
            </div>
            <div>
              <span className="introduce">
                Với tiêu chí “Sức khỏe là vàng”, Design24 luôn hướng tới mục
                tiêu tạo ra các website y tế có hiệu suất cao, phản ánh chân
                thực các lĩnh vực họat động của các cơ sở y tế, để khách hàng có
                thể an tâm hơn khi lựa chọn dịch vụ.
              </span>
            </div>
            <div className="mt-2">
              <span className="introduce">
                Website y tế được lập ra không chỉ để thu hút khách hàng, khẳng
                định sự chuyên nghiệp mà còn đưa ra những ưu điểm vượt trội, sự
                khác biệt về khả năng cung ứng dịch vụ, đội ngũ bác sĩ… của đơn
                vị mình so với các trung tâm, bệnh viện khác.
              </span>
            </div>

            <div className="mt-3">
              <span className="details-title">
                Lợi ích khi thiết kế Website y tế
              </span>
            </div>
            <div className="mt-2">
              <ul className="mt-2">
                <li>
                  Tăng thêm độ tin cậy: Một website y tế thể hiện được chất
                  lượng dịch vụ sẽ giúp đơn vị của bạn tạo được niềm tin, uy tín
                  và độ tin cậy nhất định trong lòng khách hàng. Điều này cũng
                  góp phần thúc đẩy doanh số bán hàng và quảng bá thương hiệu.
                </li>
                <li>
                  Truyền tải thông tin chính xác: thông qua website, khách hàng
                  dễ dàng tìm kiếm và nghiên cứu thông tin về chất lượng mà dịch
                  vụ mang đến.
                </li>
                <li>
                  Tăng tính cạnh tranh: sự khác biệt trong mô thức kinh doanh
                  khi sở hữu một trang web riêng, đã góp phần tạo nên sự khác
                  biệt về đơn vị của bạn so với các đối thủ cạnh tranh khác, thu
                  hút được một lượng lớn khách hàng tìm đến.
                </li>
                <li>
                  Tiết kiệm chi phí: So với các cách quảng cáo truyền thống thì
                  các họat động kinh doanh trên website đã được giảm thiểu chi
                  phí quảng cáo, truyền thông một cách tối đa nhưng vẫn mang lại
                  những hiệu quả nhất định.
                </li>
                <li>
                  Tiết kiệm chi phí: Website y tế giúp bạn tiết kiệm được một
                  khoản chi phí quảng cáo tương đối lớn so với cách thức quảng
                  cáo truyền thống thông qua báo chí, đài truyền hình…
                </li>
              </ul>
            </div>

            <div className="mt-2">
              <div className="mt-3">
                <span className="details-title">
                  Dịch vụ thiết kế Website doanh nghiệp tại Design24
                </span>
              </div>
              <ul className="mt-2">
                <li>Chất lượng Website đạt chuẩn, giao diện hiện đại</li>
                <li>Thời gian truy cập Website nhanh chóng</li>
                <li>
                  Hỗ trợ mọi lúc mọi nơi khi Website của khách hàng gặp lỗi.
                </li>
                <li>
                  Đội ngũ nhân viên giàu kinh nghiệm, chuyên môn giỏi sẽ đáp ứng
                  mọi yêu cầu làm web của công ty bạn. Đồng thời, hỗ trợ tư vấn
                  các gói dịch vụ website phù hợp với nhu cầu sử dụng và khả
                  năng tài chính.
                </li>
                <li>
                  Tư vấn Marketing Online cho để khách hàng có thể phát triển
                  Website nhanh nhất
                </li>
                <li>Hỗ trợ bảo trì thường xuyên.</li>
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
