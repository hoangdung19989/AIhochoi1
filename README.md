
# OnLuyen AI Tutor - Hướng dẫn Cài đặt & Triển khai

Chào mừng bạn đến với OnLuyen AI Tutor! Dự án này đã được cấu trúc lại để sử dụng **Vite**, một công cụ xây dựng hiện đại, giúp tối ưu hóa hiệu năng và bảo mật.

Dưới đây là hướng dẫn đầy đủ để bạn có thể chạy dự án trên máy tính cá nhân (local) và triển khai lên nền tảng **Vercel** một cách chuyên nghiệp.

---

## 1. Yêu cầu hệ thống

- **Node.js**: Phiên bản 18.x trở lên.
- **npm** (hoặc yarn, pnpm): Trình quản lý gói của Node.js.
- **Tài khoản GitHub**: Để lưu trữ mã nguồn và kết nối với Vercel.
- **Tài khoản Vercel**: Để triển khai ứng dụng.

---

## 2. Lấy API Key (Google Gemini & Supabase)

Dự án này cần 2 dịch vụ để hoạt động:
1.  **Google Gemini API**: Để tạo nội dung học tập thông minh.
2.  **Supabase**: Để quản lý tài khoản người dùng và đăng nhập.

### A. Lấy Google Gemini API Key
1.  Truy cập [Google AI Studio](https://aistudio.google.com/app/apikey).
2.  Đăng nhập và nhấp vào **"Create API key"**.
3.  Lưu lại key này.

### B. Cấu hình Supabase (Cơ sở dữ liệu & Đăng nhập)
1.  Truy cập [supabase.com](https://supabase.com) và tạo một Project mới.
2.  **Tắt xác thực Email (Khuyên dùng để test nhanh):**
    *   Vào Dashboard -> **Authentication** -> **Providers** -> **Email**.
    *   Tắt (Disable) mục **"Confirm email"**.
    *   Bấm Save.
3.  **Lấy Key kết nối:**
    *   Vào **Settings** (Bánh răng) -> **API**.
    *   Copy **Project URL**.
    *   Copy **anon public** Key.
4.  **QUAN TRỌNG: Cập nhật Cấu trúc Bảng (Columns)**
    *   Để tính năng Lộ trình học cá nhân hóa hoạt động chính xác (phân loại theo Lớp và Loại bài thi), bạn cần thêm các cột sau vào bảng.
    *   Vào **Table Editor**:
    *   **Bảng `exam_results`**:
        *   Thêm cột: `exam_type` (Kiểu: `text`). Dùng để lưu 'quiz', 'mock', hoặc 'practice'.
    *   **Bảng `question_attempts`**:
        *   Thêm cột: `grade` (Kiểu: `text`). Dùng để lưu 'Lớp 6', 'Lớp 9', v.v.
        *   Thêm cột: `exam_type` (Kiểu: `text`).

5.  **Cấu hình Bảo mật Dữ liệu (RLS Policies)**
    *   Vào **Authentication** -> **Policies**.
    *   Chọn bảng (ví dụ `exam_results`).
    *   Bấm **"Create policy"** -> Chọn **"From a template"**.
        *   **GHI (INSERT):** Chọn mẫu **"Enable INSERT for authenticated users only"**. Save.
        *   **ĐỌC (SELECT):** Chọn mẫu **"Enable users to view their own data only"**. Save.
    *   Làm tương tự cho cả 3 bảng: `exam_results`, `question_attempts`, `user_progress`.

---

## 3. Chạy dự án trên máy tính (Local Development)

### Bước 1: Tải mã nguồn về

Mở Terminal và clone kho mã nguồn:

```bash
git clone <URL_KHO_LUU_TRU_CUA_BAN>
cd <TEN_THU_MUC_DU_AN>
```

### Bước 2: Cài đặt thư viện

```bash
npm install
```

### Bước 3: Cấu hình biến môi trường (.env)

Tạo file `.env` trong thư mục gốc và điền thông tin:

```env
VITE_API_KEY=AIzaSy... (Key Google của bạn)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5c... (Key Supabase anon)
```

### Bước 4: Khởi động

```bash
npm run dev
```
Truy cập `http://localhost:5173`.

---

## 4. Hướng dẫn triển khai lên Vercel

### Bước 1: Đẩy code lên GitHub
Đảm bảo bạn đã commit và push code lên GitHub.

### Bước 2: Tạo dự án trên Vercel
1.  Vào [vercel.com](https://vercel.com) -> **Add New...** -> **Project**.
2.  Import kho lưu trữ GitHub của bạn.

### Bước 3: Nhập Biến môi trường (Environment Variables)
Đây là bước quan trọng nhất. Tại màn hình "Configure Project", mục **Environment Variables**, hãy thêm đủ 3 biến sau:

| Name | Value |
| :--- | :--- |
| `VITE_API_KEY` | Key lấy từ Google AI Studio |
| `VITE_SUPABASE_URL` | URL lấy từ Supabase Settings |
| `VITE_SUPABASE_ANON_KEY` | Anon Key lấy từ Supabase Settings |

### Bước 4: Deploy
Bấm **Deploy**. Sau khoảng 1 phút, web của bạn sẽ chạy online!

---

## 5. Cấu hình Tên miền riêng (Custom Domain)

1.  Trên Vercel, vào **Settings** -> **Domains**.
2.  Nhập tên miền bạn đã mua (ví dụ: `onluyen.vn`) và bấm **Add**.
3.  Vercel sẽ cung cấp thông số DNS (A Record và CNAME).
4.  Đăng nhập vào trang quản lý tên miền (nơi bạn mua domain) và thêm các bản ghi DNS này vào.
5.  Chờ vài phút để hệ thống cập nhật và cấp chứng chỉ bảo mật (SSL).
---

## 6. Xử lý lỗi thường gặp (Troubleshooting)

### Lỗi: "Email signups are disabled"
Lỗi này xảy ra khi tính năng đăng ký bằng email chưa được bật trong dự án Supabase của bạn.

**Cách khắc phục:**
1.  Đăng nhập vào [Supabase](https://supabase.com).
2.  Vào dự án của bạn, ở thanh menu bên trái, chọn **Authentication** (biểu tượng hình người).
3.  Trong mục **Configuration**, chọn **Providers**.
4.  Tìm nhà cung cấp **Email** và đảm bảo công tắc (toggle) đang ở trạng thái **Bật (Enabled)**. Nếu đang tắt, hãy bấm để bật nó lên.
5.  Sau khi bật, trang web của bạn sẽ cho phép đăng ký ngay lập tức mà không cần deploy lại.

### Lỗi: "Error fetching user data: [object Object]" hoặc "Column does not exist"
Lỗi này thường xảy ra khi cơ sở dữ liệu Supabase của bạn thiếu các cột mới được thêm vào gần đây (`grade`, `exam_type`).

**Cách khắc phục:**
Vào Supabase -> **Table Editor** và thêm thủ công các cột sau (nếu chưa có):
*   **Bảng `exam_results`**: thêm cột `exam_type` (Kiểu: `text`).
*   **Bảng `question_attempts`**: thêm cột `grade` (Kiểu: `text`) và cột `exam_type` (Kiểu: `text`).
*   Hãy đảm bảo bạn đã tạo Policy (RLS) cho phép "SELECT" (Đọc) cho người dùng đã đăng nhập (xem mục 2.B ở trên).
