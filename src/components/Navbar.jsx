import React from "react";
import "../styles/navbar.scss";

export default function Navbar({ onNavigate }) {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="#blog-1" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate(1); }}>
            Đăng ký thuế lần đầu
          </a>
        </li>
        <li>
          <a href="#blog-2" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate(2); }}>
            Kê khai cho thuê tài sản
          </a>
        </li>
        <li>
          <a href="#blog-3" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate(3); }}>
            Chuyển đổi phương thức kê khai tính thuế
          </a>
        </li>
        <li>
          <a href="#blog-4" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate(4); }}>
            Hỏi nhanh – đáp gọn: 1 phút hiểu ngay về thuế
          </a>
        </li>
      </ul>
    </nav>
  );
}

