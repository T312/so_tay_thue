// import React from "react";
// import "../styles/header.scss";

// export default function Header() {
//   return (
//     <header className="header">

//       <h1>THUẾ CƠ SỞ 3 TỈNH LÂM ĐỒNG</h1>
//       <p>Sổ tay hướng dẫn một số thủ tục hành chính về thuế đối với hộ kinh doanh </p>
//     </header>
//   );
// }
import React from "react";
import "../styles/header.scss";
import logo from "../assets/logo.png"; 
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
       <div className="logo"> <img src={logo} alt="Logo" className="logo-img" />
        <span>Thuế cơ sở 3 tỉnh Lâm Đồng</span></div>
      
        {/* Menu
        <nav className="nav">
          <a href="#shop">Spider's Shop</a>
          <a href="#agency">Agency</a>
          <a href="#publishing">Publishing</a>
          <a href="#contact">Liên hệ</a>
        </nav> */}

        {/* Actions
        <div className="actions">
          <a href="#register" className="btn-text">Đăng ký</a>
          <a href="#login" className="btn-primary">Đăng nhập</a>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
