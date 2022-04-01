import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./details.css";
export default function TravelAppComponent(props) {
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
                Cuộc cách mạng công nghệ 4.0 đã thay đổi hành vi của con người,
                minh chứng là mọi hoạt động mua bán, cập nhật thông tin và dịch
                vụ đều được tối ưu hóa trên nền tảng công nghệ internet hay còn
                gọi là số hóa hành vi trong cuộc sống. Đặc biệt, sự phát triển
                mạnh mẽ của Smartphone vào các hoạt động hàng ngày, đã tiếp nối
                cho nhu cầu quảng cáo, quảng bá trực tuyến của các doanh nghiệp
                ngày càng được mở rộng.
              </span>
            </div>
            <div className="mt-2">
              <span className="introduce">
                Du lịch là một trong số các ngành có sự phát triển vượt bậc kể
                từ khi biết cách vận dụng công nghệ vào trong các họat động kinh
                doanh, họ đã cho ra đời loại hình ứng dụng di động du lịch giúp
                tiếp thị và tiếp cận được nhiều khách hàng hơn.
              </span>
            </div>

            <div>
              <div className="mt-3">
                <span className="details-title">Giới thiệu về App du lịch</span>
              </div>
              <div className="mt-3">
                <span className="introduce">
                  App du lịch là ứng dụng cho phép người dùng được lựa chọn. Chỉ
                  với 15 phút, bạn đã có thể đặt ngay một chuyến du lịch vô cùng
                  ưng ý ngay trên chiếc điện thoại của mình, mà không cần di
                  chuyển đến bất kì đâu để chờ mua vé. Với giao diện thiết kế
                  đẹp mắt, ấn tượng, App du lịch còn chứa đầy đủ các danh mục
                  như tour du lịch trong nước và cả tour du lịch nước ngoài,
                  giúp khách hàng dễ dàng lựa chọn theo nhu cầu, sở thích cá
                  nhân.
                </span>
              </div>
              <div className="mt-2">
                <span className="introduce">
                  App du lịch còn cung cấp cho khách hàng những cảm nhận vô cùng
                  chân thực về các sản phẩm/dịch vụ của doanh nghiệp, đáp ứng
                  nhu cầu khám phá và trải nghiệm không gian đẳng cấp, ẩm thực
                  phong phú…cho quý khách hàng.
                </span>
              </div>
            </div>
            <div className="mt-3">
              <span className="details-title">
                App du lịch mang đến cho bạn lợi ích gì?
              </span>
            </div>
            <div className="mt-2">
              <div className="mt-3">
                <span className="details-sub-title">Về doanh nghiệp:</span>
              </div>
              <ul className="mt-2">
                <li>
                  Thu hút khách hàng: thiết kế giao diện cho ứng dụng di động du
                  lịch trông bắt mắt cũng là cách tạo được ấn tượng nhất định
                  trong mắt khách hàng về thương hiệu của bạn. Bên cạnh đó, với
                  tính năng gợi ý về danh sách nơi lưu trú, địa điểm ăn uống,
                  hướng dẫn trải nghiệm…sẽ góp phần đáp ứng nhu cầu cần thiết
                  của khách hàng khi du lịch.
                </li>
                <li>
                   Marketing hiệu quả: quảng bá trên ứng dụng di động du lịch
                  là một chiến lược vô cùng hiệu quả cho các doanh nghiệp, bởi
                  nhu cầu sử dụng Smartphone và đặt vé online đang ngày càng
                  được sử dụng phổ biến và mở rộng. Đồng thời, có thể marketing
                  ở mọi lúc mọi nơi mà chi phí lại tiết kiệm tối ưu.
                </li>
                <li>
                  Cập nhật thông tin đầy đủ: App giáo dục luôn cập nhật những
                  tin tức, kiến thức mới nhất vào trong kho tài liệu của trường,
                  giúp học viên có thể dễ dàng tìm kiếm thông tin khi cần một
                  cách nhanh chóng.
                </li>
                <li>
                  Truyền tải thông tin nhanh chóng: thông qua App du lịch, khách
                  hàng sẽ cảm nhận chân thực nhất về các dịch vụ, địa điểm du
                  lịch được doanh nghiệp thể hiện thông qua hình ảnh, video.
                </li>
              </ul>
            </div>

            <div className="mt-2">
              <div className="mt-3">
                <span className="details-sub-title">Về khách hàng:</span>
              </div>
              <ul className="mt-2">
                <li>
                  Tiết kiệm thời gian: Bạn có thể truy cập vào ứng dụng di động
                  du lịch ở mọi lúc mọi nơi, vô cùng thuận tiện, không phải mất
                  quá nhiều thời gian để hoàn thành các thủ tục giấy tờ cho một
                  chuyến đi.
                </li>
                <li>
                  Thanh toán đơn giản: Trên ứng dụng di động du lịch còn có tính
                  năng thanh toán trực tuyến, hỗ trợ khách hàng tránh được rủi
                  ro nếu không có quá nhiều tiền mặt.
                </li>
                <li>
                  Trải nghiệm hấp dẫn: Khách hàng có thể dễ dàng lên kế hoạch
                  hay tạo lịch trình cho chuyến đi thông qua tính năng: gợi ý
                  địa điểm du lịch, phương tiện di chuyển…ngay trên ứng dụng.
                </li>
                <li>
                  Tiết kiệm chi phí: App du lịch còn cung cấp thông tin chi tiết
                  về các homestay, nhà nghỉ, khách sạn…với giá cả phải chăng và
                  chất lượng, để khách hàng tự do lựa chọn.
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
