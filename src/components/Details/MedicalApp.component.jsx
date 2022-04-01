import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./details.css";
export default function MedicalAppComponent(props) {
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
                Ngày nay, cuộc sống hiện đại luôn cuốn con người vào guồng quay
                của công việc mà không có thời gian quan tâm cũng như rèn luyện
                sức khỏe. Do đó, nhằm hỗ trợ con người trong việc bảo vệ và nâng
                cao sức khỏe, tập luyện thể thao để có được một chế độ phù hợp
                và một cơ thể khỏe mạnh, các chuyên gia y tế đã cho ra đời một
                mô hình ứng dụng hỗ trợ chăm sóc sức khỏe ở mọi lúc – mọi nơi.
              </span>
            </div>
            <div className="mt-3">
              <span className="details-title"> Giới thiệu về App Y Tế</span>
            </div>
            <div>
              <span className="introduce">
                Ứng dụng y tế là giải pháp quản lí tổng thể dành cho bệnh viện,
                phòng khám tích hợp nhiều tính năng bao gồm về nhân sự, đồng bộ
                thông báo, hệ thống báo cáo cần thiết trên ứng dụng di động
                thông minh.
              </span>
            </div>
            <div className="mt-2">
              <span className="introduce">
                Ứng dụng y tế dành cho bệnh viện, phòng khám được phát triển
                trên nền tảng Mobile với các hệ điều hành khác nhau, nhất là IOS
                và Android, đem đến những trải nghiệm tuyệt vời cho khách hàng.
              </span>
            </div>
            <div className="mt-3">
              <span className="details-title">
                Lợi ích của việc thiết kế App Y Tế
              </span>
            </div>
            <div className="mt-2">
              <div className="mt-3">
                <span className="details-sub-title">Với bệnh viện:</span>
              </div>
              <ul className="mt-2">
                <li>
                  Công cụ hữu ích: Ứng dụng y tế hỗ trợ các bác sĩ và các nhân
                  viên y tế dễ dàng cập nhật về tình trạng sức khỏe của bệnh
                  nhân
                </li>
                <li>
                  Quản lí hiệu quả: hỗ trợ các nhân viên y tế trong việc quản lí
                  các hồ sơ bệnh án, lưu thông tin y tế, hình ảnh xét nghiệm và
                  các đơn thuốc để tái khám dễ dàng hơn
                </li>
                <li>
                  Thông tin chính xác: cung cấp thông tin về các đơn vị, bác sĩ
                  một cách đầy đủ và chuẩn xác, giúp khách hàng an tâm và hài
                  lòng hơn khi sử dụng dịch vụ.
                </li>
                <li>
                  Cung cấp kiến thức bổ ích: thông qua App y tế, con người có
                  thể tự rèn luyện và lựa chọn cho mình một chế độ ăn uống, thể
                  dục, cách chăm sóc sức khỏe…sao cho phù hợp và đạt hiệu quả
                  nhất định.
                </li>
              </ul>
            </div>

            <div className="mt-2">
              <div className="mt-3">
                <span className="details-sub-title">Với bệnh nhân:</span>
              </div>
              <ul className="mt-2">
                <li>
                  Đặt lịch hẹn bác sĩ trực tuyến giúp ích cho những vùng xa
                </li>
                <li>Truy cập vào ứng dụng mọi lúc mọi nơi</li>
                <li>
                  Hỗ trợ tìm kiếm chính xác theo triệu chứng, tên bệnh, tên bác
                  sĩ
                </li>
                <li>Đăng kí hồ sơ khám bệnh dễ dàng</li>
                <li>Giảm hóa đơn y tế và mở rộng</li>
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
