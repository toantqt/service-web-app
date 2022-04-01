import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./header.css";
import { useHistory } from "react-router-dom";
export default function HeaderComponent() {
  const history = useHistory();
  useEffect(() => {
    const header = document.getElementById("header");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 60) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  const handleClick = (param) => {
    if (param === "home") {
      history.push("/");
    } else {
      history.push(`/${param}`);
    }
  };
  return (
    <Grid id="header">
      <div className="wrapper">
        <Grid container spacing={1}>
          <Grid item xs={4} lg={1} xl={3}>
            <div className="logo">
              <a href="design24.vn">
                <img src="https://res.cloudinary.com/serviced24/image/upload/v1633589688/logomenu_nliwks.png" />
              </a>
            </div>
          </Grid>
          <Grid item xs={8} lg={11} xl={9}>
            <div className="menu-header">
              <ul className="menu">
                <li
                  className="menu-item"
                  onClick={() => {
                    handleClick("home");
                  }}
                >
                  <a>Trang chủ</a>
                </li>
                <li className="menu-item">
                  {" "}
                  <a>Về chúng tôi</a>
                </li>
                <li className="menu-item">
                  {" "}
                  <a
                    onClick={() => {
                      handleClick("app");
                    }}
                  >
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
                  <a
                    onClick={() => {
                      handleClick("web");
                    }}
                  >
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
                <li
                  className="menu-item"
                  onClick={() => {
                    handleClick("contact");
                  }}
                >
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
