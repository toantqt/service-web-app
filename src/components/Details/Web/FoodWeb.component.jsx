import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "../details.css";
export default function FoodWebComponent(props) {
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
                Sự phát triển của công nghệ đã mang đến nhiều tiện ích bất ngờ,
                phục vụ đời sống con người về nhiều mặt. Trong đó, lĩnh vực kinh
                doanh ăn uống đang ngày càng phát triển mạnh nhờ vào công nghệ
                số, nhiều doanh nghiệp đã sử dụng phương thức quảng bá sản phẩm
                trên các website ăn uống, mang về lợi nhuận vô cùng hấp dẫn cùng
                lượng khách hàng tương đối lớn. Là một công ty chuyên thiết kế
                website đầy uy tín và giàu kinh nghiệm, Design24 sẽ hỗ trợ bạn
                trong việc tìm kiếm giải pháp phù hợp, đẩy mạnh việc kinh doanh
                ẩm thực ngày càng vươn xa hơn.
              </span>
            </div>

            <div className="mt-3">
              <span className="details-title">
                Tại sao doanh nghiệp cần thiết kế website ăn uống?
              </span>
            </div>

            <div className="mt-2">
              <ul className="mt-2">
                <li>
                  Bắt kịp xu hướng kinh doanh của thời đại : khi doanh nghiệp
                  đầu tư thiết kế website nhà hàng, các địa điểm ăn uống sẽ được
                  phát triển mạnh mẽ hơn, bởi đây được xem là công cụ đắc lực,
                  giúp mở rộng họat động kinh doanh hiệu quả trên thị trường.
                </li>
                <li>
                  Truyền thông mạnh mẽ: tất cả các nội dung, tin tức, hình ảnh
                  về doanh nghiệp, sản phẩm hoặc dịch vụ đều được cập nhật
                  thường xuyên trên web, giúp khách hàng dễ dàng tìm hiểu.
                </li>
                <li>
                  Tiện lợi, nhanh gọn: các tính năng trên hệ thống của website
                  được thiết kế vô cùng tinh gọn, dễ sử dụng, giúp khách hàng dễ
                  dàng trải nghiệm, tham khảo về các sản phẩm/dịch vụ. Phương
                  thức thanh toán cũng vô cùng đơn giản và nhanh chóng, đạt được
                  sự hài lòng của khách hàng.
                </li>
                <li>
                  Giữ chân khách hàng hiệu quả: Với công cụ Chatbot luôn sẵn
                  sàng tư vấn, hỗ trợ khách hàng kịp thời. Bên cạnh đó, website
                  cũng thường xuyên cập nhật các chương trình khuyến mãi, hậu
                  mãi dành cho khách hàng.
                </li>
                <li>
                  Hệ thống website đa dạng: có thể sử dụng trên smartphone, máy
                  tính. Vì vậy, khách hàng có thể tìm kiếm thông tin mọi lúc mọi
                  nơi hoặc chia sẻ vào các kênh khác nhanh chóng.
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
