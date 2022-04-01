import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "../details.css";
export default function FinanceWebComponent(props) {
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
                Bạn kinh doanh trong lĩnh vực tài chính, chứng khoán mà vẫn đang
                loay hoay không biết làm cách nào để đạt hiệu quả và được nhiều
                khách hàng biết đến. Đừng lo, chúng tôi sẽ hỗ trợ bạn thiết kế
                một Website tài chính vô cùng ấn tượng, đem đến những giải pháp
                tốt nhất, giúp doanh nghiệp của bạn tạo ra thật nhiều lợi nhuận.
              </span>
            </div>
            <div className="mt-3">
              <span className="details-title">
                Giới thiệu về dịch vụ thiết kế Website tài chính
              </span>
            </div>
            <div>
              <span className="introduce">
                Trong thời đại công nghệ số, thiết kế website tài chính là điều
                rất cần thiết, bởi những phương thức kinh doanh online đã dần
                thế chỗ cho phương thức kinh truyền thống, chúng ta không thể cứ
                “đi từng ngõ, gõ từng nhà” để tư vấn sản phẩm/dịch vụ, mà giờ
                đây, chỉ cần có thiết bị thông minh kết nối với Internet, doanh
                nghiệp đã có thể dễ dàng tư vấn tài chính với hàng chục, hàng
                trăm khách hàng.
              </span>
            </div>
            <div className="mt-2">
              <span className="introduce">
                Thiết kế website tài chính là nghiên cứu, xây dựng và phát triển
                một website chuyên nghiệp, chuẩn SEO cho các đơn vị cung cấp
                dịch vụ tư vấn tài chính, kế toán, chứng khoán…
              </span>
            </div>

            <div className="mt-3">
              <span className="details-title">
                Lợi ích khi thiết kế Website tài chính
              </span>
            </div>
            <div className="mt-2">
              <ul className="mt-2">
                <li>
                  Tiếp cận khách hàng dễ dàng: Khi doanh nghiệp sở hữu một thiết
                  kế website tài chính, sẽ nhanh chóng kết nối với khách hàng và
                  mức độ phủ sóng tương đối rộng. Chính vì điều này, đã giúp
                  doanh nghiệp mang về một lượng lớn khách hàng.
                </li>
                <li>
                  Dễ kiểm sóat họat động kinh doanh: Website có thể đo lường
                  hiệu quả kinh doanh của doanh nghiệp thông qua chức năng thống
                  kê doanh thu, lượt truy cập, số lượng đơn hàng và thông tin
                  tài chính nào đang được quan tâm nhiều nhất.
                </li>
                <li>
                  Tính bảo mật cao: Website tài chính luôn đặt sự an toàn, bảo
                  mật thông tin của khách hàng lên hàng đầu. Để chức năng này
                  họat động hiệu quả, công ty thiết kế cần phải áp dụng những
                  công nghệ bảo mật hiện đại nhất, tránh sự xâm nhập của các
                  hacker.
                </li>
                <li>
                  Tiết kiệm chi phí: So với các cách quảng cáo truyền thống thì
                  các họat động kinh doanh trên website đã được giảm thiểu chi
                  phí quảng cáo, truyền thông một cách tối đa nhưng vẫn mang lại
                  những hiệu quả nhất định.
                </li>
                <li>
                  Cập nhật thông tin nhanh chóng: Việc trao đổi, mua bán, cung
                  cấp thông tin về các sản phẩm/dịch vụ được thông báo trên
                  website vô cùng nhanh chóng và tiện lợi. Đồng thời, khách hàng
                  và đối tác đều có thể dễ dàng cập nhật thông tin chính xác
                  nhất về những biến động trên thị trường tài chính.
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
