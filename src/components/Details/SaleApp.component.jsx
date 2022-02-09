import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./details.css";
export default function SaleAppComponent(props) {
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
                Ngày nay, thời đại công nghệ số ngày càng lên ngôi và phát
                triển, việc mua sắm hàng hóa online cũng được mở rộng và được
                nhiều người quan tâm, lựa chọn. Do đó, nếu bạn là một doanh
                nghiệp đang kinh doanh dòng sản phẩm nào đó, bạn muốn đưa thương
                hiệu của mình đến gần hơn với đông đảo người tiêu dùng, cũng như
                khẳng định vị thế trên thị trường, cách tốt nhất là sở hữu riêng
                cho mình một ứng dụng bán hàng, giúp tăng doanh thu hiệu quả và
                tăng tỉ lệ chuyển đổi.
              </span>
            </div>
            <div className="mt-3">
              <span className="details-title">Giới thiệu về App bán hàng</span>
            </div>
            <div>
              <ul>
                <li>
                  App bán hàng hay còn gọi là ứng dụng bán hàng, là giải pháp
                  bán hàng online toàn diện (3 trong 1) mà Design24 xây dựng và
                  cung cấp cho khách hàng đang hoạt động kinh doanh trong bất kì
                  lĩnh vực nào.
                </li>
                <li>
                  App bán hàng mang đến cho khách hàng sự thuận tiện trong việc
                  mua sắm, chỉ cần cài đặt App bán hàng trong Smartphone, bạn đã
                  có thể tự do lựa chọn mua sắm tất cả các đồ dùng cần thiết
                  như: quần áo, giày dép, nước uống, phụ kiện… ở mọi lúc – mọi
                  nơi.
                </li>
                <li>
                  App bán hàng còn hỗ trợ doanh nghiệp trong việc đồng bộ dữ
                  liệu (đơn hàng, sản phẩm…) với website bán hàng, giúp quản lý
                  và xử lý đơn hàng nhanh.
                </li>
              </ul>
            </div>
            <div className="mt-3">
              <span className="details-title">
                Vì sao doanh nghiệp cần sở hữu App bán hàng?
              </span>
            </div>
            <div className="mt-2">
              <div className="mt-3">
                <span className="details-sub-title">
                  THU HÚT KHÁCH HÀNG TIỀM NĂNG
                </span>
              </div>
              <span>
                Chiếm đến 91% lượng người sử dụng smartphone trong 3 năm gần đây
                và 61% lượng người dùng smartphone để truy cập vào các trang
                web, các ứng dụng mua sắm. Điều này cho thấy sự phát triển vượt
                bậc của thời đại công nghệ số và thương mại điện tử. Do đó, khi
                doanh nghiệp sở hữu một App bán hàng, sẽ góp phần thu hút đến
                nhiều đối tượng khách hàng và tạo được ấn tượng mạnh mẽ trong
                mắt khách hàng về thương hiệu cá nhân.
              </span>
            </div>
            <div>
              <div className="mt-3">
                <span className="details-sub-title">GIA TĂNG DOANH THU</span>
              </div>
              <span>
                Khi nhu cầu mua sắm hàng hóa trên thương mại điện tử ngày càng
                tăng cao thì việc bán hàng cũng được kích cầu mạnh mẽ, giúp
                doanh nghiệp gia tăng doanh thu hiệu quả.
              </span>
            </div>
            <div>
              <div className="mt-3">
                <span className="details-sub-title">MARKETING HIỆU QUẢ</span>
              </div>
              <span>
                Khi doanh nghiệp sở hữu App bán hàng ấn tượng và đa dạng, sẽ góp
                phần đẩy mạnh chiến dịch marketing hiệu quả đến đông đảo người
                tiêu dùng, truyền thông bất chấp không gian và thời gian. Đồng
                thời, giúp doanh nghiệp truyền đạt thông tin sản phẩm đến khách
                hàng một cách đầy đủ, chính xác và nhất quán.
              </span>
            </div>

            <div>
              <div className="mt-3">
                <span className="details-sub-title">HỖ TRỢ NHIỆT TÌNH</span>
              </div>
              <span>
                App bán hàng luôn hỗ trợ doanh nghiệp trong việc cung cấp các
                dịch vụ và sản phẩm đến khách hàng mọi lúc, mọi nơi. Tư vấn tận
                tâm, giúp khách hàng thuận tiện trong việc mua sắm, lựa chọn
                hàng hóa.
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
