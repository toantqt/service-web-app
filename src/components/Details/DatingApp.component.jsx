import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./details.css";
export default function DatingAppComponent(props) {
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
                Hiện nay, việc kết bạn giao lưu, hẹn hò trên các trang mạng xã
                hội hoặc các ứng dụng hẹn hò đều rất phổ biến, đặc biệt là giới
                trẻ - thế hệ gen Z ngày nay luôn tất bật, chú tâm vào công việc
                mà quên đi thời gian hẹn hò, kiếm tìm nửa kia của mình. Hiểu
                được tâm lí đó, nhiều doanh nghiệp đã cho ra mắt App hẹn hò giúp
                các bạn gắn kết, có thêm thời gian trò chuyện, tìm hiểu nhau
                hơn. Đây là một trong số loại hình ứng dụng được yêu thích và sử
                dụng nhiều nhất hiện nay.
              </span>
            </div>
            <div>
              <div className="mt-3">
                <span className="details-title">Giới thiệu về App Hẹn Hò</span>
              </div>
              <div className="mt-3">
                <span className="introduce">
                  Ứng dụng hẹn hò là một App Mobile được thiết kế, hoạt động
                  trên nền tảng điện thoại di động của Android và IOS.
                </span>
              </div>
              <div className="mt-2">
                <span className="introduce">
                  App hẹn hò được sáng tạo nhằm kết nối cho những ai đang cô
                  đơn, mong muốn tìm được nửa kia mình. Với tính năng tìm kiếm
                  thông minh, bạn có thể lọc được giới tính, độ tuổi, sở thích,
                  nơi sinh sống…Thông qua App hẹn hò, bạn và đối phương có thể
                  dễ dàng trò chuyện và tìm thấy nhau trên Internet. Qua đó, bạn
                  sẽ có thật nhiều trải nghiệm thú vị khi sử dụng ứng dụng tuyệt
                  vời này.
                </span>
              </div>
            </div>
            <div className="mt-3">
              <span className="details-title">
                Lợi ích khi thiết kế App hẹn hò
              </span>
            </div>
            <div className="mt-2">
              <ul>
                <li>
                  Tiết kiệm thời gian: App hẹn hò là một công cụ lý tưởng dành
                  cho những ai không có quá nhiều thời gian hoặc còn đang e dè
                  trong việc tìm bạn bốn phương,. Ứng dụng này sẽ giúp bạn kết
                  nối với nhiều người ngay cả khi ở nhà.
                </li>
                <li>
                  Kết nối nhanh chóng: Khi đã tìm được đối tượng phù hợp, bạn có
                  thể dễ dàng bắt chuyện với đối phương bằng cách nhắn tin, gọi
                  điện, video call ở mọi lúc mọi nơi.
                </li>
                <li>
                  Mang đến lợi nhuận cho nhà phát triển ứng dụng: Khi ứng dụng
                  hẹn hò cặp đôi được một lượng lớn người sử dụng và quan tâm,
                  các nhà quản lý có thể kiếm được tiền từ các quảng cáo, đặt
                  banner…
                </li>
                <li>
                  Tính bảo mật cao: tài khoản và thông tin của người dùng đều
                  được bảo mật chặt chẽ, có thể đặt password và xác thực bằng
                  gmail hoặc số điện thoại để đảm báo tính an toàn tuyệt đối cho
                  khách hàng.
                </li>
              </ul>
            </div>
            <div className="mt-3">
              <span className="details-title">
                Thiết kế App hẹn hò tại Design24
              </span>
            </div>
            <div className="mt-3">
              <span className="introduce">
                Với đội ngũ nhân viên giàu kinh nghiệm, khả năng sáng tạo linh
                họat, luôn nắm bắt kịp thời những xu hướng mới nhất trên thị
                trường, Design24 cam kết sẽ mang đến cho khách hàng một mẫu
                thiết kế App hẹn hò đầy ấn tượng, giao diện bắt mắt và chuyên
                nghiệp. Đồng thời, có thể giúp các khách hàng của bạn có được
                những giây phút trải nghiệm tuyệt vời khi sử dụng ứng dụng hẹn
                hò.
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
