import React, { useEffect, useRef, useState } from "react";
import Grid from "@material-ui/core/Grid";
import video from "../../../../assets/video/video.mp4";
import ModalSuccessComponent from "../../../../components/Modal/ModalSuccess.component";

export default function IntroduceComponent(props) {
  const vidRef = useRef(null);
  const [openModal, setOpenModal] = useState(true);
  const [playVideo, setPlayVideo] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
    vidRef.current.play();
    vidRef.current.volume = 0.2;
    setPlayVideo(true);
  };
  useEffect(() => {
    vidRef.current.pause();
  }, []);
  const handleClickVideo = () => {
    if (playVideo) {
      setPlayVideo(false);
      vidRef.current.pause();
    } else {
      setPlayVideo(true);
      vidRef.current.play();
    }
  };
  return (
    <Grid style={{ position: "relative" }}>
      <div>
        <video
          width="100%"
          autoPlay
          ref={vidRef}
          onClick={() => {
            handleClickVideo();
          }}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div
        className="intro-wrapper"
        onClick={() => {
          handleClickVideo();
        }}
      >
        <div>
          <span className="title">
            THIẾT KẾ APP & WEBSITE CHUYÊN NGHIỆP UY TÍN HÀNG ĐẦU
          </span>
        </div>

        <div className="action mt-3">
          <a className="btn">Liên hệ ngay</a>
          <a className="btn btn-phone ml-2">
            {" "}
            <i className="fas fa-phone-square-alt mr-1"></i> 0784.888.009
          </a>
        </div>
        <div className="mt-2">
          <span className="sub-title ">
            Phục vụ vượt mong đợi của khách hàng, luôn là thương hiệu mang đến
            trải nghiệm khách hàng tốt nhất Việt Nam
          </span>
        </div>
      </div>
      <ModalSuccessComponent open={openModal} handleClose={handleClose} />
    </Grid>
  );
}
