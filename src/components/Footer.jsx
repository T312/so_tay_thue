// import React from "react";
// import "../styles/footer.scss";

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <p>© 2025 Thuế cơ sở 3 tỉnh Lâm Đồng | Sổ tay </p>
//     </footer>
//   );
// }
import React from "react";
import "../styles/footer.scss";
import logo from "../assets/logo.png"; // logo Spiderum
import appstore from "../assets/appstore.jpg"; 
import googleplay from "../assets/chplay.png"; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <nav className="footer-nav">
            <a href="#contact">LIÊN HỆ</a>
            <a href="#terms">ĐIỀU KIỆN SỬ DỤNG</a>
          </nav>
        </div>

        <div className="footer-right">
          <span>Tải app Etax Mobile</span>
          <div className="footer-apps">
            <a 
            href="https://apps.apple.com/vn/app/etax-mobile/id1589750682?l=vi" 
            target="_blank" 
            rel="noopener noreferrer"
            ><img src={appstore} alt="App Store" /></a>
             <a 
            href="https://play.google.com/store/search?q=etax+mobile&c=apps&hl=vi" 
            target="_blank" 
            rel="noopener noreferrer"
            > <img src={googleplay} alt="Google Play" /></a>
            
           
          </div>
        </div>
      </div>

      <hr />

      <div className="container footer-bottom">
        <div className="footer-info">
          <p><strong>Thuế cơ sở 3 tỉnh Lâm Đồng</strong></p>
          <p>Trực thuộc Thuế tỉnh Lâm Đồng</p>
          <p>Người chịu trách nhiệm nội dung: Nguyễn Thị Lê Na, Hồ Thị Mỹ Duyên, Nguyễn Thị Thu Loan</p>
          
        </div>

        <div className="footer-contact">
          <p><strong>Liên hệ Fanpages</strong></p>
          <a 
            href="https://www.facebook.com/profile.php?id=61578685103327" 
            target="_blank" 
            rel="noopener noreferrer"
            > <p>Facebook: Thuế cơ sở 3 tỉnh Lâm Đồng</p></a>
          
          <p>Điện thoại: (+84) 2633 843 110</p>
        </div>

        <div className="footer-copyright">
          <p>Email: tonvdtpc@gmail.com</p>
          <p>Điện thoại: (+84) 2633 843 110</p>
          <p>Số 368 Quốc lộ 20, xã Đức Trọng, tỉnh Lâm Đồng</p>
        </div>
      </div>

      {/* Back to top */}
      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
