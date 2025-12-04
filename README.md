
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

## 2. Lấy API Key & Cấu hình Dịch vụ

### A. Lấy Google Gemini API Key
1.  Truy cập [Google AI Studio](https://aistudio.google.com/app/apikey).
2.  Đăng nhập và nhấp vào **"Create API key"**.
3.  Lưu lại key này.

### B. Cấu hình Supabase (Cơ sở dữ liệu & Đăng nhập)
1.  Truy cập [supabase.com](https://supabase.com) và tạo một Project mới.
2.  **Lấy Key kết nối:**
    *   Vào **Settings** (Bánh răng) -> **API**.
    *   Copy **Project URL**.
    *   Copy **anon public** Key.
3.  **Bật Đăng ký qua Email:**
    *   Vào **Authentication** -> **Providers** -> **Email**.
    *   Bật (Enable) nhà cung cấp này.
    *   **Bỏ chọn** mục **"Confirm email"** (Khuyên dùng để test nhanh, không cần xác thực).
4.  **Cấu hình URL Khôi phục Mật khẩu (QUAN TRỌNG):**
    *   Vẫn trong mục **Authentication**, vào **URL Configuration**.
    *   Trong ô **Site URL**, hãy điền địa chỉ trang web của bạn (VD: `http://localhost:5173` khi chạy local, hoặc `https://your-app-name.vercel.app` khi đã deploy).
    *   Bấm **Save**.
5.  **Cập nhật Cấu trúc Bảng (Columns):**
    *   Vào **Table Editor**:
    *   **Bảng `exam_results`**: Thêm cột `exam_type` (Kiểu: `text`).
    *   **Bảng `question_attempts`**: Thêm cột `grade` (Kiểu: `text`) và `exam_type` (Kiểu: `text`).
6.  **Cấu hình Bảo mật Dữ liệu (RLS Policies):**
    *   Vào **Authentication** -> **Policies**.
    *   **Đối với bảng `profiles` (Lưu ý khác biệt):**
        *   **Quyền ĐỌC (SELECT):** 
            *   Bấm "Create policy" -> "From a template".
            *   Chọn mẫu **"Enable users to view their own data only"**.
            *   **QUAN TRỌNG:** Ở ô `USING expression`, hãy chắc chắn nó là `auth.uid() = id` (vì bảng này dùng cột `id` làm khóa chính, không phải `user_id`).
            *   Bấm Save.
        *   **Quyền SỬA (UPDATE):**
            *   Bấm "Create policy". (Không chọn mẫu table joins).
            *   Đặt tên: "Users can update own profile".
            *   Policy Command: **UPDATE**. Target roles: **authenticated**.
            *   Ở ô `USING expression`, điền: `auth.uid() = id`.
            *   Bấm Save.
    *   **Đối với các bảng khác (`exam_results`, `question_attempts`, `user_progress`):**
        *   **Policy 1 (GHI):** Bấm "Create policy" -> "From a template" -> Chọn mẫu **"Enable INSERT for authenticated users only"**. Save.
        *   **Policy 2 (ĐỌC):** Bấm "Create policy" -> "From a template" -> Chọn mẫu **"Enable users to view their own data only"**. 
        *   **Lưu ý:** Với các bảng này, điều kiện mặc định `auth.uid() = user_id` là **ĐÚNG**, không cần sửa.

---

## 3. Chạy dự án trên máy tính (Local Development)

### Bước 1: Tải mã nguồn & Cài đặt

```bash
git clone <URL_KHO_LUU_TRU_CUA_BAN>
cd <TEN_THU_MUC_DU_AN>
npm install
```

### Bước 2: Cấu hình biến môi trường (.env)

Tạo file `.env` và điền thông tin:

```env
VITE_API_KEY=AIzaSy...
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5c...
```

### Bước 3: Khởi động

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

### Bước 3: Nhập Biến môi trường
Tại mục **Environment Variables**, thêm 3 biến:

| Name | Value |
| :--- | :--- |
| `VITE_API_KEY` | Key Google AI Studio |
| `VITE_SUPABASE_URL` | URL Supabase |
| `VITE_SUPABASE_ANON_KEY` | Anon Key Supabase |

### Bước 4: Deploy
Bấm **Deploy**. Sau khoảng 1 phút, web của bạn sẽ chạy online!

---

## 5. Cấu hình Tên miền riêng (Custom Domain)

1.  Trên Vercel, vào **Settings** -> **Domains**.
2.  Nhập tên miền của bạn và bấm **Add**.
3.  Vercel sẽ cung cấp thông số DNS (A Record, CNAME).
4.  Đăng nhập vào trang quản lý tên miền và thêm các bản ghi DNS này vào.

---

## 6. Xử lý lỗi thường gặp (Troubleshooting)

### Lỗi: "Email signups are disabled"
Vào Supabase -> Authentication -> Providers -> Email -> Bật "Enable Email provider".

### Lỗi: Tài khoản đăng ký xong nhưng bảng `profiles` trống rỗng
Điều này là bình thường nếu bạn chưa cài đặt Trigger. Để tự động đồng bộ user mới sang bảng profiles, hãy chạy lệnh SQL sau trong **SQL Editor** của Supabase:

```sql
-- 1. Thêm cột email vào bảng profiles (nếu chưa có)
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS email text;

-- 2. Tạo hàm xử lý (Copy email và thông tin sang profiles)
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (new.id, new.email, new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'avatar_url');
  return new;
end;
$$;

-- 3. Kích hoạt Trigger
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

### Lỗi: "Error fetching user data" hoặc "Column does not exist"
Lỗi này xảy ra khi cơ sở dữ liệu Supabase thiếu các cột mới (`grade`, `exam_type`) hoặc chưa cấp quyền ĐỌC (SELECT) cho người dùng.

**Cách khắc phục:**
*   Kiểm tra lại **Bước 2.5 và 2.6** ở trên để đảm bảo bạn đã thêm đủ cột và cấu hình RLS Policy chính xác.
