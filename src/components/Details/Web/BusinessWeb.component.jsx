import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "../details.css";
export default function BusinessWebComponent(props) {
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
                Thời đại công nghệ số ngày càng phát triển mạnh mẽ, mỗi doanh
                nghiệp nên sở hữu riêng cho mình một website là điều rất cần
                thiết. Thông qua website, doanh nghiệp có thể giới thiệu đầy đủ,
                chi tiết về thông tin, dịch vụ cũng như hình ảnh của công ty đến
                khách hàng một cách ấn tượng và đầy thuyết phục.
              </span>
            </div>
            <div className="mt-3">
              <span className="details-title">
                Giới thiệu về Website doanh nghiệp
              </span>
            </div>
            <div>
              <span className="introduce">
                Website là kênh chính thống được lập ra nhằm mô tả chi tiết các
                thông tin về lĩnh vực họat động của doanh nghiệp, để các đối
                tác, khách hàng có thể thông qua đó mà đánh giá và xem xét hợp
                tác.
              </span>
            </div>
            <div className="mt-2">
              <span className="introduce">
                Website còn giúp doanh nghiệp nâng tầm giá trị thương hiệu, mức
                độ uy tín, tầm nhìn và cả sứ mệnh mà doanh nghiệp đang muốn theo
                đuổi.
              </span>
            </div>

            <div className="mt-3">
              <span className="details-title">
                Lợi ích khi thiết kế Website doanh nghiệp
              </span>
            </div>
            <div className="mt-2">
              <ul className="mt-2">
                <li>
                  Tiếp cận khách hàng nhanh chóng: khách hàng sẽ dễ dàng tìm
                  kiếm thông tin về sản phẩm/dịch vụ doanh nghiệp của bạn thông
                  qua website
                </li>
                <li>
                  Kết nối dễ dàng: với tính năng Support online hoặc Livechat,
                  website có thể hỗ trợ khách hàng trong việc giải đáp, tư vấn
                  sản phẩm/dịch vụ một cách kịp thời
                </li>
                <li>
                  Tăng tính cạnh tranh: Công cụ thống kê trên website có thể
                  giúp doanh nghiệp nắm bắt hành vi của khách hàng, để từ đó đưa
                  ra các chiến lược kinh doanh, cạnh tranh phù hợp và đạt hiệu
                  quả cao.
                </li>
                <li>
                  Tăng mức độ tin cậy: Một doanh nghiệp sở hữu riêng cho mình
                  một trang web sẽ thể hiện được tính chuyên nghiệp, đồng thời
                  tăng mức độ tin cậy, uy tín hơn khi khách hàng/đối tác có thể
                  dễ dàng tìm kiếm bạn trên Google.{" "}
                </li>
                <li>
                  Truyền thông hiệu quả: Website hỗ trợ trình bày các thông tin
                  cụ thể và chi tiết nhất cho các chiến dịch marketing. Bên cạnh
                  đó, website còn có thể kết nối với các ứng dụng khác như:
                  Google, Facebook…để đo lường hiệu quả và đưa ra các chính sách
                  tối ưu nhất cho việc kinh doanh, bán hàng.
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

            <div className="mt-2">
              <div className="mt-3">
                <span className="details-title">
                  Dịch vụ thiết kế Website doanh nghiệp tại Design24
                </span>
              </div>
              <ul className="mt-2">
                <li>
                  Khảo sát và tư vấn các nhu cầu của khách hàng về dịch vụ thiết
                  kế Website
                </li>
                <li>
                  Phác thảo ý tưởng và tiến hành thiết kế web theo yêu cầu của
                  khách hàng
                </li>
                <li>
                  Hỗ trợ upload sản phẩm test cho khách hàng tham khảo và duyệt
                  bản demo
                </li>
                <li>
                  Chỉnh sửa theo yêu cầu và hoàn thiện sản phẩm, thiết lập cấu
                  hình website chạy ổn định trên Internet.
                </li>
                <li>
                  Hướng dẫn khách hàng kết nối website với các trang thương mại
                  điện tử
                </li>
                <li>
                  Bàn giao website cho khách hàng sử dụng và bảo hành, bảo trì
                  sản phẩm.
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
