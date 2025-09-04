import React from "react";
import BlogItem from "./BlogItem";
import "../styles/blog.scss";
import { FaFileSignature, FaHome, FaExchangeAlt } from "react-icons/fa";
import { IoSwapHorizontal, IoSwapVertical } from "react-icons/io5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-regular-svg-icons' // ví dụ icon
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons' 
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons' 
const blogs = [
  {
    id: 1,
    title: "Đăng ký thuế lần đầu",
    excerpt: "Hướng dẫn đăng ký MST thu nhập cá nhân trên cổng dịch vụ công...",
    content: [
  {
    text: "Bước 1: Người nộp thuế truy cập trang https://dichvucong.gdt.gov.vn => Chọn chức năng Đăng nhập",
    image: null
  },
  {
    text: "Bước 2: NNT chọn Đăng nhập bằng tài khoản Định danh điện tử",
    image: "images/id1b2.png"
  },
  {
    text: "Bước 3: NNT nhập tên đăng nhập/mật khẩu nhấn Đăng nhập, hệ thống hiển thị",
    image: "images/id1b3.png"
  }
  ,
  {
    text: "Bước 4: Nhập mã xác nhận gửi về số điện thoại, nhấn Xác nhận, Hệ thống hiển thị cảnh báo “Bạn phải đăng ký thuế để sử dụng số định danh cá nhân kê khai và nộp thuế” => Đăng ký ",
    image: "images/id1b4.png"
  },{
    text: "+ Nhấn Đăng ký, hệ thống hiển thị danh sách các TTHC đăng ký thuế lần đầu dành cho cá nhân: + 1.010241 - Đăng ký thuế lần đầu đối với người nộp thuế là cá nhân có thu nhập thuộc diện chịu thuế thu nhập cá nhân hoặc có nghĩa vụ với ngân sách nhà nước (trừ cá nhân kinh doanh) - Trường hợp cá nhân đăng ký thuế trực tiếp với cơ quan thuế",
    image: null
  }
  ,
  {
    text: "Bước 5: Chọn TTHC: Mã TTHC: 1.010241 - NSD chọn chức năng “Thủ tục hành chính”, hệ thống hiển thị màn hình như sau",
    image: "images/id1b5.png"
  }
  ,
  {
    text: "NSD chọn Nộp hồ sơ đối với mã TTHC 1.010241 để thực hiện khai báo tờ khai",
    image: null
  },
  {
    text: "Bước 6: Hệ thống hiển thị màn hình các hồ sơ cần chuẩn bị 05-ĐK-TCT > Hệ thống hiển thị màn hình thông báo các hồ sơ cần chuẩn bị.",
    image: "images/id1b6.png"
  },
  {
    text: "Bước 7: Nhấn “Tiếp tục”, hệ thống hiển thị màn hình chọn đối tượng",
    image: "images/id1b7.png"
  },
  {
    text: "Bước 8: Nhấn “Tiếp tục”, hiển thị màn hình thông tin cá nhân đăng ký thuế",
    image: "images/id1b8.png"
  },
  {
    text: "Bước 9: Nhấn “Tiếp tục”, hiển thị màn hình thông tin địa chỉ cá nhân",
    image: "images/id1b9.png"
  },
  {
    text: "Bước 10: Nhấn “Tiếp tục”, hiển thị màn hình Hồ sơ: Nhập mã captcha đúng và nhấn Nộp hồ sơ > Hệ thống hiển thị màn hình nhập OTP. Mã OTP được gửi về Email của NNT đã nhập tại cụm địa chỉ kinh doanh.",
    image: "images/id1b10.png"
  },
  {
    text: "Bước 11: NNT nhập mã OTP và nhấn “Nộp hồ sơ”, hệ thống hiển thị màn hình nộp hồ sơ thành công. ",
    image: "images/id1b11.png"
  },
  {
    text: "Bước 12: Hiển thị màn hình kết quả nộp tờ khai: NNT sử dụng mã hồ sơ này để tra cứu hồ sơ đã nộp thành công tại chức năng “Tra cứu hồ sơ”",
    image: "images/id1b12.png"
  }
],
   
    icon: <FontAwesomeIcon icon={faPenToSquare} />
  },
  {
    id: 2,
    title: "Kê khai cho thuê tài sản",
    excerpt: "Hướng dẫn kê khai thuế cho hoạt động cho thuê tài sản (01/TTS)...",
    content: [
  {
    text: "Bước 1: Người nộp thuế truy cập trang thông tin https://dichvucong.gdt.gov.vn => Chọn chức năng Đăng nhập bằng tài khoản định danh điện tử hoặc bằng tài khoản Thuế điện tử.",
    image: "images/id2b1.png"
  },
  {
    text: "Bước 2: Tìm kiếm theo tên hoặc mã danh mục cho thuê tài sản: 1.007689 → chọn Nộp hồ sơ → chọn Tờ khai đối với hoạt động cho thuê tài sản 01/TTS ( TT40/2021) → Bấm Tiếp tục",
    image: "images/id2b2.1.png"
  },
  {
    text: null,
    image: "images/id2b2.2.png"
  },{
    text: "Bước 3: Chọn tờ khai như hình dưới → Tiếp tục → Chọn địa chỉ kinh doanh tương ứng với nơi cho thuê tài sản",
    image: "images/id2b3.1.png"
  },{
    text: null,
    image: "images/id2b3.2.png"
  },
  {
    text: "Bước 4: Chọn hình thức kê khai theo Năm đối với trường hợp kê khai theo Năm dương lịch hoặc Lần thanh toán đối với trường hợp kê khai theo tháng; quý; 6 tháng hoặc không tròn năm → Tiếp tục",
    image: "images/id2b4.png"
  },
  {
    text: "Bước 5: Nhập đầy đủ thông tin của các chỉ tiêu trên tờ khai → kéo xuống dưới chọn 01/BK/TTS (NNT phải nhập bảng kê trước sau đó doanh thu và số thuế sẽ tự động nhảy trên tờ khai 01/TTS)",
    image: "images/id2b5.1.png"
  },
  {
    text: null,
    image: "images/id2b5.2.png"
  },
  {
    text: "Bước 6: Chỉ tiêu 06a chọn Hợp đồng → nhập đầy đủ các chỉ tiêu tiếp theo như hướng dẫn:",
    image: "images/id2b6.1.png"
  },
  {
    text: "Nhập kỳ thanh toán; giá cho thuê đã bao gồm thuế; số tháng như hướng dẫn:",
    image: "images/id2b6.2.png"
  },
  {
    text: "Chọn Hợp đồng khai lần đầu → Mã hợp đồng hệ thống sẽ tự sinh ra",
    image: "images/id2b6.3.png"
  },
  {
    text: "Bước 7: Quay trở lại Tờ khai 01/TTS → khi đó Doanh thu và số thuế sẽ tự động điền khớp với số liệu đã kê khai trong bảng kê vừa rồi → Chọn Hoàn thành kê khai → Chọn Kết xuất XML → Chọn Nộp tờ khai",
    image: "images/id2b7.1.png"
  },
  {
    text: null,
    image: "images/id2b7.2.png"
  },
  {
    text: "Bước 8: Đính kèm hợp đồng hoặc phụ lục ( nếu có); Nhập số lượng tệp hợp đồng tải lên VD: NNT đính kèm 1 bản PDF thì điền số 1 như hình dưới → Tiếp tục",
    image: "images/id2b8.png"
  },
  {
    text: "Bước 9: Nhập mã kiểm tra → Tiếp tục → NNT sẽ nhập mã OTP được Cục Thuế gửi về số điện thoại hoặc Email → Tiếp tục Khi đó tờ khai sẽ được nộp thành công",
    image: "images/id2b9.1.png"
  },
  {
    text: null,
    image: "images/id2b9.2.png"
  },
  {
    text:  null,
    image: "images/id2b9.3.png"
  }
],
    icon: <FontAwesomeIcon icon={faHouse} />
  },
  {
    id: 3,
    title: "Chuyển đổi phương thức kê khai tính thuế",
    excerpt: "Hướng dẫn chuyển đổi phương pháp tính thuế và nghĩa vụ kê khai...",
    content: [
  {
    text: "Bước 1: Chuẩn bị hồ sơ\n- Hoàn tất nghĩa vụ thuế 2\n- Mẫu số 08-MST (86/2024/TT-BTC)\n- Mẫu 01/CNKD (40/2021/TTBTC)\n- Bản sao CCCD, GPKD, Giấy tờ liên quan đến địa điểm kinh doanh.",
    image: null
  },
  {
    text: `Bước 2: Nộp hồ sơ
- Nộp qua Cổng Dịch vụ công của Cục thuế
- Nộp trực tiếp tại CQT nơi đặt trụ sở kinh doanh
- Đường bưu điện`,
    image: null
  },
  {
    text: `Bước 3: Cơ quan thuế tiếp nhận hồ sơ, kiểm tra và xác nhận việc chuyển đổi phương pháp tính thuế.`,
    image: null
  },
  {
    text: `Bước 4: Thực hiện nghĩa vụ kê khai
- Thực hiện chế độ kế toán theo quy định tại Thông tư số 88/2021/TT-BTC. Ghi chép sổ doanh thu, chi phí, tình hình nộp thuế
- Theo dõi, lưu trữ và cập nhật thông tin (Lưu giữ chứng từ, hóa đơn, sổ sách kế toán tối thiểu 5 năm).
- Liên hệ nhà cung cấp giải pháp để đăng ký HDDT khởi tạo từ MTT, chữ ký số,…
- Kê khai và nộp thuế GTGT, TNCN theo tháng hoặc quý.
   • Theo tháng: ngày 20 của tháng sau (DT từ 50 tỷ trở lên hoặc có nguyện vọng)
   • Theo quý: ngày 30 của quý sau (DT năm trước dưới 50 tỷ).`,
    image: null
  },
  
],
    image: "https://picsum.photos/600/300?random=3",
    icon: <IoSwapHorizontal/>
  },
  {
    id: 4,
    title: "Hỏi nhanh – đáp gọn: 1 phút hiểu ngay về thuế",
    excerpt: "Hướng dẫn chuyển đổi phương pháp tính thuế và nghĩa vụ kê khai...",
    content: [
  {
    text: "Câu 1: Tôi bán cà phê nhỏ tại nhà, doanh thu khoảng 7 triệu/tháng, có phải đóng thuế không? \nTrả lời: Nếu doanh thu dưới 100 triệu đồng/năm (≈ 8,3 triệu/tháng), bạn được miễn thuế GTGT và thuế TNCN, nhưng vẫn phải đăng ký thuế và kê khai theo quy định.",
    image: null
  },
  {
    text: `Câu 2: Tôi chưa có mã số thuế, sau 01/7/2025 có phải đăng ký nữa không? 
          Trả lời: Vẫn phải đăng ký thuế. Cơ quan thuế sẽ cấp MST trùng với số định danh cá nhân trên CCCD. Ví dụ: Chị B kinh doanh quán ăn, chưa từng đăng ký thuế → sau 01/7/2025 nộp hồ sơ đăng ký thuế, MST được cấp chính là số CCCD.`,
    image: null
  },
  {
    text: `Câu 3: Hộ kinh doanh đã có MST, có cần làm thủ tục chuyển sang số định danh cá nhân không?
          Trả lời: Không cần làm gì thêm. Cơ quan thuế tự động cập nhật. Khi kê khai hoặc nộp thuế, chỉ cần dùng số định danh cá nhân/CCCD thay cho MST.`,
  },
  {
    text: `Câu 4: Người nước ngoài cư trú tại Việt Nam thì MST sau 01/7/2025 thế nào?
          Trả lời: Người nước ngoài không có số định danh cá nhân Việt Nam sẽ được cơ quan thuế cấp MST riêng để quản lý thuế, không thay đổi. `,
    image: null
  },
  {
    text: `Câu 5: Sau 01/7/2025, mã số thuế của cá nhân và hộ kinh doanh có bị hủy không?
          Trả lời: Không. MST hiện tại vẫn có giá trị, nhưng sẽ được đồng bộ với số định danh cá nhân (CCCD). Khi làm thủ tục thuế, chỉ cần dùng số định danh cá nhân. Ví dụ: Anh A đã có MST 843xxxxxxx → từ 01/7/2025, khi kê khai thuế chỉ cần ghi số CCCD.`,
    image: null
  }
],
    icon: <FontAwesomeIcon icon={faCircleQuestion} />
  }
];

export default function BlogList({ views }) {
  return (
    <section className="blog-list">
       {blogs.map(blog => (
    <BlogItem key={blog.id} blog={blog} id={`blog-${blog.id}` } views={views[blog.id] || 0} />
  ))}
    </section>
  );
}
