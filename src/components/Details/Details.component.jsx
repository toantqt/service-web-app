import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./details.css";
export default function DetailsComponent(props) {
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
                Sự phát triển của công nghệ mang đến cho việc kinh doanh cả
                những cơ hội và thách thức. Khi khách hàng thay đổi thói quen
                mua sắm, doanh nghiệp hay các chủ cửa hàng cũng cần có sự thay
                đổi trong chiến lược tiếp thị và chăm sóc khách hàng. App bán
                hàng/thương mại điện tử của chúng tôi sẽ giúp bạn gia tăng tỷ lệ
                chuyển đổi, tăng hiệu quả kinh doanh tối đa.{" "}
              </span>
            </div>
            <div className="mt-3">
              <span className="details-title">
                Giới thiệu ứng dụng bán hàng - thương mại điện tử{" "}
              </span>
            </div>
            <div className="mt-2">
              <span>
                Ứng dụng bán hàng của chúng tôi được phát triển để hỗ trợ 3 vai
                trò chính trong quy trình bán hàng bao gồm nhân viên bán hàng,
                người vận chuyển và khách hàng.{" "}
              </span>
            </div>
            <div>
              <ul>
                <li>
                  Nhân viên bán hàng: xem thông tin chính về tài khoản khách
                  hàng, xem trạng thái hàng tồn kho theo thời gian thực của tổ
                  chức và xác nhận đơn đặt hàng khi đang di chuyển, hỗ trợ bán
                  hàng trực tuyến và ngoại tuyến.
                </li>
                <li>
                  Tài xế: hỗ trợ tài xế xem tuyến đường, những khách hàng họ cần
                  phục vụ, xác nhận đơn hàng và nhận phiếu giao, tự động cập
                  nhật phiếu nhận hàng trong hệ thống.
                </li>
                <li>
                  Khách hàng: Khách hàng có thể cập nhật thông tin khuyến mãi,
                  tin tức…, đặt hàng từ danh mục sản phẩm hoàn chỉnh hoặc danh
                  sách yêu thích, xem và tải xuống hóa đơn, gửi khiếu nại hoặc
                  liên hệ trực tiếp doanh nghiệp qua email hoặc điện thoại.
                </li>
              </ul>
            </div>
            <div>
              <span>
                Đội ngũ nhà phát triển ứng dụng tại ZinPro luôn biết cách khai
                thác tối đa công nghệ di động, cam kết tạo ra các ứng dụng di
                động đột phá để thúc đẩy hoạt động kinh doanh của bạn phát triển{" "}
              </span>
            </div>
            <div className="mt-3">
              <span className="details-title">
                Lợi ích khi sử dụng app bán hàng
              </span>
            </div>
            <div className="mt-2">
              <span>
                Khách hàng ngày nay có xu hướng sử dụng thiết bị di động nhiều
                hơn máy tính. Điều này mở ra cho các doanh nghiệp hay các công
                ty khởi nghiệp hướng để phát triển. Đó cũng là cách mà ứng dụng
                di động trở thành một phần không thể thiếu trong cuộc sống hiện
                đại.{" "}
              </span>
            </div>
            <div>
              <span>
                Dưới đây là những lợi ích cụ thể khi sử dụng app bán hàng/thương
                mại điện tử của ZinPro:
              </span>
            </div>
            <div>
              <ul>
                <li>Dễ sử dụng</li>
                <li>Thương hiệu công ty riêng</li>
                <li>Tăng độ tin cậy với khách hàng</li>
                <li>Dễ tích hợp</li>
                <li>Giảm thiểu rủi ro </li>
                <li>Truyền đạt thông tin nhất quán với khách hàng</li>
                <li>Tăng độ chính xác của khoảng không quảng cáo</li>
                <li>Tính bền vững-không cần thủ tục giấy tờ</li>
                <li>Thích hợp cho hệ thống iOS và Android</li>
                <li>Các tính năng phong phú </li>
                <li>Tiết kiệm thời gian và tiền bạc </li>
                <li>
                  Cung cấp thời gian phản hồi nhanh chóng cho khách hàng của bạn
                </li>
                <li>Thanh khoản nhanh</li>
                <li>Hỗ trợ đa ngôn ngữ</li>
              </ul>
            </div>
            <div>
              <span>
                Tầm quan trọng của ứng dụng di bán hàng càng lớn, gần như không
                có giới hạn. Tất cả các tính năng hữu ích của trang web có thể
                được chuyển sang thiết bị di động, ví dụ: trang web của công ty,
                cửa hàng hoặc tổ chức khác của bạn. Khách hàng có thể tiếp cận
                dịch vụ mọi lúc, mọi nơi.{" "}
              </span>
            </div>
            <div className="mt-3">
              <span>
                Nếu bạn cần Thiết kế app mobile riêng để phục vụ hoạt động kinh
                doanh hãy liên hệ với chúng tôi qua Hotline: 0835-299-922 để
                được tư vấn các gói phù hợp nhất. Đội ngũ chuyên gia tài năng
                của ZinPro cam kết sẽ mang đến cho bạn một sản phẩm chất lượng.
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
