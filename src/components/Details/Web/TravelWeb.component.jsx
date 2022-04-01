import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "../details.css";
export default function TravelWebComponent(props) {
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
                Ngày nay, mô hình kinh doanh trực tuyến đã không còn quá xa lạ
                đối với doanh nghiệp và cả người tiêu dùng. Xã hội phát triển,
                mức sống con người ngày một được cải thiện và nâng cao, kéo theo
                đó là nhu cầu giải trí, hưởng thụ của con người cũng dần tăng
                lên. Nắm bắt được nhu cầu thị trường, nhiều doanh nghiệp họat
                động về du lịch đã biết cách vận dụng công nghệ vào trong chiến
                thuật kinh doanh khi sở hữu một Website du lịch, không chỉ đáp
                ứng nhu cầu quảng bá thương hiệu, dịch vụ mà còn thể hiện được
                giá trị và đẳng cấp của doanh nghiệp.
              </span>
            </div>

            <div className="mt-3">
              <span className="details-title">
                Tầm quan trọng của thiết kế Website du lịch
              </span>
            </div>

            <div className="mt-2">
              <ul className="mt-2">
                <li>
                  Xây dựng hình ảnh thương hiệu chuyên nghiệp: tạo được ấn tượng
                  nhất định trong mắt khách hàng, thể hiện doanh nghiệp của bạn
                  làm việc một cách nghiêm túc, có đầu tư và đầy tính chuyên
                  nghiệp
                </li>
                <li>
                  Marketing hiệu quả: Là công cụ quảng cáo uy tín, giúp tiết
                  kiệm tối đa chi phí bởi thông qua website, doanh nghiệp có thể
                  cung cấp đầy đủ các thông tin liên quan đến dịch vụ của công
                  ty, nhất là các tour du lịch đang khai thác, triển khai để
                  khách hàng có thể tìm hiểu, dễ dàng lựa chọn hơn.
                </li>
                <li>
                  Tăng doanh thu vượt trội: hệ thống website trực tiếp tạo ra
                  đơn hàng, mang lại lợi nhuận cao cho doanh nghiệp. Với tính
                  năng họat động 24/7, website luôn cho phép khách hàng đặt vé
                  bất cứ lúc nào.Vì vậy, website còn giúp doanh nghiệp tăng tính
                  cạnh tranh so với các đối thủ khác.
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
                <li>
                  Thiết kế giao diện chuyên nghiệp: từ cấu trúc, bố cục đều phải
                  nhất quán, tiện ích và dễ sử dụng. Thiết kế theo phong cách
                  hiện đại, mang phong cách riêng của công ty bạn.
                </li>
                <li>
                  Hệ thống đa dạng: đặt phòng, đặt tour, quản lý, kế toán, tích
                  hợp cổng thanh toán trực tuyến.
                </li>
                <li>
                  Hỗ trợ mọi lúc mọi nơi khi Website của khách hàng gặp lỗi.
                </li>
                <li>
                  Tích hợp các tính năng về quảng bá website trên Internet: cho
                  phép tối ưu hóa quảng bá hình ảnh và dịch vụ của doanh nghiệp,
                  mở rộng thị trường khách hàng tiềm năng.
                </li>
                <li>
                  Tạo mục đánh giá tour trong thiết kế web du lịch: người dùng
                  có thể tin tưởng hơn về thương hiệu của bạn.
                </li>
                <li>
                  Tạo tính năng chia sẻ tour trên website qua email, các trang
                  mạng xã hội.
                </li>
                <li>
                  Tích hợp Google Map: Giúp khách có thể dễ dàng thấy được vị
                  trí thuận lợi.
                </li>
                <li>Khả năng mở rộng đa ngôn ngữ</li>
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
