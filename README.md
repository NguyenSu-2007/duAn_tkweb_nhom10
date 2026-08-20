# Travel Booking Website

Dự án **Travel Booking** — ứng dụng trực tuyến hỗ trợ đặt tour du lịch và tùy chỉnh gói chuyến đi.

*   **URL bản chạy công khai:** *dán link GitHub Pages của bạn vào đúng dòng này.*
### 👥 Đối tượng hướng đến
*   **Khách du lịch tự túc:** Những người muốn chủ động lên kế hoạch và tìm kiếm các gói tour có sẵn.
*   **Người thích cá nhân hóa lịch trình:** Người dùng có nhu cầu tự thiết kế, tùy chỉnh gói dịch vụ (Build Package) theo sở thích và ngân sách riêng.
*   **Doanh nghiệp lữ hành:** Đơn vị cần một nền tảng tối giản, tường minh để tiếp cận khách hàng tiềm năng qua kênh trực tuyến.

### 💎 Giá trị mang lại
*   **Tiết kiệm thời gian:** Quy trình tìm kiếm và đặt tour được rút gọn tối đa thông qua bộ lọc thông minh theo khoảng giá và điểm đến.
*   **Trải nghiệm mượt mà:** Giao diện đáp ứng tốt trên mọi thiết bị (Responsive design), hỗ trợ tương tác tức thì và tính toán chi phí theo thời gian thực (Realtime).
*   **Khả năng tiếp cận cao (Accessibility):** Tuân thủ các quy chuẩn ARIA và điều hướng bằng bàn phím giúp mọi đối tượng người dùng, bao gồm cả người khuyết tật, đều có thể dễ dàng sử dụng website.
---

## 1. Hướng dẫn chạy dự án

```bash
# Cài đặt các phụ thuộc
npm install

# Chạy môi trường phát triển (để Tailwind liên tục sinh class mới)
npm run dev
```

> ⚠️ **Lưu ý:** 
> * Mở `index.html` bằng **Live Server** của VS Code. Không nhấp đúp trực tiếp vào file.
> * File `dist/output.css` đã được build sẵn giúp trang hiển thị đúng giao diện ngay cả khi thiết bị chưa cài đặt môi trường.

---

## 2. Hiện trạng mã nguồn

| Thành phần | Trạng thái | Mô tả |
| :--- | :---: | :--- |
| **Cấu hình Tailwind** | Hoàn thành | Đầy đủ cấu hình và script dev / build. |
| **`src/input.css`** | Hoàn thành | Chứa token, component và toàn bộ CSS. Không cần viết thêm CSS. |
| **Các file HTML** | Hoàn thành | Đã responsive: `index.html`, `about.html`, `package-archive.html` và thư mục `Package-Detail-Pages/`. |
| **Markup tính năng** | Chờ xử lý | Giao diện navbar dropdown, modal, tabs, bộ lọc đã có sẵn nhưng chưa tương tác được. |
| **`js/main.js`** | Hoàn thành | Điểm khởi động hệ thống, gọi các hàm khởi tạo `init`. |
| **JavaScript tính năng** | xử lý được | Các file `| booking.js buil-package.js 

---

---

## 3. Cấu trúc thư mục dự án

├── index.html                           # Trang chủ & Giao diện Modal Build Pac
├── about.html                           # Trang giới thiệu thông tin dự án
├── package-archive.html                 # Trang danh sách tour và bộ lọc sản phẩm
├── Package-Detail-Pages/                # Thư mục chứa các trang chi tiết tour
│   ├── tour information.html            # Chi tiết tour - Tab Thông tin tổng quan
│   ├── tour plan.html                   # Chi tiết tour - Tab Lịch trình chuyến đi
│   ├── tour location.html               # Chi tiết tour - Tab Vị trí địa lý
│   └── Tour Gallery.html                # Chi tiết tour - Tab Thư viện hình ảnh
├── src/
│   └── input.css                        # Token và component CSS gốc của Tailwind
├── dist/
│   └── output.css                       # File CSS thành phẩm sau khi build (KHÔNG SỬA TAY)
├── js/
│   ├── main.js                          # File kích hoạt script chính cho toàn
(booking.js buil-package.js ) 

     
