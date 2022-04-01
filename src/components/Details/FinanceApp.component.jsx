import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./details.css";
export default function FinanceAppComponent(props) {
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
                Đi cùng sự phát triển của công nghệ hiện đại, nhiều đơn vị tài
                chính đã đơn giản hóa công việc của mình bằng cách cho ra đời
                ứng dụng di động tài chính, giúp kết nối và quản lí khách hàng
                một cách tiện dụng, bỏ qua những giai đoạn rườm rà trong việc
                ghi chép, tính toán trên giấy tờ để quản lí tiền bạc. Do đó,
                thiết kế app tài chính đang được nhiều công ty đưa vào thực hiện
                và áp dụng hiệu quả.
              </span>
            </div>
            <div className="mt-3">
              <span className="details-title">
                {" "}
                Giới thiệu về App tài chính
              </span>
            </div>
            <div>
              <span className="introduce">
                Ứng dụng Mobile tài chính là giải pháp quản lí tổng thể dành cho
                doanh nghiệp tài chính, tích hợp nhiều tính năng bao gồm về nhân
                sự, kế toán, đồng bộ thông báo, hệ thống báo cáo cần thiết trên
                ứng dụng di động thông minh, mang đến cho khách hàng nhiều trải
                nghiệm thú vị.
              </span>
            </div>
            <div className="mt-2">
              <span className="introduce">
                Ứng dụng Mobile tài chính giúp doanh nghiệp kết nối, báo cáo và
                lưu trữ nhiều loại vấn đề tài chính khác nhau. Đặc biệt, còn
                giúp quản lí dòng tiền bên trong và bên ngoài doanh nghiệp, để
                biết rõ “dòng tiền đó đến từ đâu và sẽ đi đâu”.
              </span>
            </div>
            <div className="mt-3">
              <span className="details-title">
                Lợi ích của việc thiết kế App tài chính
              </span>
            </div>
            <div className="mt-2">
              <div className="mt-3">
                <span className="details-sub-title">Về doanh nghiệp :</span>
              </div>
              <ul className="mt-2">
                <li>
                  Marketing hiệu quả: quảng bá, giới thiệu hình ảnh, dịch vụ của
                  doanh nghiệp tài chính ở mọi lúc, mọi nơi. Đồng thời, khẳng
                  định sự hiện diện của doanh nghiệp tài chính trên thị trường
                  internet nói chung và tài chính nói riêng, nhất là trong thời
                  điểm phát triển mạnh mẽ của công nghệ mobile marketing.
                </li>
                <li>
                  Truyền tải thông điệp tức thời: App Mobile sở hữu đặc tính là
                  luôn online, khi có một thông tin muốn chuyển cho người dùng,
                  bạn chỉ có nhiệm vụ gửi. Ngay tức khắc, khách hàng đã có thể
                  nhận được thông điệp mà bạn muốn truyền tải.
                </li>
                <li>
                  Tiết kiệm tối đa: áp dụng app tài chính không chỉ giúp doanh
                  nghiệp tiết kiệm chi phí trong việc quảng bá tài chính, mà còn
                  tiết kiệm về mặt thời gian, giúp nhân viên giám sát và lập báo
                  cáo nhanh chóng.
                </li>
                <li>
                  Thể hiện sự chuyên nghiệp trong mắt khách hàng: với sự tiện
                  ích, đa tính năng của ứng dụng, bạn sẽ tạo được thiện cảm, sự
                  chuyên nghiệp trong mắt khách khi đem đến những trải nghiệm
                  đầy thú vị.{" "}
                </li>
              </ul>
            </div>

            <div className="mt-2">
              <div className="mt-3">
                <span className="details-sub-title">Về khách hàng:</span>
              </div>
              <ul className="mt-2">
                <li>Cập nhật tin tức tài chính nhanh chóng và tiện lợi nhất</li>
                <li>
                  Dễ dàng quản lý các khoản vay và các thông tin liên quan
                </li>
                <li>
                  Có thể sử dụng mọi lúc mọi nơi, sử dụng dễ dàng, nhanh chóng.
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
