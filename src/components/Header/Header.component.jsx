import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./header.css";
export default function HeaderComponent() {
  useEffect(() => {
    const header = document.getElementById("header");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 10) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  return (
    <Grid id="header">
      <div className="wrapper">
        <Grid container spacing={1}>
          <Grid item xs={4} lg={2}>
            <div className="logo">
              <a>
                <img src="https://design24.vn/Images/dichvu/logomenu.png" />
              </a>
            </div>
          </Grid>
          <Grid item xs={8} lg={10}>
            <div className="menu-header">
              <ul className="menu">
                <li className="menu-item">
                  <a>Trang chủ</a>
                </li>
                <li className="menu-item">
                  {" "}
                  <a>Về chúng tôi</a>
                </li>
                <li className="menu-item">
                  {" "}
                  <a>
                    App Chuyên Dụng <i class="fas fa-chevron-down"></i>
                    <ul className="sub-menu">
                      <li>
                        <a>Thiết Kế App Bán Hàng</a>
                      </li>

                      <li>
                        <a> Thiết Kế App Doanh Nghiệp</a>
                      </li>
                      <li>
                        <a>Thiết Kế App Tài Chính</a>
                      </li>
                      <li>
                        <a>Thiết Kế App Y Tế</a>
                      </li>
                      <li>
                        <a>Thiết Kế App Giáo Dục</a>
                      </li>
                      <li>
                        <a>Thiết Kế App Du Lịch</a>
                      </li>
                      <li>
                        <a>Thiết Kế App Ăn Uống</a>
                      </li>
                      <li>
                        <a>Thiết Kế App Vận Chuyển</a>
                      </li>
                      <li>
                        <a>Thiết Kế App Hẹn Hò</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li className="menu-item">
                  {" "}
                  <a>
                    Thiết kế website <i class="fas fa-chevron-down"></i>
                  </a>
                </li>
                <li className="menu-item">
                  {" "}
                  <a>
                    Giải pháp <i class="fas fa-chevron-down"></i>
                  </a>
                </li>
                <li className="menu-item">
                  {" "}
                  <a>
                    Tin tức <i class="fas fa-chevron-down"></i>
                  </a>
                </li>
                <li className="menu-item">
                  {" "}
                  <a>Liên hệ</a>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
