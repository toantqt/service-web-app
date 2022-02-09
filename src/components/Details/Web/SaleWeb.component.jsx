import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "../details.css";
export default function SaleWebComponent(props) {
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
                Sự phát triển của nền công nghệ 4.0 ngày càng bùng nổ, website
                được xem như là gương mặt đại diện của một doanh nghiệp trên nền
                tảng Internet. Vì vậy, việc thiết kế website bán hàng là một
                điều rất cần thiết bởi nó không chỉ là phương tiện để bán hàng
                mà còn hỗ trợ doanh nghiệp trong việc nâng tầm thương hiệu, thể
                hiện được tính chuyên nghiệp trên thị trường.
              </span>
            </div>
            <div className="mt-3">
              <span className="details-title">
                Vì sao doanh nghiệp cần thiết kế Website bán hàng?
              </span>
            </div>
            <div className="mt-2">
              <div className="mt-3">
                <span className="details-sub-title">
                  Công nghệ ngày càng phát triển
                </span>
              </div>
              <span>
                Tận dụng thời đại công nghệ ngày càng phát triển và được sử dụng
                phổ biến, nhiều doanh nghiệp đã thành công khi biết cách áp dụng
                khoa học công nghệ vào trong kinh doanh. Cụ thể là, thiết kế
                Website bán hàng online nhằm kích cầu nhu cầu mua sắm hàng hóa
                của con người. Do đó, nếu không biết cách đầu tư xây dựng
                website bán hàng ngay từ đầu, sẽ khiến bạn mất đi rất nhiều cơ
                hội cũng như bỏ lỡ lượng khách hàng tiềm năng, giảm doanh thu...
              </span>
            </div>
            <div>
              <div className="mt-3">
                <span className="details-sub-title">Bán hàng hiệu quả</span>
              </div>
              <span>
                Website bán hàng trực tuyến giúp doanh nghiệp gia tăng doanh số
                bán hàng một cách vượt trội, bởi tất cả các khâu bán hàng (mô
                tả, hình ảnh, sản phẩm, giá cả…) đều được gói gọn trong một
                trang web. Do đó, khách hàng sẽ dễ dàng tham khảo, tìm hiểu cũng
                như lựa chọn sản phẩm một cách kĩ lưỡng hơn.
              </span>
            </div>
            <div>
              <div className="mt-3">
                <span className="details-sub-title">Đẩy mạnh Marketing</span>
              </div>
              <div>
                <span>
                  Thiết kế Website bán hàng giúp doanh nghiệp quảng bá hình ảnh
                  một cách tốt nhất đến với khách hàng. Đồng thời, khi sở hữu
                  một website bán hàng, bạn còn tạo được ấn tượng, niềm tin,
                  tính chuyên nghiệp và uy tín của doanh nghiệp đó.
                </span>
              </div>
              <div className="mt-2">
                <span>
                  Có thể nói, website bán hàng là kênh marketing vô cùng hiệu
                  quả với khả năng triển khai đồng bộ các giải pháp Marketing
                  online với chi phí tiết kiệm, bao gồm cả SEO (tối ưu hóa công
                  cụ tìm kiếm), Google Adwords (quảng cáo Google) hoặc
                  Remarketing (lưu thông tin khách hàng để tiếp thị lại).
                </span>
              </div>
            </div>

            <div>
              <div className="mt-3">
                <span className="details-sub-title">Tương tác nhanh</span>
              </div>
              <span>
                Website bán hàng là kênh mang lại hiệu quả tương tác cao nhất
                với khách hàng, bởi khả năng tiếp nhận và phản hồi thông tin rất
                nhanh chóng, thông qua phương thức chat trực tuyến hoặc các hình
                hình thức liên hệ trực tuyến khác. Bên cạnh đó, khách hàng cũng
                có thể đưa ra những đánh giá, phản hồi về chất lượng sản phẩm
                một cách công tâm nhất ngay trên website của cửa hàng, doanh
                nghiệp.
              </span>
            </div>
            <div>
              <div className="mt-3">
                <span className="details-sub-title">Tạo dựng thương hiệu</span>
              </div>
              <span>
                Sở hữu giao diện thiết kế website bán hàng đẹp mắt sẽ dễ dàng
                tạo được dấu ấn với người tiêu dùng, khiến họ dễ dàng ưu tiên
                lựa chọn sản phẩm và thương hiệu của bạn thay vì lựa chọn ở
                doanh nghiệp khác.
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
