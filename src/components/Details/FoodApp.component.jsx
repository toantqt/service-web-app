import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./details.css";
export default function FoodAppComponent(props) {
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
                Ngành dịch vụ ăn uống là một ngành đòi hỏi các nhà kinh doanh
                cần đầu tư vào việc thiết kế các kênh marketing trong lĩnh vực
                ăn uống, giúp cho việc quảng bá, tiếp cận đến khách hàng dễ
                dàng, hiểu rõ hơn về sản phẩm/dịch vụ của doanh nghiệp. Do đó,
                dịch vụ thiết kế App ăn uống sẽ là công cụ đắc lực, hỗ trợ bạn
                trong việc kinh doanh một cách hiệu quả và tiện lợi.
              </span>
            </div>
            <div>
              <div className="mt-3">
                <span className="details-title">
                  Giới thiệu về App ăn uống đặt bàn gọi món
                </span>
              </div>
              <div className="mt-3">
                <span className="introduce">
                  Ứng dụng di động ăn uống là phần mềm trực tuyến, có chức năng
                  đặt bàn nhà hàng trên điện thoại, là giải pháp hữu hiệu để
                  khắc phục tình trạng lo ngại việc hết bàn trong ngày hoặc giờ
                  cao điểm. Thiết kế app ăn uống sẽ là công cụ tốt của ngành
                  dịch vụ ăn uống, giúp doanh nghiệp tìm kiếm khách hàng và điều
                  phối hoạt động kinh doanh đạt hiệu quả, khoa học.
                </span>
              </div>
              <div className="mt-2">
                <span className="introduce">
                  Hiện nay, hệ điều hành Android và IOS là nền tảng công nghệ
                  được sử dụng phổ biến nhất trên smartphone. Vì vậy, tận dụng
                  lợi thế ấy, doanh nghiệp cần lựa chọn thiết kế app mobile phục
                  vu cho hoạt động kinh doanh, đặt bàn nhà hàng.
                </span>
              </div>
            </div>
            <div className="mt-3">
              <span className="details-title">
                Lợi ích của thiết kế App ăn uống đặt bàn gọi món
              </span>
            </div>
            <div className="mt-2">
              <div className="mt-3">
                <span className="details-sub-title">Với doanh nghiệp :</span>
              </div>
              <ul className="mt-2">
                <li>
                  Thu hút khách hàng: với tiêu chí nhanh – tiện – gọn, việc lựa
                  chọn dịch vụ đặt bàn gọi món được nhiều người sử dụng hơn,
                  giúp họ dễ dàng chọn món và địa điểm để trải nghiệm.
                </li>
                <li>
                  Quản lí chặt chẽ: giúp quản trị, điều hành, thông báo, kiểm
                  sóat và ghi nhận thông tin khách hàng tốt hơn
                </li>
                <li>
                  Cập nhật thông tin đầy đủ: App giáo dục luôn cập nhật những
                  tin tức, kiến thức mới nhất vào trong kho tài liệu của trường,
                  giúp học viên có thể dễ dàng tìm kiếm thông tin khi cần một
                  cách nhanh chóng.
                </li>
                <li>
                   Marketing hiệu quả: quảng bá mạnh mẽ đến nhiều đối tượng và
                  cập nhật nhanh chóng các chương trình khuyến mãi tức thời đến
                  khách hàng
                </li>
                <li>
                  Thúc đẩy doanh số: App Mobile ăn uống là công cụ hữu hiệu giúp
                  doanh nghiệp đẩy mạnh doanh thu vượt trội khi mở đầu cho hình
                  thức kinh doanh online.
                </li>
                <li>
                  Tăng tính chuyên nghiệp: Một nhà hàng sở hữu riêng cho mình
                  một app đặt bàn gọi món sẽ thể hiện được tính chuyên nghiệp,
                  sự đầu tư nghiêm túc cho thương hiệu. Từ đó, tạo được ấn tượng
                  tốt và sự tin tưởng trong mắt khách hàng.
                </li>
              </ul>
            </div>

            <div className="mt-2">
              <div className="mt-3">
                <span className="details-sub-title">Với khách hàng:</span>
              </div>
              <ul className="mt-2">
                <li>
                  Tiện lợi, đa dạng: App mobile ăn uống luôn cung cấp đầy đủ
                  thông tin về dịch vụ của nhà hàng bao gồm: giá cả, menu, không
                  gian, phương thức thanh toán… giúp khách hàng dễ dàng lựa chọn
                  nhà hàng của bạn để trải nghiệm.
                </li>
                <li>
                  Thông tin hữu ích: một trong những tiện lợi để bạn tìm được
                  một nhà hàng ưng ý mà không sợ nhầm lẫn, đó là đọc và tìm hiểu
                  những review chân thực, sống động của những khách hàng trước
                  đó.
                </li>
                <li>
                  Ưu đãi hấp dẫn: App mobile ăn uống thường mang đến các chương
                  trình khuyến mãi vô cùng hấp dẫn, giúp khách hàng vừa được
                  thưởng thức món ăn ngon mà giá cả lại phải chăng.
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
