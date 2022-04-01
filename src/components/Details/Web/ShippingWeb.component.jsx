import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "../details.css";
export default function ShippingWebComponent(props) {
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
                Thiết kế website vận chuyển logistic đang ngày càng thịnh hành
                và được nhiều doanh nghiệp lựa chọn để làm phương thức kinh
                doanh online, phục vụ cho công tác quảng bá, giới thiệu công ty,
                các sản phẩm/dịch vụ đến nhiều khách hàng.
              </span>
            </div>
            <div>
              <span className="introduce mt-2">
                Design24 là đơn vị thiết kế website vận chuyển chuyên nghiệp,
                luôn đặt chất lượng sản phẩm và yêu cầu của khách hàng lên hàng
                đầu. Với đội ngũ nhân viên thiết kế giàu kinh nghiệm, chúng tôi
                cam kết sẽ mang đến cho quý khách hàng một website độc quyền và
                đạt chất lượng như mong muốn.
              </span>
            </div>

            <div className="mt-3">
              <span className="details-title">
                Giới thiệu về dịch vụ thiết kế website vận chuyển
              </span>
            </div>
            <div>
              <span className="introduce ">
                Thiết kế website vận chuyển là dịch vụ hỗ trợ cho các đơn vị
                chuyên kinh doanh, họat động trong lĩnh vực vận chuyển sản phẩm
                trong nước và quốc tế.
              </span>
            </div>
            <div className="mt-2">
              <span className="introduce ">
                Website vận chuyển có thể dùng cho cả doanh nghiệp nhỏ và vừa,
                đang có mong muốn tìm kiếm khách hàng và mở rộng thị trường. Dựa
                vào các website vận chuyển hàng hóa, khách hàng có thể dễ dàng
                tìm kiếm và lựa chọn doanh nghiệp nào phù hợp, có uy tín, chất
                lượng trong lĩnh vực vận chuyển.
              </span>
            </div>

            <div className="mt-3">
              <span className="details-title">
                Vì sao doanh nghiệp cần thiết kế website vận chuyển?
              </span>
            </div>

            <div className="mt-2">
              <ul className="mt-2">
                <li>
                  Quảng bá thương hiệu: là công cụ quảng bá vô cùng hiệu quả, hỗ
                  trợ doanh nghiệp dễ dàng tiếp cận đến nhiều người tiêu dùng.
                  Đồng thời, giúp khách hàng dễ dàng tìm kiếm tên doanh nghiệp
                  của bạn trên Internet khi sở hữu website.
                </li>
                <li>
                  Tính cập nhật cao: Bạn có thể dễ dàng cung cấp các thông tin,
                  tin tức công ty trên website dịch vụ vận chuyển của bạn. Qua
                  đó, khách hàng và nhân viên cũng sẽ dễ dàng nắm bắt thông tin
                  kịp thời.
                </li>
                <li>
                  Quản lí hiệu quả: website giúp doanh nghiệp trong ngành vận
                  chuyển logistics quản lý đơn hàng dễ dàng và nhanh chóng hơn.
                  Bên cạnh đó, thông qua website, khách hàng có thể theo dõi
                  được hành trình đơn hàng của mình chỉ bằng một vài thao tác
                  đơn giản.
                </li>
                <li>
                  Tiết kiệm chi phí: không còn sử dụng các phương thức marketing
                  truyền thống như: đăng tin tức trên báo đài hoặc in banner,
                  phát tờ rơi…Giờ đây, website vận chuyển cũng có thể đảm nhiệm
                  các chức năng đó, giúp bạn marketing vô cùng hiệu quả mà không
                  cần mất quá nhiều chi phí.
                </li>
                <li>
                  Tăng tính cạnh tranh: cập nhật xu hướng kinh doanh online bằng
                  việc sở hữu một website đã giúp không ít doanh nghiệp có thể
                  mang về lượng khách hàng lớn và tăng khả năng cạnh tranh với
                  các đối thủ cùng ngành hàng.
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
