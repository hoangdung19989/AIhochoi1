



import type { Subject, Module, Course, Grade, PhetSimulation, LabCategory, TestSubject, TestGrade, SelfPracticeSubject, PracticeChapter, MockExamSubject, LectureSubject, TestType, LessonLookupInfo } from '../types';
import { 
    BookOpenIcon, 
    BeakerIcon, 
    CalculatorIcon, 
    GlobeAltIcon, 
    CodeBracketIcon, 
    ChatBubbleLeftRightIcon, 
    DocumentTextIcon, 
    TowerIcon, 
    LeafIcon, 
    HistoryIcon, 
    ScienceIcon, 
    VideoCameraIcon, 
    PencilSquareIcon, 
    ClockIcon, 
    AcademicCapIcon
} from './icons';

// ===================================================================================
// ==  QUAN TRỌNG: ĐIỀN API KEY CỦA BẠN VÀO ĐÂY ĐỂ CHẠY THỬ NGHIỆM  ==
// ===================================================================================
// Môi trường Studio này ẩn file .env, vì vậy hãy điền trực tiếp vào đây.
// Khi deploy lên Vercel, hệ thống sẽ tự động dùng biến môi trường đã cấu hình.
export const API_KEYS = {
    GEMINI_API_KEY: "YOUR_GEMINI_API_KEY_HERE",
    SUPABASE_URL: "https://zyawfszzjzspdgnflmya.supabase.co",
    SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5YXdmc3p6anpzcGRnbmZsbXlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNTAyMTMsImV4cCI6MjA3OTcyNjIxM30.vwolnNKCmhiBGGQ-_aefnZllkwsGrzJdqHcg5boDs-Q",
};
// ===================================================================================


export const SUBJECTS: Subject[] = [
  {
    id: 'math',
    name: 'Toán học',
    description: 'Giải phương trình, hình học và các khái niệm toán học.',
    color: 'bg-sky-500',
    icon: CalculatorIcon,
  },
  {
    id: 'physics',
    name: 'Vật lý',
    description: 'Khám phá các định luật về chuyển động, năng lượng và vũ trụ.',
    color: 'bg-indigo-500',
    icon: BookOpenIcon,
  },
  {
    id: 'chemistry',
    name: 'Hóa học',
    description: 'Tìm hiểu về các nguyên tố, hợp chất và phản ứng hóa học.',
    color: 'bg-emerald-500',
    icon: BeakerIcon,
  },
  {
    id: 'english',
    name: 'Tiếng Anh',
    description: 'Cải thiện ngữ pháp, từ vựng và kỹ năng viết.',
    color: 'bg-rose-500',
    icon: GlobeAltIcon,
  },
  {
    id: 'literature',
    name: 'Văn học',
    description: 'Phân tích tác phẩm, tìm hiểu tác giả và các trào lưu văn học.',
    color: 'bg-amber-500',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    id: 'programming',
    name: 'Tin học',
    description: 'Học các khái niệm lập trình, thuật toán và cấu trúc dữ liệu.',
    color: 'bg-fuchsia-500',
    icon: CodeBracketIcon,
  },
];

export const LECTURE_SUBJECTS: LectureSubject[] = [
  {
    id: 'lecture-math',
    name: 'Toán',
    icon: CalculatorIcon,
    description: 'Video bài giảng Đại số và Hình học trực quan, dễ hiểu.',
    tags: ['Lớp 6-9', 'Bám sát SGK', 'Video 4K'],
    color: 'bg-blue-500',
  },
  {
    id: 'lecture-literature',
    name: 'Ngữ văn',
    icon: DocumentTextIcon,
    description: 'Phân tích tác phẩm văn học và rèn luyện kỹ năng Tiếng Việt.',
    tags: ['Soạn văn', 'Văn mẫu', 'Tác giả'],
    color: 'bg-amber-500',
  },
  {
    id: 'lecture-english',
    name: 'Tiếng Anh',
    icon: TowerIcon,
    description: 'Học từ vựng, ngữ pháp và phát âm chuẩn bản xứ.',
    tags: ['Global Success', 'Nghe - Nói', 'Ngữ pháp'],
    color: 'bg-rose-500',
  },
    {
    id: 'lecture-science',
    name: 'Khoa học tự nhiên',
    icon: ScienceIcon,
    description: 'Bài giảng tích hợp Vật lí, Hóa học, Sinh học theo chương trình mới.',
    tags: ['Lớp 6-9', 'Thí nghiệm ảo', 'Video 4K'],
    color: 'bg-green-500',
  },
  {
    id: 'lecture-history-geo',
    name: 'Lịch sử và Địa lí',
    icon: HistoryIcon,
    description: 'Khám phá các sự kiện lịch sử và đặc điểm địa lí Việt Nam & Thế giới.',
    tags: ['Lớp 6-9', 'Bản đồ số', 'Dòng thời gian'],
    color: 'bg-orange-500',
  },
];


export const MODULES: Module[] = [
  {
    id: 1,
    title: 'Bài giảng',
    description: 'Video bài giảng chi tiết, sinh động, giúp học sinh tự học và ôn tập hiệu quả.',
    icon: VideoCameraIcon,
    color: 'bg-blue-500',
    tags: ['Video', 'AI NotebookLM', 'Trực quan']
  },
  {
    id: 2,
    title: 'Tự luyện',
    description: 'Bài luyện được sắp xếp theo từng đơn vị kiến thức, từ dễ đến khó.',
    icon: PencilSquareIcon,
    color: 'bg-emerald-500',
    tags: ['Theo chủ đề', 'Luyện tập', 'Đáp án chi tiết']
  },
  {
    id: 3,
    title: 'Kiểm tra',
    description: 'Tập hợp đề thi, kiểm tra của các trường trên toàn tỉnh Tuyên Quang.',
    icon: ClockIcon,
    color: 'bg-orange-500',
    tags: ['15 Phút', '1 Tiết', 'Học Kỳ']
  },
  {
    id: 4,
    title: 'Thi thử',
    description: 'Các kì thi thử do trường THCS Minh Thanh tổ chức.',
    icon: AcademicCapIcon,
    color: 'bg-purple-500',
    tags: ['Vào 10', 'Áp lực thời gian', 'Tổng hợp']
  },
  {
    id: 5,
    title: 'Phòng thí nghiệm',
    description: 'Phần mềm mô phỏng thí nghiệm giúp hiểu sâu, nhớ lâu các hiện tượng khoa học.',
    icon: BeakerIcon,
    color: 'bg-pink-500',
    tags: ['Mô phỏng PhET', 'Tương tác', 'Thực hành']
  },
];

export const SELF_PRACTICE_SUBJECTS: SelfPracticeSubject[] = [
  {
    id: 'sp-math',
    name: 'Toán',
    description: 'Đại số, Hình học và Thống kê.',
    icon: CalculatorIcon,
    tags: ['Lớp 6 - 9', 'Đồng bộ SGK'],
    color: 'bg-blue-500',
  },
  {
    id: 'sp-literature',
    name: 'Ngữ văn',
    description: 'Đọc hiểu văn bản và Tiếng Việt.',
    icon: DocumentTextIcon,
    tags: ['Lớp 6 - 9', 'Đồng bộ SGK'],
    color: 'bg-amber-500',
  },
  {
    id: 'sp-english',
    name: 'Tiếng Anh',
    description: 'Từ vựng, Ngữ pháp và Kỹ năng.',
    icon: TowerIcon,
    tags: ['Lớp 6 - 9', 'Đồng bộ SGK'],
    color: 'bg-rose-500',
  },
  {
    id: 'sp-science',
    name: 'Khoa học tự nhiên',
    description: 'Lý, Hóa, Sinh tích hợp.',
    icon: ScienceIcon,
    tags: ['Lớp 6 - 9', 'Đồng bộ SGK'],
    color: 'bg-green-500',
  },
  {
    id: 'sp-history-geo',
    name: 'Lịch sử và Địa lí',
    description: 'Khám phá thế giới và quá khứ.',
    icon: HistoryIcon,
    tags: ['Lớp 6 - 9', 'Đồng bộ SGK'],
    color: 'bg-orange-500',
  },
];

export const GRADES_BY_SUBJECT: Record<string, Grade[]> = {
  'lecture-math': [
    { id: 'math-6', name: 'Toán Lớp 6', courseId: 'math-6' },
    { id: 'math-7', name: 'Toán Lớp 7', courseId: 'math-7' },
    { id: 'math-8', name: 'Toán Lớp 8', courseId: 'math-8' },
    { id: 'math-9', name: 'Toán Lớp 9', courseId: 'math-9' },
  ],
  'lecture-literature': [
    { id: 'lit-6', name: 'Ngữ văn Lớp 6', courseId: 'lit-6' },
    { id: 'lit-7', name: 'Ngữ văn Lớp 7', courseId: 'lit-7' },
    { id: 'lit-8', name: 'Ngữ văn Lớp 8', courseId: 'lit-8' },
    { id: 'lit-9', name: 'Ngữ văn Lớp 9', courseId: 'lit-9' },
  ],
  'lecture-english': [
    { id: 'eng-6', name: 'Tiếng Anh Lớp 6', courseId: 'eng-6' },
    { id: 'eng-7', name: 'Tiếng Anh Lớp 7', courseId: 'eng-7' },
    { id: 'eng-8', name: 'Tiếng Anh Lớp 8', courseId: 'eng-8' },
    { id: 'eng-9', name: 'Tiếng Anh Lớp 9', courseId: 'eng-9' },
  ],
  'lecture-science': [
    { id: 'sci-6', name: 'KHTN Lớp 6', courseId: 'sci-6' },
    { id: 'sci-7', name: 'KHTN Lớp 7', courseId: 'sci-7' },
    { id: 'sci-8', name: 'KHTN Lớp 8', courseId: 'sci-8' },
    { id: 'sci-9', name: 'KHTN Lớp 9', courseId: 'sci-9' },
  ],
  'lecture-history-geo': [
    { id: 'hg-6', name: 'LS & ĐL Lớp 6', courseId: 'hg-6' },
    { id: 'hg-7', name: 'LS & ĐL Lớp 7', courseId: 'hg-7' },
    { id: 'hg-8', name: 'LS & ĐL Lớp 8', courseId: 'hg-8' },
    { id: 'hg-9', name: 'LS & ĐL Lớp 9', courseId: 'hg-9' },
  ],
};


// --- START OF ALL COURSE DATA ---

// --- MATH ---
const MATH_6_COURSE_DATA: Course = { id: 'math-6', subjectName: 'Toán', gradeLevel: 6, title: 'Kết nối tri thức với cuộc sống', chapters: [ { id: 'm6-c1', title: 'CHƯƠNG I. TẬP HỢP CÁC SỐ TỰ NHIÊN.', lessons: [ { id: 'm6-c1-l1', title: 'Bài 1. Tập hợp.', type: 'video', videoUrl: 'https://vcos.cloudstorage.com.vn/1-bucket-1111/T%E1%BA%ADp_h%E1%BB%A3p_c%C3%A1c_s%E1%BB%91_t%E1%BB%B1_nhi%C3%AAn.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=atm305057-s3user%2F20251205%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251205T175548Z&X-Amz-Expires=518352&X-Amz-Signature=fded2c999c06332b12254f3459c77de18beb35bee756642d65f77fe9527a2dd1&X-Amz-SignedHeaders=host' }, { id: 'm6-c1-l2', title: 'Bài 2. Cách ghi số tự nhiên.', type: 'video', videoUrl: 'https://vcos.cloudstorage.com.vn/1-bucket-1111/Gi%E1%BA%A3i_M%C3%A3_Nh%E1%BB%AFng_Con_S%E1%BB%91.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=atm305057-s3user%2F20251205%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251205T175759Z&X-Amz-Expires=518341&X-Amz-Signature=3ab78c41dcc650f0fac6e34bf289c332b08822ce26323bc9de61c29b20116a27&X-Amz-SignedHeaders=host' }, { id: 'm6-c1-l3', title: 'Bài 3. Thứ tự trong tập hợp các số tự nhiên.', type: 'video', videoUrl: 'https://vcos.cloudstorage.com.vn/1-bucket-1111/Th%E1%BB%A9_T%E1%BB%B1_C%C3%A1c_S%E1%BB%91_T%E1%BB%B1_Nhi%C3%AAn.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=atm305057-s3user%2F20251205%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251205T175729Z&X-Amz-Expires=518370&X-Amz-Signature=b48895172b1ed75ba75b16d76fc3561f1134e302b0b5d15a99f1abf860829377&X-Amz-SignedHeaders=host' }, { id: 'm6-c1-l4', title: 'Bài 4. Phép cộng và phép trừ số tự nhiên.', type: 'video', videoUrl: 'https://vcos.cloudstorage.com.vn/1-bucket-1111/Ph%C3%A9p_C%E1%BB%99ng_%26_Tr%E1%BB%AB_S%E1%BB%91_T%E1%BB%B1_Nhi%C3%AAn.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=atm305057-s3user%2F20251205%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251205T175830Z&X-Amz-Expires=518369&X-Amz-Signature=80ae1411a28f12cf4801c1dbdb94d7c6aa10f686f61f1b8e98e46455365c7a50&X-Amz-SignedHeaders=host' }, { id: 'm6-c1-l5', title: 'Bài 5. Phép nhân và phép chia số tự nhiên.', type: 'video', videoUrl: 'https://vcos.cloudstorage.com.vn/1-bucket-1111/B%C3%A0i_5__Ph%C3%A9p_nh%C3%A2n_v%C3%A0_Ph%C3%A9p_chia.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=atm305057-s3user%2F20251205%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251205T175853Z&X-Amz-Expires=518346&X-Amz-Signature=a5eb4145da16701db9e6e52de337545c3224974108b2eb039a1760ceee6ed97c&X-Amz-SignedHeaders=host' }, { id: 'm6-c1-l6', title: 'Bài 6. Luỹ thừa với số mũ tự nhiên.', type: 'video', videoUrl: 'https://vcos.cloudstorage.com.vn/1-bucket-1111/L%C5%A9y_th%E1%BB%ABa_v%E1%BB%9Bi_S%E1%BB%91_m%C5%A9_T%E1%BB%B1_nhi%C3%AAn.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=atm305057-s3user%2F20251205%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251205T175920Z&X-Amz-Expires=518379&X-Amz-Signature=eac4341d18d4fb430d3ed0de8db61ecd3c7c409446855d681e3a4ffd36e3855a&X-Amz-SignedHeaders=host' }, { id: 'm6-c1-l7', title: 'Bài 7. Thứ tự thực hiện các phép tính.', type: 'video', videoUrl: 'https://vcos.cloudstorage.com.vn/1-bucket-1111/TH%E1%BB%A8_T%E1%BB%B0_TH%E1%BB%B0C_HI%E1%BB%86N_C%C3%81C_PH%C3%89P_T%C3%8DNH.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=atm305057-s3user%2F20251205%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251205T175944Z&X-Amz-Expires=518355&X-Amz-Signature=d2f94c39af968ae06435a61485069e23962cba249d7508d3d5630d25713fbee8&X-Amz-SignedHeaders=host' }, ] }, { id: 'm6-c2', title: 'CHƯƠNG II. TÍNH CHIA HẾT TRONG TẬP HỢP CÁC SỐ TỰ NHIÊN.', lessons: [ { id: 'm6-c2-l8', title: 'Bài 8. Quan hệ chia hết và tính chất.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c2-l9', title: 'Bài 9. Dấu hiệu chia hết.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c2-l10', title: 'Bài 10. Số nguyên tố.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c2-l11', title: 'Bài 11. Ước chung. Ước chung lớn nhất.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c2-l12', title: 'Bài 12. Bội chung. Bội chung nhỏ nhất.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm6-c3', title: 'CHƯƠNG III. SỐ NGUYÊN.', lessons: [ { id: 'm6-c3-l13', title: 'Bài 13. Tập hợp các số nguyên.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c3-l14', title: 'Bài 14. Phép cộng và phép trừ số nguyên.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c3-l15', title: 'Bài 15. Quy tắc dấu ngoặc.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c3-l16', title: 'Bài 16. Phép nhân số nguyên.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c3-l17', title: 'Bài 17. Phép chia hết. Ước và bội của một số nguyên.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm6-c4', title: 'CHƯƠNG IV. MỘT SỐ HÌNH PHẲNG TRONG THỰC TIỄN.', lessons: [ { id: 'm6-c4-l18', title: 'Bài 18. Hình tam giác đều. Hình vuông. Hình lục giác đều.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c4-l19', title: 'Bài 19. Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c4-l20', title: 'Bài 20. Chu vi và diện tích của một số tứ giác đã học.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm6-c5', title: 'CHƯƠNG V. TÍNH ĐỐI XỨNG CỦA HÌNH PHẲNG TRONG TỰ NHIÊN.', lessons: [ { id: 'm6-c5-l21', title: 'Bài 21. Hình có trục đối xứng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c5-l22', title: 'Bài 22. Hình có tâm đối xứng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm6-c6', title: 'CHƯƠNG VI. PHÂN SỐ.', lessons: [ { id: 'm6-c6-l23', title: 'Bài 23. Mở rộng phân số. Phân số bằng nhau.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c6-l24', title: 'Bài 24. So sánh phân số. Hỗn số dương.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c6-l25', title: 'Bài 25. Phép cộng và phép trừ phân số.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c6-l26', title: 'Bài 26. Phép nhân và phép chia phân số.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c6-l27', title: 'Bài 27. Hai bài toán về phân số.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm6-c7', title: 'CHƯƠNG VII. SỐ THẬP PHÂN.', lessons: [ { id: 'm6-c7-l28', title: 'Bài 28. Số thập phân.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c7-l29', title: 'Bài 29. Tính toán với số thập phân.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c7-l30', title: 'Bài 30. Làm tròn và ước lượng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c7-l31', title: 'Bài 31. Một số bài toán về tỉ số và tỉ số phần trăm.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm6-c8', title: 'CHƯƠNG VIII. NHỮNG HÌNH HÌNH HỌC CƠ BẢN.', lessons: [ { id: 'm6-c8-l32', title: 'Bài 32. Điểm và đường thẳng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c8-l33', title: 'Bài 33. Điểm nằm giữa hai điểm. Tia.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c8-l34', title: 'Bài 34. Đoạn thẳng. Độ dài đoạn thẳng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c8-l35', title: 'Bài 35. Trung điểm của đoạn thẳng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c8-l36', title: 'Bài 36. Góc.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c8-l37', title: 'Bài 37. Số đo góc.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm6-c9', title: 'CHƯƠNG IX. DỮ LIỆU VÀ XÁC SUẤT THỰC NGHIỆM.', lessons: [ { id: 'm6-c9-l38', title: 'Bài 38. Dữ liệu và thu thập dữ liệu.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c9-l39', title: 'Bài 39. Bảng thống kê và biểu đồ tranh.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c9-l40', title: 'Bài 40. Biểu đồ cột.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c9-l41', title: 'Bài 41. Biểu đồ cột kép.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c9-l42', title: 'Bài 42. Kết quả có thể và sự kiện trong trò chơi, thí nghiệm.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm6-c9-l43', title: 'Bài 43. Xác suất thực nghiệm.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, ] };
const MATH_7_COURSE_DATA: Course = { id: 'math-7', subjectName: 'Toán', gradeLevel: 7, title: 'Kết nối tri thức với cuộc sống', chapters: [ { id: 'm7-c1', title: 'Chương I. SỐ HỮU TỈ.', lessons: [ { id: 'm7-c1-l1', title: 'Bài 1. Tập hợp các số hữu tỉ.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c1-l2', title: 'Bài 2. Cộng, trừ, nhân, chia số hữu tỉ.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c1-l3', title: 'Bài 3. Luỹ thừa với số mũ tự nhiên của một số hữu tỉ.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c1-l4', title: 'Bài 4. Thứ tự thực hiện các phép tính. Quy tắc chuyển vế.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm7-c2', title: 'Chương II. SỐ THỰC.', lessons: [ { id: 'm7-c2-l5', title: 'Bài 5. Làm quen với số thập phân vô hạn tuần hoàn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c2-l6', title: 'Bài 6. Số vô tỉ. Căn bậc hai số học.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c2-l7', title: 'Bài 7. Tập hợp các số thực.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm7-c3', title: 'Chương III. GÓC VÀ ĐƯỜNG THẲNG SONG SONG.', lessons: [ { id: 'm7-c3-l8', title: 'Bài 8. Góc ở vị trí đặc biệt. Tia phân giác của một góc.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c3-l9', title: 'Bài 9. Hai đường thẳng song song và dấu hiệu nhận biết.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c3-l10', title: 'Bài 10. Tiên đề Euclid. Tính chất của hai đường thẳng song song.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c3-l11', title: 'Bài 11. Định lí và chứng minh định lí.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm7-c4', title: 'Chương IV. TAM GIÁC BẰNG NHAU.', lessons: [ { id: 'm7-c4-l12', title: 'Bài 12. Tổng các góc trong một tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c4-l13', title: 'Bài 13. Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất của tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c4-l14', title: 'Bài 14. Trường hợp bằng nhau thứ hai và thứ ba của tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c4-l15', title: 'Bài 15. Các trường hợp bằng nhau của tam giác vuông.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c4-l16', title: 'Bài 16. Tam giác cân. Đường trung trực của đoạn thẳng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm7-c5', title: 'Chương V. THU THẬP VÀ BIỂU DIỄN DỮ LIỆU.', lessons: [ { id: 'm7-c5-l17', title: 'Bài 17. Thu thập và phân loại dữ liệu.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c5-l18', title: 'Bài 18. Biểu đồ hình quạt tròn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c5-l19', title: 'Bài 19. Biểu đồ đoạn thẳng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm7-c6', title: 'Chương VI. TỈ LỆ THỨC VÀ ĐẠI LƯỢNG TỈ LỆ.', lessons: [ { id: 'm7-c6-l20', title: 'Bài 20. Tỉ lệ thức.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c6-l21', title: 'Bài 21. Tính chất của dãy tỉ số bằng nhau.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c6-l22', title: 'Bài 22. Đại lượng tỉ lệ thuận.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c6-l23', title: 'Bài 23. Đại lượng tỉ lệ nghịch.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm7-c7', title: 'Chương VII. BIỂU THỨC ĐẠI SỐ VÀ ĐA THỨC MỘT BIẾN.', lessons: [ { id: 'm7-c7-l24', title: 'Bài 24. Biểu thức đại số.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c7-l25', title: 'Bài 25. Đa thức một biến.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c7-l26', title: 'Bài 26. Phép cộng và phép trừ đa thức một biến.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c7-l27', title: 'Bài 27. Phép nhân đa thức một biến.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c7-l28', title: 'Bài 28. Phép chia đa thức một biến.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm7-c8', title: 'Chương VIII. LÀM QUEN VỚI BIẾN CỐ VÀ XÁC SUẤT CỦA BIẾN CỐ.', lessons: [ { id: 'm7-c8-l29', title: 'Bài 29. Làm quen với biến cố.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c8-l30', title: 'Bài 30. Làm quen với xác suất của biến cố.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm7-c9', title: 'Chương IX. QUAN HỆ GIỮA CÁC YẾU TỐ TRONG MỘT TAM GIÁC.', lessons: [ { id: 'm7-c9-l31', title: 'Bài 31. Quan hệ giữa góc và cạnh đối diện trong một tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c9-l32', title: 'Bài 32. Quan hệ giữa đường vuông góc và đường xiên.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c9-l33', title: 'Bài 33. Quan hệ giữa ba cạnh của một tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c9-l34', title: 'Bài 34. Sự đồng quy của ba trung tuyến, ba đường phân giác trong một tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c9-l35', title: 'Bài 35. Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm7-c10', title: 'Chương X. MỘT SỐ HÌNH KHỐI TRONG THỰC TIỄN.', lessons: [ { id: 'm7-c10-l36', title: 'Bài 36. Hình hộp chữ nhật và hình lập phương.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c10-l37', title: 'Luyện tập.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm7-c10-l38', title: 'Bài 37. Hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, ] };
const MATH_8_COURSE_DATA: Course = { id: 'math-8', subjectName: 'Toán', gradeLevel: 8, title: 'Kết nối tri thức với cuộc sống', chapters: [ { id: 'm8-c1', title: 'Chương I. ĐA THỨC.', lessons: [ { id: 'm8-c1-l1', title: 'Bài 1. Đơn thức.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c1-l2', title: 'Bài 2. Đa thức.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c1-l3', title: 'Bài 3. Phép cộng và phép trừ đa thức.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c1-l4', title: 'Bài 4. Phép nhân đa thức.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c1-l5', title: 'Bài 5. Phép chia đa thức cho đơn thức.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm8-c2', title: 'Chương II. HẰNG ĐẲNG THỨC ĐÁNG NHỚ VÀ ỨNG DỤNG.', lessons: [ { id: 'm8-c2-l6', title: 'Bài 6. Hiệu hai bình phương. Bình phương của một tổng hay một hiệu.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c2-l7', title: 'Bài 7. Lập phương của một tổng hay một hiệu.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c2-l8', title: 'Bài 8. Tổng và hiệu hai lập hương.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c2-l9', title: 'Bài 9. Phân tích đa thức thành nhân tử.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm8-c3', title: 'Chương III. TỨ GIÁC.', lessons: [ { id: 'm8-c3-l10', title: 'Bài 10. Tứ giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c3-l11', title: 'Bài 11. Hình thang cân.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c3-l12', title: 'Bài 12. Hình bình hành.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c3-l13', title: 'Bài 13. Hình chữ nhật.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c3-l14', title: 'Bài 14. Hình thoi và hình vuông.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm8-c4', title: 'CHƯƠNG IV. ĐỊNH LÍ THALES.', lessons: [ { id: 'm8-c4-l15', title: 'Bài 15. Định lí Thalès trong tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c4-l16', title: 'Bài 16. Đường trung bình của tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c4-l17', title: 'Bài 17. Tính chất đường phân giác của tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm8-c5', title: 'Chương V. DỮ LIỆU VÀ BIỂU ĐỒ.', lessons: [ { id: 'm8-c5-l18', title: 'Bài 18. Thu thập và phân loại dữ liệu.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c5-l19', title: 'Bài 19. Biểu diễn dữ liệu bằng bảng, biểu đồ.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c5-l20', title: 'Bài 20. Phân tích số liệu thống kê dựa vào biểu đó.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm8-c6', title: 'Chương VI. PHÂN THỨC ĐẠI SỐ.', lessons: [ { id: 'm8-c6-l21', title: 'Bài 21. Phần thức đại số.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c6-l22', title: 'Bài 22. Tính chất cơ bản của phân thức đại số.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c6-l23', title: 'Bài 23. Phép cộng và phép trừ phân thức đại số.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c6-l24', title: 'Bài 24. Phép nhân và phép chia phân thức đại số.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm8-c7', title: 'Chương VII. PHƯƠNG TRÌNH BẬC NHẤT VÀ HÀM SỐ BẬC NHẤT.', lessons: [ { id: 'm8-c7-l25', title: 'Bài 25. Phương trình bậc nhất một ẩn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c7-l26', title: 'Bài 26. Giải bài toán bằng cách lập phương trình.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c7-l27', title: 'Bài 27. Khái niệm hàm số và đô thị của hàm số.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c7-l28', title: 'Bài 28. Hàm số bậc nhất và đô thị của hàm số bậc nhất.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c7-l29', title: 'Bài 29. Hệ số góc của đường thẳng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm8-c8', title: 'Chương VIII. MỞ ĐẦU VỀ TÍNH XÁC SUẤT CỦA BIẾN CỐ.', lessons: [ { id: 'm8-c8-l30', title: 'Bài 30. Kết quả có thể và kết quả thuận lợi.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c8-l31', title: 'Bài 31. Cách tính xác suất của biến cố bằng tỉ số.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c8-l32', title: 'Bài 32. Mối liên hệ giữa xác suất thực nghiệm với xác suất và ứng dụng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm8-c9', title: 'Chương IX. TAM GIÁC ĐỒNG DẠNG.', lessons: [ { id: 'm8-c9-l33', title: 'Bài 33. Hai tam giác đồng dạng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c9-l34', title: 'Bài 34. Ba trường hợp đồng dạng của hai tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c9-l35', title: 'Bài 35. Định lí Pythagore và ứng dụng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c9-l36', title: 'Bài 36. Các trường hợp đồng dạng của hai tam giác vuông.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c9-l37', title: 'Bài 37. Hình đồng dạng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm8-c10', title: 'Chương X. MỘT SỐ HÌNH KHỐI TRONG THỰC TIỄN.', lessons: [ { id: 'm8-c10-l38', title: 'Bài 38. Hình chóp tam giác đều.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm8-c10-l39', title: 'Bài 39. Hình chóp tứ giác đều.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, ] };
const MATH_9_COURSE_DATA: Course = { id: 'math-9', subjectName: 'Toán', gradeLevel: 9, title: 'Kết nối tri thức với cuộc sống', chapters: [ { id: 'm9-c1', title: 'Chương I. PHƯƠNG TRÌNH VÀ HỆ HAI PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN.', lessons: [ { id: 'm9-c1-l1', title: 'Bài 1. Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c1-l2', title: 'Bài 2. Giải hệ hai phương trình bậc nhất hai ẩn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c1-l3', title: 'Bài 3. Giải bài toán bằng cách lập hệ phương trình.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm9-c2', title: 'Chương II. PHƯƠNG TRÌNH VÀ BẤT PHƯƠNG TRÌNH BẬC NHẤT MỘT ẨN.', lessons: [ { id: 'm9-c2-l4', title: 'Bài 4. Phương trình quy về phương trình bậc nhất một ẩn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c2-l5', title: 'Bài 5. Bất đẳng thức và tính chất.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c2-l6', title: 'Bài 6. Bất phương trình bậc nhất một ẩn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c2-l7', title: 'Bài tập cuối chương II.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm9-c3', title: 'Chương III. CĂN BẬC HAI VÀ CĂN BẬC BA.', lessons: [ { id: 'm9-c3-l7', title: 'Bài 7. Căn bậc hai và căn thức bậc hai.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c3-l8', title: 'Bài 8. Khai căn bậc hai với phép nhân và phép chia.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c3-l9', title: 'Bài 9. Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c3-l10', title: 'Bài 10. Căn bậc ba và căn thức bậc ba.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm9-c4', title: 'Chương IV. HỆ THỨC LƯỢNG TRONG TAM GIÁC VUÔNG.', lessons: [ { id: 'm9-c4-l11', title: 'Bài 11. Tỉ số lượng giác của góc nhọn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c4-l12', title: 'Bài 12. Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm9-c5', title: 'Chương V. ĐƯỜNG TRÒN.', lessons: [ { id: 'm9-c5-l13', title: 'Bài 13. Mở đầu về đường tròn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c5-l14', title: 'Bài 14. Cung và dây của một đường tròn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c5-l15', title: 'Bài 15. Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c5-l16', title: 'Bài 16. Vị trí tương đối của đường thẳng và đường tròn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c5-l17', title: 'Bài 17. Vị trí tương đối của hai đường tròn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm9-c6', title: 'Chương VI. HÀM SỐ y = ax2 (a khác 0). PHƯƠNG TRÌNH BẬC HAI MỘT ẨN.', lessons: [ { id: 'm9-c6-l18', title: 'Bài 18. Hàm số y = ax2 (a ≠ 0).', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c6-l19', title: 'Bài 19. Phương trình bậc hai một ẩn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c6-l20', title: 'Bài 20. Định lí Viète và ứng dụng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c6-l21', title: 'Bài 21. Giải bài toán bằng cách lập phương trình.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm9-c7', title: 'Chương VII. TẦN SỐ VÀ TẦN SỐ TƯƠNG ĐỐI.', lessons: [ { id: 'm9-c7-l22', title: 'Bài 22. Bảng tần số và biểu đồ tần số.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c7-l23', title: 'Bài 23. Bảng tần số tương đối và biểu đồ tần số tương đối.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c7-l24', title: 'Bài 24. Bảng tần số, tần số tương đối ghép nhóm và biểu đồ.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c7-l25', title: 'Bài tập cuối chương VII.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm9-c8', title: 'Chương VIII. XÁC SUẤT CỦA BIẾN CỐ TRONG MỘT SỐ MÔ HÌNH XÁC SUẤT ĐƠN GIẢN.', lessons: [ { id: 'm9-c8-l25', title: 'Bài 25. Phép thử ngẫu nhiên và không gian mẫu.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c8-l26', title: 'Bài 26. Xác suất của biến cố liên quan tới phép thử.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm9-c9', title: 'Chương IX. ĐƯỜNG TRÒN NGOẠI TIẾP VÀ ĐƯỜNG TRÒN NỘI TIẾP.', lessons: [ { id: 'm9-c9-l27', title: 'Bài 27. Góc nội tiếp.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c9-l28', title: 'Bài 28. Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c9-l29', title: 'Bài 29. Tứ giác nội tiếp.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c9-l30', title: 'Bài 30. Đa giác đều.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, { id: 'm9-c10', title: 'Chương X. MỘT SỐ HÌNH KHỐI TRONG THỰC TIỄN.', lessons: [ { id: 'm9-c10-l31', title: 'Bài 31. Hình trụ và hình nón.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'm9-c10-l32', title: 'Bài 32. Hình cầu.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, ] }, ] };

// --- OTHER SUBJECTS (Placeholder data) ---
const LIT_6_COURSE_DATA: Course = { id: 'lit-6', subjectName: 'Ngữ văn', gradeLevel: 6, title: 'Kết nối tri thức với cuộc sống', chapters: [{ id: 'lit6-c1', title: 'Bài 1: Tôi và các bạn', lessons: [{id: 'lit6-l1', title: 'Bài học đường đời đầu tiên', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example'}] }] };
const LIT_7_COURSE_DATA: Course = { id: 'lit-7', subjectName: 'Ngữ văn', gradeLevel: 7, title: 'Kết nối tri thức với cuộc sống', chapters: [{ id: 'lit7-c1', title: 'Bài 1: Bầu trời tuổi thơ', lessons: [{id: 'lit7-l1', title: 'Bầy chim chìa vôi', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example'}] }] };
const LIT_8_COURSE_DATA: Course = { id: 'lit-8', subjectName: 'Ngữ văn', gradeLevel: 8, title: 'Kết nối tri thức với cuộc sống', chapters: [{ id: 'lit8-c1', title: 'Bài 1: Câu chuyện của lịch sử', lessons: [{id: 'lit8-l1', title: 'Lá cờ thêu sáu chữ vàng', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example'}] }] };
const LIT_9_COURSE_DATA: Course = { id: 'lit-9', subjectName: 'Ngữ văn', gradeLevel: 9, title: 'Ngữ văn 9', chapters: [{ id: 'lit9-c1', title: 'Bài 1: Phong cách Hồ Chí Minh', lessons: [{id: 'lit9-l1', title: 'Phong cách Hồ Chí Minh', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example'}] }] };

const ENG_6_COURSE_DATA: Course = { id: 'eng-6', subjectName: 'Tiếng Anh', gradeLevel: 6, title: 'Global Success', chapters: [{ id: 'eng6-c1', title: 'Unit 1: My New School', lessons: [{id: 'eng6-l1', title: 'Getting Started', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example'}] }] };
const ENG_7_COURSE_DATA: Course = { id: 'eng-7', subjectName: 'Tiếng Anh', gradeLevel: 7, title: 'Global Success', chapters: [{ id: 'eng7-c1', title: 'Unit 1: Hobbies', lessons: [{id: 'eng7-l1', title: 'Getting Started', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example'}] }] };
const ENG_8_COURSE_DATA: Course = { id: 'eng-8', subjectName: 'Tiếng Anh', gradeLevel: 8, title: 'Global Success', chapters: [{ id: 'eng8-c1', title: 'Unit 1: Leisure Time', lessons: [{id: 'eng8-l1', title: 'Getting Started', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example'}] }] };
const ENG_9_COURSE_DATA: Course = { id: 'eng-9', subjectName: 'Tiếng Anh', gradeLevel: 9, title: 'Global Success', chapters: [{ id: 'eng9-c1', title: 'Unit 1: Local Environment', lessons: [{id: 'eng9-l1', title: 'Getting Started', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example'}] }] };

const SCI_6_COURSE_DATA: Course = { id: 'sci-6', subjectName: 'KHTN', gradeLevel: 6, title: 'Kết nối tri thức với cuộc sống', chapters: [{ id: 'sci6-c1', title: 'Chủ đề 1: Mở đầu về Khoa học tự nhiên', lessons: [{id: 'sci6-l1', title: 'Giới thiệu về Khoa học tự nhiên', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example'}] }] };
const SCI_7_COURSE_DATA: Course = { id: 'sci-7', subjectName: 'KHTN', gradeLevel: 7, title: 'Kết nối tri thức với cuộc sống', chapters: [{ id: 'sci7-c1', title: 'Chủ đề 1: Nguyên tử', lessons: [{id: 'sci7-l1', title: 'Nguyên tử', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example'}] }] };
const SCI_8_COURSE_DATA: Course = { id: 'sci-8', subjectName: 'KHTN', gradeLevel: 8, title: 'Kết nối tri thức với cuộc sống', chapters: [{ id: 'sci8-c1', title: 'Chủ đề 1: Phản ứng hóa học', lessons: [{id: 'sci8-l1', title: 'Biến đổi chất', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example'}] }] };
const SCI_9_COURSE_DATA: Course = { id: 'sci-9', subjectName: 'KHTN', gradeLevel: 9, title: 'Kết nối tri thức với cuộc sống', chapters: [{ id: 'sci9-c1', title: 'Chủ đề 1: Năng lượng và sự biến đổi', lessons: [{id: 'sci9-l1', title: 'Năng lượng cơ học', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example'}] }] };

const HG_6_COURSE_DATA: Course = {
    id: 'hg-6',
    subjectName: 'LS & ĐL',
    gradeLevel: 6,
    title: 'Kết nối tri thức với cuộc sống',
    chapters: [
        { id: 'hg6-h-c1', title: 'PHẦN LỊCH SỬ - CHƯƠNG 1. VÌ SAO PHẢI HỌC LỊCH SỬ?', lessons: [ { id: 'hg6-h-c1-l1', title: 'Bài 1 Lịch sử và cuộc sống.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-h-c1-l2', title: 'Bài 2 Dựa vào đâu để biết và phục dựng lại lịch sử?', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-h-c1-l3', title: 'Bài 3 Thời gian trong lịch sử.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg6-h-c2', title: 'PHẦN LỊCH SỬ - CHƯƠNG 2. XÃ HỘI NGUYÊN THUỶ.', lessons: [ { id: 'hg6-h-c2-l4', title: 'Bài 4 Nguồn gốc loài người.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-h-c2-l5', title: 'Bài 5 Xã hội nguyên thuỷ.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-h-c2-l6', title: 'Bài 6 Sự chuyển biển và phân hoá của xã hội nguyên thuỷ.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg6-h-c3', title: 'PHẦN LỊCH SỬ - CHƯƠNG 3. XÃ HỘI CỔ ĐẠI.', lessons: [ { id: 'hg6-h-c3-l7', title: 'Bài 7 Ai Cập và Lưỡng Hà cổ đại.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-h-c3-l8', title: 'Bài 8 Ấn Độ cổ đại.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-h-c3-l9', title: 'Bài 9 Trung Quốc từ thời cổ đại đến thế kỉ VII.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-h-c3-l10', title: 'Bài 10. Hy Lạp và La Mã cổ đại.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg6-h-c4', title: 'PHẦN LỊCH SỬ - CHƯƠNG 4. ĐÔNG NAM Á (ĐẦU CÔNG NGUYÊN - THẾ KỈ X).', lessons: [ { id: 'hg6-h-c4-l11', title: 'Bài 11 Các quốc gia sơ kì ở Đông Nam Á.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-h-c4-l12', title: 'Bài 12 Sự hình thành và phát triển của các vương quốc phong kiến (thế kỉ VII - X).', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-h-c4-l13', title: 'Bài 13 Giao lưu văn hoá ở Đông Nam Á từ đầu Công nguyên đến thế kỉ X.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg6-h-c5', title: 'PHẦN LỊCH SỬ - CHƯƠNG 5. VIỆT NAM (THẾ KỈ VII TCN - ĐẦU THẾ KỈ X).', lessons: [ { id: 'hg6-h-c5-l14', title: 'Bài 14 Nhà nước Văn Lang – Âu Lạc.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-h-c5-l15', title: 'Bài 15 Chính sách cai trị của phong kiến phương Bắc và sự chuyển biến xã hội.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-h-c5-l16', title: 'Bài 16 Các cuộc khởi nghĩa tiêu biểu giành độc lập trước thế kỉ X.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-h-c5-l17', title: 'Bài 17 Cuộc đấu tranh bảo tồn và phát triển văn hoá dân tộc.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-h-c5-l18', title: 'Bài 18 Bước ngoặt lịch sử đầu thế kỉ X.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-h-c5-l19', title: 'Bài 19 Vương quốc Chăm-pa từ thế kỉ II đến thế kỉ X.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-h-c5-l20', title: 'Bài 20 Vương quốc Phù Nam.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg6-g-c0', title: 'PHẦN ĐỊA LÍ - BÀI MỞ ĐẦU', lessons: [{id: 'hg6-g-c0-l1', title: 'Khám phá thế giới quanh ta', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example'}] },
        { id: 'hg6-g-c1', title: 'PHẦN ĐỊA LÍ - CHƯƠNG 1. BẢN ĐỒ', lessons: [ { id: 'hg6-g-c1-l1', title: 'Bài 1 Hệ thống kinh, vĩ tuyến. Tọa độ địa lí.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-g-c1-l2', title: 'Bài 2 Bản đồ. Một số lưới kinh, vĩ tuyến.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-g-c1-l3', title: 'Bài 3 Tỉ lệ bản đồ.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-g-c1-l4', title: 'Bài 4 Kí hiệu và bảng chú giải bản đồ.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-g-c1-l5', title: 'Bài 5 Lược đồ trí nhớ.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg6-g-c2', title: 'PHẦN ĐỊA LÍ - CHƯƠNG 2. TRÁI ĐẤT', lessons: [ { id: 'hg6-g-c2-l6', title: 'Bài 6 Trái Đất trong hệ Mặt Trời.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-g-c2-l7', title: 'Bài 7 Chuyển động tự quay quanh trục của Trái Đất và hệ quả.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-g-c2-l8', title: 'Bài 8 Chuyển động của Trái Đất quanh Mặt Trời và hệ quả.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-g-c2-l9', title: 'Bài 9 Xác định phương hướng ngoài thực tế.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg6-g-c3', title: 'PHẦN ĐỊA LÍ - CHƯƠNG 3. CẤU TẠO CỦA TRÁI ĐẤT', lessons: [ { id: 'hg6-g-c3-l10', title: 'Bài 10 Cấu tạo của Trái Đất. Các mảng kiến tạo.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-g-c3-l11', title: 'Bài 11 Quá trình nội sinh và quá trình ngoại sinh. Hiện tượng tạo núi.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-g-c3-l12', title: 'Bài 12. Núi lửa và động đất.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-g-c3-l13', title: 'Bài 13. Các dạng địa hình chính trên Trái Đất. Khoáng sản.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-g-c3-l14', title: 'Bài 14 Thực hành: Đọc lược đồ địa hình.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg6-g-c4', title: 'PHẦN ĐỊA LÍ - CHƯƠNG 4. KHÍ HẬU VÀ BIẾN ĐỔI KHÍ HẬU', lessons: [ { id: 'hg6-g-c4-l15', title: 'Bài 15 Lớp vỏ khí của Trái Đất. Khí áp và gió.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-g-c4-l16', title: 'Bài 16 Nhiệt độ không khí. Mây và mưa.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-g-c4-l17', title: 'Bài 17 Thời tiết và khí hậu. Biến đổi khí hậu.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-g-c4-l18', title: 'Bài 18 Thực hành: Phân tích biểu đồ nhiệt độ, lượng mưa.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg6-g-c5', title: 'PHẦN ĐỊA LÍ - CHƯƠNG 5. NƯỚC TRÊN TRÁI ĐẤT', lessons: [ { id: 'hg6-g-c5-l19', title: 'Bài 19 Thuỷ quyển và vòng tuần hoàn lớn của nước.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-g-c5-l20', title: 'Bài 20 Sông và hồ. Nước ngầm và băng hà.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-g-c5-l21', title: 'Bài 21 Biển và đại dương.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg6-g-c6', title: 'PHẦN ĐỊA LÍ - CHƯƠNG 6. ĐẤT VÀ SINH VẬT TRÊN TRÁI ĐẤT', lessons: [ { id: 'hg6-g-c6-l22', title: 'Bài 22 Lớp đất trên Trái Đất.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-g-c6-l23', title: 'Bài 23 Sự sống trên Trái Đất.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-g-c6-l24', title: 'Bài 24 Rừng nhiệt đới.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-g-c6-l25', title: 'Bài 25 Sự phân bố các đới thiên nhiên trên Trái Đất.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-g-c6-l26', title: 'Bài 26 Thực hành: Tìm hiểu môi trường tự nhiên địa phương.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg6-g-c7', title: 'PHẦN ĐỊA LÍ - CHƯƠNG 7. CON NGƯỜI VÀ THIÊN NHIÊN', lessons: [ { id: 'hg6-g-c7-l27', title: 'Bài 27 Dân số và sự phân bố dân cư trên thế giới.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-g-c7-l28', title: 'Bài 28 Mối quan hệ giữa con người và thiên nhiên.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-g-c7-l29', title: 'Bài 29 Bảo vệ tự nhiên và khai thác thông minh các tài nguyên.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg6-g-c7-l30', title: 'Bài 30 Thực hành: Tìm hiểu mối quan hệ giữa con người và thiên nhiên.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
    ]
};
const HG_7_COURSE_DATA: Course = {
    id: 'hg-7',
    subjectName: 'LS & ĐL',
    gradeLevel: 7,
    title: 'Kết nối tri thức với cuộc sống',
    chapters: [
        { id: 'hg7-h-c1', title: 'PHẦN LỊCH SỬ - Chương 1. Tây Âu từ thế kỉ V đến nửa đầu thế kỉ XVI', lessons: [ { id: 'hg7-h-c1-l1', title: 'Bài 1 Quá trình hình thành và phát triển của chế độ phong kiến ở Tây Âu', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-h-c1-l2', title: 'Bài 2 Các cuộc phát kiến địa lí và sự hình thành quan hệ sản xuất tư bản chủ nghĩa ở Tây Âu', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-h-c1-l3', title: 'Bài 3 Phong trào Văn hoá Phục hưng và Cải cách tôn giáo', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg7-h-c2', title: 'PHẦN LỊCH SỬ - Chương 2. Trung Quốc và Ấn Độ thời trung đại', lessons: [ { id: 'hg7-h-c2-l4', title: 'Bài 4 Trung Quốc từ thế kỉ VII đến giữa thế kỉ XIX', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-h-c2-l5', title: 'Bài 5 Ấn Độ từ thế kỉ IV đến giữa thế kỉ XIX', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg7-h-c3', title: 'PHẦN LỊCH SỬ - Chương 3. Đông Nam Á từ nửa sau thế kỉ X đến đầu thế kỉ XVI', lessons: [ { id: 'hg7-h-c3-l6', title: 'Bài 6 Các vương quốc phong kiến Đông Nam Á', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-h-c3-l7', title: 'Bài 7 Vương quốc Lào', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-h-c3-l8', title: 'Bài 8 Vương quốc Cam-pu-chia', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg7-h-c4', title: 'PHẦN LỊCH SỬ - Chương 4. Nước ta thời Ngô – Đinh – Tiền Lê (939 – 1009)', lessons: [ { id: 'hg7-h-c4-l9', title: 'Bài 9 Đất nước buổi đầu độc lập (939 – 967)', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-h-c4-l10', title: 'Bài 10 Đại Cồ Việt thời Đinh và Tiền Lê (968 – 1009)', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg7-h-c5', title: 'PHẦN LỊCH SỬ - Chương 5. Đại Việt thời Lý – Trần – Hồ (1009 – 1407)', lessons: [ { id: 'hg7-h-c5-l11', title: 'Bài 11 Nhà Lý xây dựng và phát triển đất nước (1009 – 1225)', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-h-c5-l12', title: 'Bài 12 Cuộc kháng chiến chống quân xâm lược Tống (1075 – 1077)', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-h-c5-l13', title: 'Bài 13 Đại Việt thời Trần (1226 – 1400)', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-h-c5-l14', title: 'Bài 14 Ba lần kháng chiến chống quân xâm lược Mông – Nguyên', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-h-c5-l15', title: 'Bài 15 Nước Đại Ngô Hồ (1400 – 1407)', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg7-h-c6', title: 'PHẦN LỊCH SỬ - Chương 6. Đại Việt thời Lê sơ (1418 – 1527)', lessons: [ { id: 'hg7-h-c6-l16', title: 'Bài 16 Khởi nghĩa Lam Sơn (1418 – 1427)', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-h-c6-l17', title: 'Bài 17 Đại Việt thời Lê sơ (1428 – 1527)', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg7-h-c7', title: 'PHẦN LỊCH SỬ - Chương 7. Vùng đất phía Nam (thế kỉ X - XVI)', lessons: [ { id: 'hg7-h-c7-l18', title: 'Bài 18 Vùng đất Nam Bộ từ đầu thế kỉ X đến đầu thế kỉ XVI', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg7-g-c1', title: 'PHẦN ĐỊA LÍ - Chương 1. Châu Âu', lessons: [ { id: 'hg7-g-c1-l1', title: 'Bài 1 Vị trí địa lí, đặc điểm tự nhiên châu Âu', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-g-c1-l2', title: 'Bài 2 Đặc điểm dân cư, xã hội châu Âu', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-g-c1-l3', title: 'Bài 3 Khai thác, sử dụng và bảo vệ thiên nhiên ở châu Âu', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-g-c1-l4', title: 'Bài 4 Liên minh châu Âu', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg7-g-c2', title: 'PHẦN ĐỊA LÍ - Chương 2. Châu Á', lessons: [ { id: 'hg7-g-c2-l5', title: 'Bài 5 Vị trí địa lí, đặc điểm tự nhiên châu Á', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-g-c2-l6', title: 'Bài 6 Đặc điểm dân cư, xã hội châu Á', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-g-c2-l7', title: 'Bài 7 Bản đồ chính trị châu Á, các khu vực của châu Á', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-g-c2-l8', title: 'Bài 8 Thực hành: Tìm hiểu về các nền kinh tế lớn và kinh tế mới nổi của châu Á', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg7-g-c3', title: 'PHẦN ĐỊA LÍ - Chương 3. Châu Phi', lessons: [ { id: 'hg7-g-c3-l9', title: 'Bài 9 Vị trí địa lí, đặc điểm tự nhiên châu Phi', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-g-c3-l10', title: 'Bài 10 Đặc điểm dân cư, xã hội châu Phi', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-g-c3-l11', title: 'Bài 11 Phương thức con người khai thác, sử dụng và bảo vệ thiên nhiên ở châu Phi', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-g-c3-l12', title: 'Bài 12 Thực hành: Tìm hiểu khái quát Cộng hoà Nam Phi', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg7-g-c4', title: 'PHẦN ĐỊA LÍ - Chương 4. Châu Mỹ', lessons: [ { id: 'hg7-g-c4-l13', title: 'Bài 13 Vị trí địa lí, phạm vi châu Mỹ. Sự phát kiến ra châu Mỹ', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-g-c4-l14', title: 'Bài 14 Đặc điểm tự nhiên Bắc Mỹ', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-g-c4-l15', title: 'Bài 15 Đặc điểm dân cư, xã hội, phương thức khai thác tự nhiên bền vững ở Bắc Mỹ', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-g-c4-l16', title: 'Bài 16 Đặc điểm tự nhiên Trung và Nam Mỹ', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-g-c4-l17', title: 'Bài 17 Đặc điểm dân cư Trung và Nam Mỹ, khai thác, sử dụng và bảo vệ rừng A-ma-dôn', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg7-g-c5', title: 'PHẦN ĐỊA LÍ - Chương 5. Châu Đại Dương và Châu Nam Cực', lessons: [ { id: 'hg7-g-c5-l18', title: 'Bài 18 Châu Đại Dương', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg7-g-c5-l19', title: 'Bài 19 Châu Nam Cực', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] }
    ]
};
const HG_8_COURSE_DATA: Course = {
    id: 'hg-8',
    subjectName: 'LS & ĐL',
    gradeLevel: 8,
    title: 'Kết nối tri thức với cuộc sống',
    chapters: [
        { id: 'hg8-h-c1', title: 'PHẦN LỊCH SỬ - Chương 1. CHÂU Á, CHÂU MỸ VÀ NỬA SAU THẾ KỈ XIX ĐẾN NĂM 1914', lessons: [
            { id: 'hg8-h-c1-l1', title: 'Bài 1: Cách mạng tư sản Anh và Chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mĩ', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            { id: 'hg8-h-c1-l2', title: 'Bài 2: Cách mạng công nghiệp (nửa sau thế kỉ XVIII – giữa thế kỉ XIX)', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            { id: 'hg8-h-c1-l3', title: 'Bài 3: Các nước châu Á giữa thế kỉ XIX – đầu thế kỉ XX', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }
        ]},
        { id: 'hg8-h-c2', title: 'PHẦN LỊCH SỬ - Chương 2. BỐNG ĐÁ NỬA SAU THẾ KỈ XIX ĐẾN NĂM 1914', lessons: [
            { id: 'hg8-h-c2-l4', title: 'Bài 4: Đế quốc Anh nửa sau thế kỉ XIX đến năm 1914', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }
        ]},
        { id: 'hg8-h-c3', title: 'PHẦN LỊCH SỬ - Chương 3. VIỆT NAM TỪ NỬA SAU THẾ KỈ XIX ĐẾN NĂM 1918', lessons: [
            { id: 'hg8-h-c3-l5', title: 'Bài 5: Cuộc xâm lược – Bác bỏ triều đình – Nguyễn và phong trào chống Pháp cuối thế kỉ XIX', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            { id: 'hg8-h-c3-l6', title: 'Bài 6: Công cuộc khai phá vùng đất phía Nam cuối thế kỉ XIX – đầu thế kỉ XX', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            { id: 'hg8-h-c3-l7', title: 'Bài 7: Khởi nghĩa nông dân ở Bắc Giang', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            { id: 'hg8-h-c3-l8', title: 'Bài 8: Phong trào Cần Vương', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            { id: 'hg8-h-c3-l9', title: 'Bài 9: Tình hình kinh tế, văn hóa, tôn giáo trong các tỉnh Sơn Tây', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }
        ]},
        { id: 'hg8-h-c4', title: 'PHẦN LỊCH SỬ - Chương 4. THẾ GIỚI TỪ NĂM 1917', lessons: [
            { id: 'hg8-h-c4-l10', title: 'Bài 10: Sự hình thành chủ nghĩa đế quốc ở các nước Âu – Mĩ (cuối thế kỉ XIX – đầu thế kỉ XX)', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            { id: 'hg8-h-c4-l11', title: 'Bài 11: Phong trào công nhân cuối thế kỉ XVIII đến đầu thế kỉ XX và sự ra đời của các nghĩa xã hội khoa học', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            { id: 'hg8-h-c4-l12', title: 'Bài 12: Chiến tranh thế giới thứ nhất (1914 – 1918) và Cách mạng tháng Mười Nga 1917', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }
        ]},
        { id: 'hg8-h-c5', title: 'PHẦN LỊCH SỬ - Chương 5. SỰ PHÁT TRIỂN CỦA KHOA HỌC, KĨ THUẬT, VĂN HÓA NGHỆ THUẬT TRONG CÁC THẾ KỈ XIX – XX', lessons: [
            { id: 'hg8-h-c5-l13', title: 'Bài 13: Sự phát triển của khoa học, kĩ thuật – văn học, nghệ thuật trong các thế kỉ XIX – XX', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }
        ]},
        { id: 'hg8-h-c6', title: 'PHẦN LỊCH SỬ - Chương 6. CHÂU Á TỪ NỬA SAU THẾ KỈ XX ĐẾN NAY', lessons: [
            { id: 'hg8-h-c6-l14', title: 'Bài 14: Trung Quốc và Nhật Bản từ nửa sau thế kỉ XX đến đầu thế kỉ XXI', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            { id: 'hg8-h-c6-l15', title: 'Bài 15: Ấn Độ và Đông Nam Á từ nửa sau thế kỉ XX đến đầu thế kỉ XXI', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }
        ]},
        { id: 'hg8-h-c7', title: 'PHẦN LỊCH SỬ - Chương 7. VIỆT NAM TỪ NỬA SAU THẾ KỈ XIX ĐẾN NĂM 1918', lessons: [
            { id: 'hg8-h-c7-l16', title: 'Bài 16: Việt Nam dưới thời Nguyễn (nửa đầu thế kỉ XIX)', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            { id: 'hg8-h-c7-l17', title: 'Bài 17: Cuộc kháng chiến chống thực dân Pháp xâm lược từ năm 1858 đến năm 1884', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            { id: 'hg8-h-c7-l18', title: 'Bài 18: Phong trào chống Pháp trong những năm 1885 – 1896', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            { id: 'hg8-h-c7-l19', title: 'Bài 19: Phong trào yêu nước chống Pháp ở Việt Nam từ đầu thế kỉ XX đến năm 1917', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }
        ]},
        { id: 'hg8-g-c1', title: 'PHẦN ĐỊA LÍ - Chương 1. VỊ TRÍ ĐỊA LÍ, PHẠM VI LÃNH THỔ, ĐỊA HÌNH VÀ KHOÁNG SẢN VIỆT NAM', lessons: [
            { id: 'hg8-g-c1-l1', title: 'Bài 1: Vị trí địa lí và phạm vi lãnh thổ Việt Nam', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            { id: 'hg8-g-c1-l2', title: 'Bài 2: Địa hình Việt Nam', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            { id: 'hg8-g-c1-l3', title: 'Bài 3: Khoáng sản Việt Nam', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }
        ]},
        { id: 'hg8-g-c2', title: 'PHẦN ĐỊA LÍ - Chương 2. KHÍ HẬU VÀ THỦY VĂN VIỆT NAM', lessons: [
            { id: 'hg8-g-c2-l4', title: 'Bài 4: Khí hậu Việt Nam', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            { id: 'hg8-g-c2-l5', title: 'Bài 5: Thực hành: Vẽ và phân tích biểu đồ khí hậu', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            { id: 'hg8-g-c2-l6', title: 'Bài 6: Thủy văn Việt Nam', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            { id: 'hg8-g-c2-l7', title: 'Bài 7: Vai trò của biển đối với khí hậu và tài nguyên thiên nhiên nước ta – bảo vệ môi trường biển – phát triển kinh tế xã hội biển đảo', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            { id: 'hg8-g-c2-l8', title: 'Bài 8: Tác động của biến đổi khí hậu đối với khí hậu và thủy văn Việt Nam', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }
        ]},
        { id: 'hg8-g-c3', title: 'PHẦN ĐỊA LÍ - Chương 3. THỔ NHƯỠNG VÀ SINH VẬT VIỆT NAM', lessons: [
            { id: 'hg8-g-c3-l9', title: 'Bài 9: Thổ nhưỡng Việt Nam', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            { id: 'hg8-g-c3-l10', title: 'Bài 10: Sinh vật Việt Nam', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }
        ]},
        { id: 'hg8-g-c4', title: 'PHẦN ĐỊA LÍ - Chương 4. BIỂN ĐẢO VIỆT NAM', lessons: [
            { id: 'hg8-g-c4-l11', title: 'Bài 11: Phạm vi Biển Đông, Vùng biển đảo và đặc điểm tự nhiên vùng biển đảo Việt Nam', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            { id: 'hg8-g-c4-l12', title: 'Bài 12: Môi trường và tài nguyên biển đảo', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }
        ]},
    ]
};
const HG_9_COURSE_DATA: Course = {
    id: 'hg-9',
    subjectName: 'LS & ĐL',
    gradeLevel: 9,
    title: 'Kết nối tri thức với cuộc sống',
    chapters: [
        { id: 'hg9-h-c1', title: 'PHẦN LỊCH SỬ - Chương 1: Thế giới từ năm 1918 đến năm 1945', lessons: [ { id: 'hg9-h-c1-l1', title: 'Bài 1: Nước Nga và Liên Xô từ năm 1918 đến năm 1945', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-h-c1-l2', title: 'Bài 2: Châu Âu và nước Mỹ từ năm 1918 đến năm 1945', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-h-c1-l3', title: 'Bài 3: Châu Á từ năm 1918 đến 1945', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-h-c1-l4', title: 'Bài 4: Chiến tranh thế giới thứ hai (1939-1945)', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg9-h-c2', title: 'PHẦN LỊCH SỬ - Chương 2: Việt Nam từ năm 1918 đến năm 1945', lessons: [ { id: 'hg9-h-c2-l5', title: 'Bài 5: Phong trào dân tộc dân chủ trong những năm 1918-1930', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-h-c2-l6', title: 'Bài 6: Hoạt động của Nguyễn Ái Quốc và sự thành lập Đảng Cộng sản Việt Nam', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-h-c2-l7', title: 'Bài 7: Phong trào cách mạng Việt Nam thời kì 1930-1939', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-h-c2-l8', title: 'Bài 8: Cách mạng tháng Tám năm 1945', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg9-h-c3', title: 'PHẦN LỊCH SỬ - Chương 3: Thế giới từ năm 1945 đến năm 1991', lessons: [ { id: 'hg9-h-c3-l9', title: 'Bài 9: Chiến tranh lạnh (1947-1989)', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-h-c3-l10', title: 'Bài 10: Liên Xô và Đông Âu từ năm 1945 đến năm 1991', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-h-c3-l11', title: 'Bài 11: Nước Mỹ và Tây Âu từ năm 1945 đến năm 1991', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-h-c3-l12', title: 'Bài 12: Khu vực Mỹ La-tinh và châu Á từ năm 1945 đến năm 1991', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg9-h-c4', title: 'PHẦN LỊCH SỬ - Chương 4: Việt Nam từ năm 1945 đến năm 1991', lessons: [ { id: 'hg9-h-c4-l13', title: 'Bài 13: Việt Nam trong năm đầu sau Cách mạng tháng Tám năm 1945', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-h-c4-l14', title: 'Bài 14: Việt Nam kháng chiến chống thực dân Pháp xâm lược giai đoạn 1946 – 1950', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-h-c4-l15', title: 'Bài 15: Việt Nam kháng chiến chống Pháp xâm lược giai đoạn 1951-1954', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-h-c4-l16', title: 'Bài 16: Việt Nam kháng chiến chống Mỹ, cứu nước, thống nhất đất nước giai đoạn 1954 – 1965', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-h-c4-l17', title: 'Bài 17: Việt Nam kháng chiến chống Mỹ, cứu nước, thống nhất đất nước giai đoạn 1965 – 1975', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-h-c4-l18', title: 'Bài 18: Việt Nam kháng chiến chống Mỹ, cứu nước, thống nhất đất nước giai đoạn 1954 – 1965', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg9-h-c5', title: 'PHẦN LỊCH SỬ - Chương 5: Thế giới từ năm 1991 đến nay', lessons: [ { id: 'hg9-h-c5-l19', title: 'Bài 19: Trật tự thế giới mới từ năm 1991 đến nay. Liên Bang Nga và nước Mỹ từ năm 1991 đến nay', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-h-c5-l20', title: 'Bài 20: Châu Á từ năm 1991 đến nay', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg9-h-c6', title: 'PHẦN LỊCH SỬ - Chương 6: Việt Nam từ năm 1991 đến nay', lessons: [ { id: 'hg9-h-c6-l21', title: 'Bài 21: Việt Nam từ năm 1991 đến nay', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg9-h-c7', title: 'PHẦN LỊCH SỬ - Chương 7: Cách mạng khoa học – kĩ thuật và xu thế toàn cầu hóa', lessons: [ { id: 'hg9-h-c7-l22', title: 'Bài 22: Cách mạng khoa học – kĩ thuật và xu thế toàn cầu hóa', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg9-g-c1', title: 'PHẦN ĐỊA LÍ - Chương 1: Địa lý dân cư Việt Nam', lessons: [ { id: 'hg9-g-c1-l1', title: 'Bài 1: Dân tộc và dân số', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-g-c1-l2', title: 'Bài 2: Phân bố dân cư và các loại hình quần cư', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-g-c1-l3', title: 'Bài 3: Thực hành: Tìm hiểu vấn đề việc làm ở địa phương và phân hoá thu nhập theo vùng', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg9-g-c2', title: 'PHẦN ĐỊA LÍ - Chương 2: Địa lý các ngành kinh tế', lessons: [ { id: 'hg9-g-c2-l10', title: 'Bài 10: Thực hành: Tìm hiểu xu hướng phát triển ngành thương mại, du lịch', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-g-c2-l4', title: 'Bài 4: Nông nghiệp', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-g-c2-l5', title: 'Bài 5: Lâm nghiệp và thuỷ sản', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-g-c2-l6', title: 'Bài 6: Thực hành: Viết báo cáo về một mô hình sản xuất nông nghiệp có hiệu quả', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-g-c2-l7', title: 'Bài 7: Công nghiệp', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-g-c2-l8', title: 'Bài 8: Thực hành: Xác định các trung tâm công nghiệp chính ở nước ta', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-g-c2-l9', title: 'Bài 9: Dịch vụ', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] },
        { id: 'hg9-g-c3', title: 'PHẦN ĐỊA LÍ - Chương 3: Sự phân hóa lãnh thổ', lessons: [ { id: 'hg9-g-c3-l11', title: 'Bài 11: Vùng trung du và miền núi Bắc Bộ', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-g-c3-l12', title: 'Bài 12: Vùng Đồng bằng Sông Hồng', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-g-c3-l13', title: 'Bài 13: Thực hành: Tìm hiểu về vùng kinh tế trọng điểm Bắc Bộ', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-g-c3-l14', title: 'Bài 14: Bắc Trung Bộ', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-g-c3-l15', title: 'Bài 15: Duyên hải Nam Trung Bộ', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-g-c3-l16', title: 'Bài 16: Thực hành: Phân tích ảnh hưởng của hạn hán và sa mạc hóa đối với phát triển kinh tế - xã hội ở vùng khô hạn Ninh Thuận – Bình Thuận', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-g-c3-l17', title: 'Bài 17: Vùng Tây Nguyên', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-g-c3-l18', title: 'Bài 18: Vùng Đông Nam Bộ', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-g-c3-l19', title: 'Bài 19: Thực hành: Tìm hiểu về vùng kinh tế trọng điểm phía Nam', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-g-c3-l20', title: 'Bài 20: Vùng đồng bằng sông Cửu Long', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-g-c3-l21', title: 'Bài 21: Thực hành: Tìm hiểu về tác động của biến đổi khí hậu đối với đồng bằng sông Cửu Long', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' }, { id: 'hg9-g-c3-l22', title: 'Bài 22: Phát triển tổng hợp kinh tế và bảo vệ tài nguyên, môi trường biển đảo', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' } ] }
    ]
};

// --- END OF ALL COURSE DATA ---


// This is the "master map" of all available courses.
// App.tsx uses this to find the correct course data based on the user's selection.
export const ALL_COURSES: Record<string, Course> = {
  'math-6': MATH_6_COURSE_DATA,
  'math-7': MATH_7_COURSE_DATA,
  'math-8': MATH_8_COURSE_DATA,
  'math-9': MATH_9_COURSE_DATA,
  'lit-6': LIT_6_COURSE_DATA,
  'lit-7': LIT_7_COURSE_DATA,
  'lit-8': LIT_8_COURSE_DATA,
  'lit-9': LIT_9_COURSE_DATA,
  'eng-6': ENG_6_COURSE_DATA,
  'eng-7': ENG_7_COURSE_DATA,
  'eng-8': ENG_8_COURSE_DATA,
  'eng-9': ENG_9_COURSE_DATA,
  'sci-6': SCI_6_COURSE_DATA,
  'sci-7': SCI_7_COURSE_DATA,
  'sci-8': SCI_8_COURSE_DATA,
  'sci-9': SCI_9_COURSE_DATA,
  'hg-6': HG_6_COURSE_DATA,
  'hg-7': HG_7_COURSE_DATA,
  'hg-8': HG_8_COURSE_DATA,
  'hg-9': HG_9_COURSE_DATA,
};


// --- LABORATORY DATA ---

export const LAB_CATEGORIES: LabCategory[] = [
  {
    id: 'physics',
    name: 'Vật lý',
    description: 'Khám phá các định luật về chuyển động, năng lượng, sóng, điện và vũ trụ.',
    icon: BookOpenIcon,
    color: 'bg-indigo-500',
    subcategories: [
      { id: 'physics-mechanics', name: 'Cơ học' },
      { id: 'physics-sound-waves', name: 'Âm học & Sóng' },
      { id: 'physics-energy', name: 'Công, năng lượng & công suất' },
      { id: 'physics-thermo', name: 'Nhiệt & Nhiệt động lực học' },
      { id: 'physics-quantum', name: 'Hiện tượng lượng tử' },
      { id: 'physics-light-radiation', name: 'Ánh sáng & Bức xạ' },
      { id: 'physics-electricity', name: 'Điện, Từ & Mạch điện' },
    ],
  },
  {
    id: 'chemistry',
    name: 'Hoá học',
    description: 'Tìm hiểu về nguyên tử, phân tử, phản ứng và các thuộc tính của vật chất.',
    icon: BeakerIcon,
    color: 'bg-emerald-500',
    subcategories: [
      { id: 'chem-general', name: 'Hoá đại cương' },
      { id: 'chem-quantum', name: 'Hoá lượng tử' },
    ],
  },
  {
    id: 'biology',
    name: 'Sinh học',
    description: 'Nghiên cứu về sự sống, từ gen đến hệ sinh thái và chọn lọc tự nhiên.',
    icon: LeafIcon,
    color: 'bg-lime-500',
    subcategories: [
        { id: 'biology-main', name: 'Các quá trình sinh học' },
    ]
  },
  {
    id: 'math',
    name: 'Toán và Thống kê',
    description: 'Nắm vững các khái niệm, đồ thị và ứng dụng của toán học trong thực tế.',
    icon: CalculatorIcon,
    color: 'bg-sky-500',
    subcategories: [
      { id: 'math-concepts', name: 'Khái niệm toán học' },
      { id: 'math-applications', name: 'Ứng dụng toán học' },
    ],
  },
  {
    id: 'earth-science',
    name: 'Khoa học Trái đất',
    description: 'Tìm hiểu về hành tinh của chúng ta, từ kiến tạo mảng đến hiệu ứng nhà kính.',
    icon: GlobeAltIcon,
    color: 'bg-teal-500',
    subcategories: [
       { id: 'earth-science-main', name: 'Trái đất và Không gian' },
    ]
  },
];


// --- PhET SIMULATIONS DATA (Categorized) ---
export const PHET_SIMULATIONS: Record<string, PhetSimulation[]> = {
  // Vật lý
  'physics-mechanics': [ { id: 'phet-forces-and-motion', title: 'Lực và Chuyển động: Cơ bản', description: 'Khám phá các lực khi tác động lên một vật và xem chúng làm thay đổi chuyển động của vật như thế nào.', embedUrl: 'https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_vi.html', }, { id: 'phet-pendulum-lab', title: 'Con lắc đơn', description: 'Thí nghiệm với một hoặc hai con lắc, tìm hiểu các yếu tố ảnh hưởng đến chu kỳ dao động của con lắc.', embedUrl: 'https://phet.colorado.edu/sims/html/pendulum-lab/latest/pendulum-lab_vi.html', }, { id: 'phet-density', title: 'Khối lượng riêng', description: 'Tại sao các vật thể lại nổi hoặc chìm? Thả các vật có khối lượng riêng khác nhau vào chất lỏng để tìm hiểu.', embedUrl: 'https://phet.colorado.edu/sims/html/density/latest/density_vi.html', }, ],
  'physics-sound-waves': [ { id: 'phet-wave-on-a-string', title: 'Sóng trên dây', description: 'Tạo ra các loại sóng khác nhau trên một sợi dây và quan sát các đặc tính như biên độ, tần số và bước sóng.', embedUrl: 'https://phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string_vi.html', }, { id: 'phet-sound', title: 'Âm thanh', description: 'Tìm hiểu cách các tần số và biên độ khác nhau ảnh hưởng đến âm thanh bạn nghe được.', embedUrl: 'https://phet.colorado.edu/sims/html/sound/latest/sound_vi.html', }, ],
  'physics-energy': [ { id: 'phet-energy-skate-park', title: 'Năng lượng trong Sân trượt ván', description: 'Tìm hiểu về bảo toàn năng lượng với một vận động viên trượt ván! Xây dựng các đường trượt, dốc và nhảy cho ván trượt.', embedUrl: 'https://phet.colorado.edu/sims/html/energy-skate-park-basics/latest/energy-skate-park-basics_vi.html', }, ],
  'physics-thermo': [ { id: 'phet-states-of-matter', title: 'Các trạng thái của vật chất', description: 'Quan sát các phân tử di chuyển ở trạng thái rắn, lỏng và khí. Thêm hoặc bớt nhiệt và xem sự thay đổi trạng thái.', embedUrl: 'https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_vi.html', }, { id: 'phet-gas-properties', title: 'Tính chất của chất khí', description: 'Bơm các phân tử khí vào một hộp và xem điều gì xảy ra khi bạn thay đổi thể tích, thêm hoặc bớt nhiệt, và nhiều hơn nữa.', embedUrl: 'https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_vi.html', }, ],
  'physics-quantum': [ { id: 'phet-quantum-wave-interference', title: 'Giao thoa sóng lượng tử', description: 'Khám phá hiện tượng giao thoa khi các hạt lượng tử như electron đi qua hai khe hẹp.', embedUrl: 'https://phet.colorado.edu/sims/html/quantum-wave-interference/latest/quantum-wave-interference_vi.html', }, ],
  'physics-light-radiation': [ { id: 'phet-bending-light', title: 'Khúc xạ ánh sáng', description: 'Quan sát hiện tượng khúc xạ khi ánh sáng đi qua các môi trường khác nhau như không khí, nước, và thủy tinh.', embedUrl: 'https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_vi.html', }, { id: 'phet-molecules-and-light', title: 'Phân tử và Ánh sáng', description: 'Tìm hiểu cách ánh sáng tương tác với các phân tử trong khí quyển.', embedUrl: 'https://phet.colorado.edu/sims/html/molecules-and-light/latest/molecules-and-light_vi.html', }, ],
  'physics-electricity': [ { id: 'phet-circuit-construction-kit', title: 'Bộ xây dựng mạch điện: DC', description: 'Xây dựng các mạch điện với điện trở, bóng đèn, pin và công tắc. Thực hiện các phép đo bằng ampe kế và vôn kế.', embedUrl: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_vi.html', }, { id: 'phet-balloons-and-static-electricity', title: 'Tĩnh điện và bóng bay', description: 'Chà quả bóng bay vào áo len, sau đó quan sát cách quả bóng bay có thể dính vào tường hoặc hút các vật thể khác.', embedUrl: 'https://phet.colorado.edu/sims/html/balloons-and-static-electricity/latest/balloons-and-static-electricity_vi.html', }, { id: 'phet-ohms-law', title: 'Định luật Ôm', description: 'Xem mối quan hệ giữa hiệu điện thế, cường độ dòng điện và điện trở trong một mạch điện đơn giản.', embedUrl: 'https://phet.colorado.edu/sims/html/ohms-law/latest/ohms-law_vi.html', }, ],
  'chem-general': [ { id: 'phet-build-an-atom', title: 'Xây dựng một nguyên tử', description: 'Xây dựng một nguyên tử từ các proton, neutron và electron, và xem nguyên tố, điện tích và khối lượng thay đổi như thế nào.', embedUrl: 'https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_vi.html', }, { id: 'phet-balancing-chemical-equations', title: 'Cân bằng phương trình hóa học', description: 'Làm thế nào để bạn cân bằng một phương trình hóa học? Tìm hiểu các chiến lược để tìm ra hệ số cho toàn bộ phương trình.', embedUrl: 'https://phet.colorado.edu/sims/html/balancing-chemical-equations/latest/balancing-chemical-equations_vi.html', }, { id: 'phet-ph-scale', title: 'Thang đo pH', description: 'Kiểm tra độ pH của các chất lỏng khác nhau như cà phê, nước bọt và xà phòng để xác định chúng là axit, bazơ hay trung tính.', embedUrl: 'https://phet.colorado.edu/sims/html/ph-scale-basics/latest/ph-scale-basics_vi.html', }, { id: 'phet-build-a-molecule', title: 'Xây dựng một phân tử', description: 'Ghép các nguyên tử lại với nhau để tạo thành các phân tử như nước, oxy, carbon dioxide và nhiều hơn nữa!', embedUrl: 'https://phet.colorado.edu/sims/html/build-a-molecule/latest/build-a-molecule_vi.html', }, { id: 'phet-concentration', title: 'Nồng độ', description: 'Pha các dung dịch có nồng độ khác nhau. Tìm hiểu mối quan hệ giữa lượng chất tan, thể tích dung môi và nồng độ.', embedUrl: 'https://phet.colorado.edu/sims/html/concentration/latest/concentration_vi.html', }, ],
  'math-concepts': [ { id: 'phet-fraction-matcher', title: 'Ghép phân số', description: 'Ghép các hình dạng và số phân số để kiếm sao trong trò chơi phân số này.', embedUrl: 'https://phet.colorado.edu/sims/html/fraction-matcher/latest/fraction-matcher_vi.html', }, { id: 'phet-graphing-lines', title: 'Vẽ đồ thị đường thẳng', description: 'Khám phá mối quan hệ giữa phương trình đường thẳng và đồ thị của nó. Thao tác với độ dốc và giao điểm y.', embedUrl: 'https://phet.colorado.edu/sims/html/graphing-lines/latest/graphing-lines_vi.html', }, { id: 'phet-area-builder', title: 'Xây dựng diện tích', description: 'Tạo các hình dạng với diện tích và chu vi cho trước. Tìm hiểu về mối quan hệ giữa diện tích và chu vi.', embedUrl: 'https://phet.colorado.edu/sims/html/area-builder/latest/area-builder_vi.html', }, { id: 'phet-vector-addition', title: 'Cộng vectơ', description: 'Tìm hiểu cách cộng các vectơ. Kéo các vectơ vào đồ thị, thay đổi độ lớn và hướng của chúng, và tìm tổng.', embedUrl: 'https://phet.colorado.edu/sims/html/vector-addition/latest/vector-addition_vi.html', }, ],
  'math-applications': [ { id: 'phet-graphing-quadratics', title: 'Vẽ đồ thị hàm số bậc hai', description: 'Khám phá đồ thị của hàm số bậc hai. Thay đổi các hệ số trong phương trình và xem đồ thị thay đổi như thế nào.', embedUrl: 'https://phet.colorado.edu/sims/html/graphing-quadratics/latest/graphing-quadratics_vi.html', }, { id: 'phet-plinko-probability', title: 'Xác suất Plinko', description: 'Thả các quả bóng qua một trường các chốt tam giác để xem chúng rơi vào các thùng bên dưới. Khám phá xác suất và phân phối chuẩn.', embedUrl: 'https://phet.colorado.edu/sims/html/plinko-probability/latest/plinko-probability_vi.html', }, { id: 'phet-calculus-grapher', title: 'Vẽ đồ thị giải tích', description: 'Khám phá mối liên hệ giữa một hàm và đạo hàm của nó thông qua việc vẽ đồ thị.', embedUrl: 'https://phet.colorado.edu/sims/html/calculus-grapher/latest/calculus-grapher_vi.html', }, ],
  'earth-science-main': [ { id: 'phet-plate-tectonics', title: 'Kiến tạo mảng', description: 'Khám phá cách các mảng kiến tạo di chuyển trên bề mặt Trái Đất. Thay đổi nhiệt độ, thành phần và độ dày của các mảng.', embedUrl: 'https://phet.colorado.edu/sims/html/plate-tectonics/latest/plate-tectonics_vi.html', }, { id: 'phet-greenhouse-effect', title: 'Hiệu ứng nhà kính', description: 'Tìm hiểu xem hiệu ứng nhà kính ảnh hưởng đến nhiệt độ của Trái Đất như thế nào.', embedUrl: 'https://phet.colorado.edu/sims/html/greenhouse-effect/latest/greenhouse-effect_vi.html', }, ],
  'biology-main': [ { id: 'phet-natural-selection', title: 'Chọn lọc tự nhiên', description: 'Khám phá cơ chế chọn lọc tự nhiên bằng cách điều khiển môi trường và gây ra các đột biến ở thỏ.', embedUrl: 'https://phet.colorado.edu/sims/html/natural-selection/latest/natural-selection_vi.html', }, { id: 'phet-gene-expression', title: 'Biểu hiện gen', description: 'Tìm hiểu về mối quan hệ giữa gen và các đặc điểm bằng cách quan sát các protein được tạo ra.', embedUrl: 'https://phet.colorado.edu/sims/html/gene-expression-essentials/latest/gene-expression-essentials_vi.html', }, ],
};

// --- TEST/EXAM DATA ---

export const TEST_SUBJECTS: TestSubject[] = [
  { 
    id: 'test-math', 
    name: 'Toán', 
    icon: CalculatorIcon,
    description: 'Kiểm tra 15 phút, 1 tiết và đề thi học kỳ.',
    tags: ['15 Phút', '45 Phút', 'Học Kỳ'],
    color: 'bg-blue-500'
  },
  { 
    id: 'test-literature', 
    name: 'Ngữ văn', 
    icon: DocumentTextIcon,
    description: 'Đọc hiểu văn bản, Tiếng Việt và Làm văn.',
    tags: ['Đọc hiểu', 'Nghị luận', 'Tự sự'],
    color: 'bg-amber-500'
  },
  { 
    id: 'test-english', 
    name: 'Tiếng Anh', 
    icon: TowerIcon,
    description: 'Ngữ pháp, Từ vựng, Đọc hiểu và Viết.',
    tags: ['Grammar', 'Reading', 'Writing'],
    color: 'bg-rose-500'
  },
  { 
    id: 'test-science', 
    name: 'Khoa học tự nhiên', 
    icon: ScienceIcon,
    description: 'Lý - Hóa - Sinh tích hợp theo chương trình mới.',
    tags: ['KHTN 6-9', 'Trắc nghiệm', 'Thí nghiệm'],
    color: 'bg-green-500'
  },
  { 
    id: 'test-history-geo', 
    name: 'Lịch sử và Địa lí', 
    icon: HistoryIcon,
    description: 'Kiểm tra kiến thức Lịch sử và Địa lí.',
    tags: ['Lịch sử', 'Địa lí', 'Trắc nghiệm'],
    color: 'bg-orange-500'
  },
];

export const TEST_TYPES: TestType[] = [ { id: '15-minute', name: 'Kiểm tra 15 phút', duration: '15 Phút', description: 'Bài kiểm tra ngắn để ôn tập kiến thức vừa học.', questionCount: 10, essayCount: 0, color: 'bg-sky-500' }, { id: '45-minute', name: 'Kiểm tra 1 tiết', duration: '45 Phút', description: 'Bài kiểm tra định kỳ, bao gồm cả trắc nghiệm và tự luận.', questionCount: 25, essayCount: 2, color: 'bg-orange-500' }, { id: 'semester', name: 'Thi Học kỳ', duration: '60-90 Phút', description: 'Đề thi tổng hợp kiến thức toàn học kỳ. Thời gian tuỳ môn học.', questionCount: 40, essayCount: 3, color: 'bg-purple-500' } ];
export const MOCK_EXAM_SUBJECTS: MockExamSubject[] = [ { id: 'mock-math', name: 'Toán', icon: CalculatorIcon, description: 'Đề thi thử vào 10, thi thử THPTQG.', tags: ['Thi vào 10', 'Chuyên Toán', '90 Phút'], color: 'bg-blue-500' }, { id: 'mock-literature', name: 'Ngữ văn', icon: DocumentTextIcon, description: 'Đề thi thử Văn vào lớp 10 các trường chuyên.', tags: ['Vào 10', 'Văn mẫu', '120 Phút'], color: 'bg-amber-500' }, { id: 'mock-english', name: 'Tiếng Anh', icon: TowerIcon, description: 'Đề thi thử chuẩn form vào lớp 10 và THPTQG.', tags: ['Đề chuyên', 'IELTS form', '60 Phút'], color: 'bg-rose-500' }, { id: 'mock-science', name: 'Khoa học tự nhiên', icon: ScienceIcon, description: 'Đề thi thử tổng hợp KHTN.', tags: ['Thi vào 10', 'Đánh giá năng lực'], color: 'bg-green-500' }, { id: 'mock-history-geo', name: 'Lịch sử và Địa lí', icon: HistoryIcon, description: 'Đề thi thử Sử - Địa.', tags: ['Thi vào 10', 'Tổng hợp'], color: 'bg-orange-500' }, ];
export const TEST_GRADES: TestGrade[] = [ { id: 'grade-6', name: 'Lớp 6' }, { id: 'grade-7', name: 'Lớp 7' }, { id: 'grade-8', name: 'Lớp 8' }, { id: 'grade-9', name: 'Lớp 9' }, ];
export const MOCK_EXAM_GRADES: TestGrade[] = [ { id: 'entrance-10', name: 'Thi vào lớp 10' } ];

// --- SOUNDS ---
export const CORRECT_ANSWER_SOUND = 'data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YRAAAACAgICAgICAgICAgICAgICA'; 
export const INCORRECT_ANSWER_SOUND = 'data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YRAAAACAgICAgICAgICAgICAgICA';

// --- PRACTICE LESSONS DATA (Auto-generated from Course Data) ---

const generatePracticeLessons = (course: Course): PracticeChapter[] => {
    return course.chapters.map(chapter => ({
        id: `sp-${chapter.id}`,
        title: chapter.title,
        lessons: chapter.lessons.map(lesson => ({
            id: `sp-${lesson.id}`,
            title: lesson.title,
        })),
    }));
};

export const PRACTICE_LESSONS_DATA: Record<string, PracticeChapter[]> = {
    // Mathematics
    'sp-math-grade-6': generatePracticeLessons(MATH_6_COURSE_DATA),
    'sp-math-grade-7': generatePracticeLessons(MATH_7_COURSE_DATA),
    'sp-math-grade-8': generatePracticeLessons(MATH_8_COURSE_DATA),
    'sp-math-grade-9': generatePracticeLessons(MATH_9_COURSE_DATA),
    // Literature
    'sp-literature-grade-6': generatePracticeLessons(LIT_6_COURSE_DATA),
    'sp-literature-grade-7': generatePracticeLessons(LIT_7_COURSE_DATA),
    'sp-literature-grade-8': generatePracticeLessons(LIT_8_COURSE_DATA),
    'sp-literature-grade-9': generatePracticeLessons(LIT_9_COURSE_DATA),
    // English
    'sp-english-grade-6': generatePracticeLessons(ENG_6_COURSE_DATA),
    'sp-english-grade-7': generatePracticeLessons(ENG_7_COURSE_DATA),
    'sp-english-grade-8': generatePracticeLessons(ENG_8_COURSE_DATA),
    'sp-english-grade-9': generatePracticeLessons(ENG_9_COURSE_DATA),
    // Science
    'sp-science-grade-6': generatePracticeLessons(SCI_6_COURSE_DATA),
    'sp-science-grade-7': generatePracticeLessons(SCI_7_COURSE_DATA),
    'sp-science-grade-8': generatePracticeLessons(SCI_8_COURSE_DATA),
    'sp-science-grade-9': generatePracticeLessons(SCI_9_COURSE_DATA),
    // History and Geo
    'sp-history-geo-grade-6': generatePracticeLessons(HG_6_COURSE_DATA),
    'sp-history-geo-grade-7': generatePracticeLessons(HG_7_COURSE_DATA),
    'sp-history-geo-grade-8': generatePracticeLessons(HG_8_COURSE_DATA),
    'sp-history-geo-grade-9': generatePracticeLessons(HG_9_COURSE_DATA),
};

// --- LESSON LOOKUP MAP ---
// This map allows for quick retrieval of lesson details from just a lesson ID.
// It's used in the PersonalizedDashboard to display completed lessons.
export const LESSON_LOOKUP_MAP: Record<string, LessonLookupInfo> = {};

// Auto-generate the lookup map from all available courses.
Object.values(ALL_COURSES).forEach(course => {
    const gradeName = `Lớp ${course.gradeLevel}`;
    course.chapters.forEach(chapter => {
        chapter.lessons.forEach(lesson => {
            LESSON_LOOKUP_MAP[lesson.id] = {
                title: lesson.title,
                courseId: course.id,
                gradeName: gradeName,
                subjectName: course.subjectName,
            };
        });
    });
});