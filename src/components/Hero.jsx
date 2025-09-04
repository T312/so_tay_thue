import React from "react";
import "../styles/hero.scss";
import heroImg from "../assets/logo.png"; // ảnh nhân vật

const Hero = () => {
  const handleDownload = async () => {
    window.open(`${process.env.PUBLIC_URL}/so-tay-huong-dan.pdf`, "_blank");

    // tab hiện tại quay về trang chủ
    window.location.href = "/";
  };
  
  return (
    <section className="hero">
      <div className="container hero-wrapper">
        {/* Text */}
        <div className="hero-text">
          <h1>THUẾ CƠ SỞ 3 TỈNH LÂM ĐỒNG</h1>
          <p>Sổ tay hướng dẫn một số thủ tục hành chính về thuế dành cho Cá nhân, Hộ kinh doanh</p>
          <a onClick={handleDownload} className="btn-outline">Tải xuống</a>
        </div>

        {/* Image
        <div className="hero-img">
          <img src={heroImg} alt="hero" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
