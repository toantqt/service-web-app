import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./details.css";
export default function BusinessAppComponent(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid>
      <div className="details-wrapper">
        <Grid container spacing={1}>
          <Grid item lg={8}>
            <div className="mt-3">
              <span className="details-title"> THỜI ĐẠI CÔNG NGHỆ MỚI</span>
            </div>
            <div>
              <span className="introduce">
                Với sự phát triển mạnh mẽ của thời đại công nghệ 4.0, Smartphone
                đã không còn quá xa lạ đối với người tiêu dùng và là công cụ hữu
                ích giúp con người họat động trên nhiều lĩnh vực. Để khai thác
                và sử dụng triệt để các tiềm năng của thiết bị này, nhiều doanh
                nghiệp đã lựa chọn cách sáng tạo và sở hữu một Appt Mobile
                chuyên nghiệp cho chính mình, nhằm quảng bá các sản phẩm, dịch
                vụ và đem đến nhiều trải nghiệm phong phú, tiện lợi cho người
                tiêu dùng. Chỉ cần ngồi tại nhà, khách hàng đều có thể thoải
                mái, tự do lựa chọn các sản phẩm mình yêu thích thông qua hàng
                lọat ứng dụng di động của các doanh nghiệp kinh doanh ở mọi lĩnh
                vực, ngành hàng như: thời trang, ăn uống, vé máy bay, phòng
                khách sạn…
              </span>
            </div>
            <div className="mt-3">
              <span className="details-title">
                LỢI ÍCH CỦA VIỆC THIẾT KẾ APP DOANH NGHIỆP
              </span>
            </div>
            <div className="mt-2">
              <div className="mt-3">
                <span className="details-sub-title">Với doanh nghiệp:</span>
              </div>
              <ul className="mt-2">
                <li>Quảng bá và nâng cao giá trị thương hiệu</li>
                <li>
                  Tìm kiếm khách hàng tiềm năng và tạo dựng lòng tin: Khi sản
                  phẩm của bạn được quảng cáo trên App Mobile một cách ấn tượng
                  và thu hút, sẽ góp phần trong việc hình thành phong cách,
                  thương hiệu trong mắt khách hàng, giúp họ dễ dàng lưu tâm và
                  chú ý hơn.
                </li>
                <li>
                  Tạo điều kiện thuận lợi để khách hàng dễ dàng tiếp cận sản
                  phẩm/dịch vụ: hỗ trợ trong khách hàng trong quá trình tìm kiếm
                  và thu thập thông tin về sản phẩm, dịch vụ một cách chính xác
                  và tối ưu nhất.
                </li>
                <li>Hỗ trợ quản lý thu – chi, giúp giảm thiểu thất thoát</li>
                <li>
                  Thúc đẩy doanh số bán hàng, gia tăng lợi nhuận: nhờ vào các
                  chức năng của App, doanh nghiệp có thể cải thiện sự hài lòng
                  của khách hàng. Từ đó, làm tiền đề cho việc thúc đẩy doanh số
                  bán hàng gia tăng vượt trội.
                </li>
                <li>
                  Hoạt động của doanh nghiệp được diễn ra liên tục, không bị trì
                  trệ.
                </li>
                <li>Quản lý hàng hóa, dịch vụ không giới hạn.</li>
                <li>
                  Theo dõi nhiều kho hàng ở mọi lúc – mọi nơi vào bất cứ thời
                  điểm nào.
                </li>
                <li>
                  Dễ dàng điều chuyển hàng hóa và nhận được thông báo cập nhật
                  kho hàng.
                </li>
              </ul>
            </div>

            <div className="mt-2">
              <div className="mt-3">
                <span className="details-sub-title">Với khách hàng:</span>
              </div>
              <ul className="mt-2">
                <li>
                  Tiếp cận dịch vụ/sản phẩm dễ dàng ở mọi lúc mọi nơi: khách
                  hàng có thể tiếp cận thông tin về dịch vụ/sản phẩm, thương
                  hiệu của công ty một cách nhanh chóng thông qua ứng dụng di
                  động.
                </li>
                <li>
                  Cập nhật các chương trình khuyến mãi, ưu đãi sớm nhất: nhờ vào
                  tính năng gửi thông báo (push notification), khách hàng có thể
                  thường xuyên cập nhật các chương trình khuyến mãi, ưu đãi đặc
                  biệt của doanh nghiệp
                </li>
                <li>
                  Phản hồi trực tiếp với đơn vị cung cấp về chất lượng sản
                  phẩm/dịch vụ.
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
