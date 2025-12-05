
import type { Subject, Module, Course, Grade, PhetSimulation, LabCategory, TestSubject, TestGrade, SelfPracticeSubject, PracticeChapter, MockExamSubject, LectureSubject, TestType } from './types';
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
} from './components/icons';

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
    tags: ['Lớp 6 - 9', '29 Chủ đề', 'Bám sát SGK'],
    color: 'bg-blue-500',
  },
  {
    id: 'sp-literature',
    name: 'Ngữ văn',
    description: 'Đọc hiểu văn bản và Tiếng Việt.',
    icon: DocumentTextIcon,
    tags: ['Lớp 6 - 9', '30 Chủ đề', 'Soạn văn'],
    color: 'bg-amber-500',
  },
  {
    id: 'sp-english',
    name: 'Tiếng Anh',
    description: 'Từ vựng, Ngữ pháp và Kỹ năng.',
    icon: TowerIcon,
    tags: ['Lớp 6 - 9', '54 Chủ đề', 'Global Success'],
    color: 'bg-rose-500',
  },
  {
    id: 'sp-science',
    name: 'Khoa học tự nhiên',
    description: 'Lý, Hóa, Sinh tích hợp.',
    icon: ScienceIcon,
    tags: ['Lớp 6 - 9', '40 Chủ đề', 'Thí nghiệm ảo'],
    color: 'bg-green-500',
  },
  {
    id: 'sp-history-geo',
    name: 'Lịch sử và Địa lí',
    description: 'Khám phá thế giới và quá khứ.',
    icon: HistoryIcon,
    tags: ['Lớp 6 - 9', '38 Chủ đề', 'Bản đồ số'],
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
};


// --- COURSE DATA ---
const MATH_9_COURSE_DATA: Course = {
    id: 'math-9',
    subjectName: 'Toán',
    gradeLevel: 9,
    title: 'Kết nối tri thức với cuộc sống',
    chapters: [
        {
            id: 'm9-c1',
            title: 'Chương I. PHƯƠNG TRÌNH VÀ HỆ HAI PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN.',
            lessons: [
                { id: 'm9-c1-l1', title: 'Bài 1. Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=5k94-f_O-h0' },
                { id: 'm9-c1-l2', title: 'Bài 2. Giải hệ hai phương trình bậc nhất hai ẩn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=gT8-X3A-h-4' },
                { id: 'm9-c1-l3', title: 'Bài 3. Giải bài toán bằng cách lập hệ phương trình.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=0r-E2T62CzU' },
            ]
        },
        {
            id: 'm9-c2',
            title: 'Chương II. PHƯƠNG TRÌNH VÀ BẤT PHƯƠNG TRÌNH BẬC NHẤT MỘT ẨN.',
            lessons: [
                { id: 'm9-c2-l4', title: 'Bài 4. Phương trình quy về phương trình bậc nhất một ẩn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm9-c2-l5', title: 'Bài 5. Bất đẳng thức và tính chất.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm9-c2-l6', title: 'Bài 6. Bất phương trình bậc nhất một ẩn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm9-c2-l7', title: 'Bài tập cuối chương II.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm9-c3',
            title: 'Chương III. CĂN BẬC HAI VÀ CĂN BẬC BA.',
            lessons: [
                { id: 'm9-c3-l7', title: 'Bài 7. Căn bậc hai và căn thức bậc hai.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm9-c3-l8', title: 'Bài 8. Khai căn bậc hai với phép nhân và phép chia.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm9-c3-l9', title: 'Bài 9. Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm9-c3-l10', title: 'Bài 10. Căn bậc ba và căn thức bậc ba.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm9-c4',
            title: 'Chương IV. HỆ THỨC LƯỢNG TRONG TAM GIÁC VUÔNG.',
            lessons: [
                { id: 'm9-c4-l11', title: 'Bài 11. Tỉ số lượng giác của góc nhọn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm9-c4-l12', title: 'Bài 12. Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm9-c5',
            title: 'Chương V. ĐƯỜNG TRÒN.',
            lessons: [
                { id: 'm9-c5-l13', title: 'Bài 13. Mở đầu về đường tròn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm9-c5-l14', title: 'Bài 14. Cung và dây của một đường tròn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm9-c5-l15', title: 'Bài 15. Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm9-c5-l16', title: 'Bài 16. Vị trí tương đối của đường thẳng và đường tròn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm9-c5-l17', title: 'Bài 17. Vị trí tương đối của hai đường tròn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm9-c6',
            title: 'Chương VI. HÀM SỐ y = ax2 (a khác 0). PHƯƠNG TRÌNH BẬC HAI MỘT ẨN.',
            lessons: [
                { id: 'm9-c6-l18', title: 'Bài 18. Hàm số y = ax2 (a ≠ 0).', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm9-c6-l19', title: 'Bài 19. Phương trình bậc hai một ẩn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm9-c6-l20', title: 'Bài 20. Định lí Viète và ứng dụng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm9-c6-l21', title: 'Bài 21. Giải bài toán bằng cách lập phương trình.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm9-c7',
            title: 'Chương VII. TẦN SỐ VÀ TẦN SỐ TƯƠNG ĐỐI.',
            lessons: [
                { id: 'm9-c7-l22', title: 'Bài 22. Bảng tần số và biểu đồ tần số.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm9-c7-l23', title: 'Bài 23. Bảng tần số tương đối và biểu đồ tần số tương đối.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm9-c7-l24', title: 'Bài 24. Bảng tần số, tần số tương đối ghép nhóm và biểu đồ.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm9-c7-l25', title: 'Bài tập cuối chương VII.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm9-c8',
            title: 'Chương VIII. XÁC SUẤT CỦA BIẾN CỐ TRONG MỘT SỐ MÔ HÌNH XÁC SUẤT ĐƠN GIẢN.',
            lessons: [
                { id: 'm9-c8-l25', title: 'Bài 25. Phép thử ngẫu nhiên và không gian mẫu.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm9-c8-l26', title: 'Bài 26. Xác suất của biến cố liên quan tới phép thử.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm9-c9',
            title: 'Chương IX. ĐƯỜNG TRÒN NGOẠI TIẾP VÀ ĐƯỜNG TRÒN NỘI TIẾP.',
            lessons: [
                { id: 'm9-c9-l27', title: 'Bài 27. Góc nội tiếp.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm9-c9-l28', title: 'Bài 28. Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm9-c9-l29', title: 'Bài 29. Tứ giác nội tiếp.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm9-c9-l30', title: 'Bài 30. Đa giác đều.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm9-c10',
            title: 'Chương X. MỘT SỐ HÌNH KHỐI TRONG THỰC TIỄN.',
            lessons: [
                { id: 'm9-c10-l31', title: 'Bài 31. Hình trụ và hình nón.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm9-c10-l32', title: 'Bài 32. Hình cầu.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
    ]
};

const MATH_8_COURSE_DATA: Course = {
    id: 'math-8',
    subjectName: 'Toán',
    gradeLevel: 8,
    title: 'Kết nối tri thức với cuộc sống',
    chapters: [
        {
            id: 'm8-c1',
            title: 'Chương I. ĐA THỨC.',
            lessons: [
                { id: 'm8-c1-l1', title: 'Bài 1. Đơn thức.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c1-l2', title: 'Bài 2. Đa thức.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c1-l3', title: 'Bài 3. Phép cộng và phép trừ đa thức.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c1-l4', title: 'Bài 4. Phép nhân đa thức.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c1-l5', title: 'Bài 5. Phép chia đa thức cho đơn thức.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm8-c2',
            title: 'Chương II. HẰNG ĐẲNG THỨC ĐÁNG NHỚ VÀ ỨNG DỤNG.',
            lessons: [
                { id: 'm8-c2-l6', title: 'Bài 6. Hiệu hai bình phương. Bình phương của một tổng hay một hiệu.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c2-l7', title: 'Bài 7. Lập phương của một tổng hay một hiệu.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c2-l8', title: 'Bài 8. Tổng và hiệu hai lập hương.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c2-l9', title: 'Bài 9. Phân tích đa thức thành nhân tử.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm8-c3',
            title: 'Chương III. TỨ GIÁC.',
            lessons: [
                { id: 'm8-c3-l10', title: 'Bài 10. Tứ giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c3-l11', title: 'Bài 11. Hình thang cân.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c3-l12', title: 'Bài 12. Hình bình hành.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c3-l13', title: 'Bài 13. Hình chữ nhật.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c3-l14', title: 'Bài 14. Hình thoi và hình vuông.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm8-c4',
            title: 'CHƯƠNG IV. ĐỊNH LÍ THALES.',
            lessons: [
                { id: 'm8-c4-l15', title: 'Bài 15. Định lí Thalès trong tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c4-l16', title: 'Bài 16. Đường trung bình của tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c4-l17', title: 'Bài 17. Tính chất đường phân giác của tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm8-c5',
            title: 'Chương V. DỮ LIỆU VÀ BIỂU ĐỒ.',
            lessons: [
                { id: 'm8-c5-l18', title: 'Bài 18. Thu thập và phân loại dữ liệu.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c5-l19', title: 'Bài 19. Biểu diễn dữ liệu bằng bảng, biểu đồ.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c5-l20', title: 'Bài 20. Phân tích số liệu thống kê dựa vào biểu đó.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm8-c6',
            title: 'Chương VI. PHÂN THỨC ĐẠI SỐ.',
            lessons: [
                { id: 'm8-c6-l21', title: 'Bài 21. Phần thức đại số.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c6-l22', title: 'Bài 22. Tính chất cơ bản của phân thức đại số.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c6-l23', title: 'Bài 23. Phép cộng và phép trừ phân thức đại số.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c6-l24', title: 'Bài 24. Phép nhân và phép chia phân thức đại số.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm8-c7',
            title: 'Chương VII. PHƯƠNG TRÌNH BẬC NHẤT VÀ HÀM SỐ BẬC NHẤT.',
            lessons: [
                { id: 'm8-c7-l25', title: 'Bài 25. Phương trình bậc nhất một ẩn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c7-l26', title: 'Bài 26. Giải bài toán bằng cách lập phương trình.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c7-l27', title: 'Bài 27. Khái niệm hàm số và đô thị của hàm số.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c7-l28', title: 'Bài 28. Hàm số bậc nhất và đô thị của hàm số bậc nhất.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c7-l29', title: 'Bài 29. Hệ số góc của đường thẳng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm8-c8',
            title: 'Chương VIII. MỞ ĐẦU VỀ TÍNH XÁC SUẤT CỦA BIẾN CỐ.',
            lessons: [
                { id: 'm8-c8-l30', title: 'Bài 30. Kết quả có thể và kết quả thuận lợi.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c8-l31', title: 'Bài 31. Cách tính xác suất của biến cố bằng tỉ số.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c8-l32', title: 'Bài 32. Mối liên hệ giữa xác suất thực nghiệm với xác suất và ứng dụng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm8-c9',
            title: 'Chương IX. TAM GIÁC ĐỒNG DẠNG.',
            lessons: [
                { id: 'm8-c9-l33', title: 'Bài 33. Hai tam giác đồng dạng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c9-l34', title: 'Bài 34. Ba trường hợp đồng dạng của hai tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c9-l35', title: 'Bài 35. Định lí Pythagore và ứng dụng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c9-l36', title: 'Bài 36. Các trường hợp đồng dạng của hai tam giác vuông.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c9-l37', title: 'Bài 37. Hình đồng dạng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm8-c10',
            title: 'Chương X. MỘT SỐ HÌNH KHỐI TRONG THỰC TIỄN.',
            lessons: [
                { id: 'm8-c10-l38', title: 'Bài 38. Hình chóp tam giác đều.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm8-c10-l39', title: 'Bài 39. Hình chóp tứ giác đều.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
    ]
};

const MATH_7_COURSE_DATA: Course = {
    id: 'math-7',
    subjectName: 'Toán',
    gradeLevel: 7,
    title: 'Kết nối tri thức với cuộc sống',
    chapters: [
        {
            id: 'm7-c1',
            title: 'Chương I. SỐ HỮU TỈ.',
            lessons: [
                { id: 'm7-c1-l1', title: 'Bài 1. Tập hợp các số hữu tỉ.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c1-l2', title: 'Bài 2. Cộng, trừ, nhân, chia số hữu tỉ.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c1-l3', title: 'Bài 3. Luỹ thừa với số mũ tự nhiên của một số hữu tỉ.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c1-l4', title: 'Bài 4. Thứ tự thực hiện các phép tính. Quy tắc chuyển vế.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm7-c2',
            title: 'Chương II. SỐ THỰC.',
            lessons: [
                { id: 'm7-c2-l5', title: 'Bài 5. Làm quen với số thập phân vô hạn tuần hoàn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c2-l6', title: 'Bài 6. Số vô tỉ. Căn bậc hai số học.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c2-l7', title: 'Bài 7. Tập hợp các số thực.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm7-c3',
            title: 'Chương III. GÓC VÀ ĐƯỜNG THẲNG SONG SONG.',
            lessons: [
                { id: 'm7-c3-l8', title: 'Bài 8. Góc ở vị trí đặc biệt. Tia phân giác của một góc.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c3-l9', title: 'Bài 9. Hai đường thẳng song song và dấu hiệu nhận biết.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c3-l10', title: 'Bài 10. Tiên đề Euclid. Tính chất của hai đường thẳng song song.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c3-l11', title: 'Bài 11. Định lí và chứng minh định lí.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm7-c4',
            title: 'Chương IV. TAM GIÁC BẰNG NHAU.',
            lessons: [
                { id: 'm7-c4-l12', title: 'Bài 12. Tổng các góc trong một tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c4-l13', title: 'Bài 13. Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất của tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c4-l14', title: 'Bài 14. Trường hợp bằng nhau thứ hai và thứ ba của tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c4-l15', title: 'Bài 15. Các trường hợp bằng nhau của tam giác vuông.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c4-l16', title: 'Bài 16. Tam giác cân. Đường trung trực của đoạn thẳng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm7-c5',
            title: 'Chương V. THU THẬP VÀ BIỂU DIỄN DỮ LIỆU.',
            lessons: [
                { id: 'm7-c5-l17', title: 'Bài 17. Thu thập và phân loại dữ liệu.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c5-l18', title: 'Bài 18. Biểu đồ hình quạt tròn.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c5-l19', title: 'Bài 19. Biểu đồ đoạn thẳng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm7-c6',
            title: 'Chương VI. TỈ LỆ THỨC VÀ ĐẠI LƯỢNG TỈ LỆ.',
            lessons: [
                { id: 'm7-c6-l20', title: 'Bài 20. Tỉ lệ thức.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c6-l21', title: 'Bài 21. Tính chất của dãy tỉ số bằng nhau.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c6-l22', title: 'Bài 22. Đại lượng tỉ lệ thuận.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c6-l23', title: 'Bài 23. Đại lượng tỉ lệ nghịch.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm7-c7',
            title: 'Chương VII. BIỂU THỨC ĐẠI SỐ VÀ ĐA THỨC MỘT BIẾN.',
            lessons: [
                { id: 'm7-c7-l24', title: 'Bài 24. Biểu thức đại số.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c7-l25', title: 'Bài 25. Đa thức một biến.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c7-l26', title: 'Bài 26. Phép cộng và phép trừ đa thức một biến.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c7-l27', title: 'Bài 27. Phép nhân đa thức một biến.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c7-l28', title: 'Bài 28. Phép chia đa thức một biến.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm7-c8',
            title: 'Chương VIII. LÀM QUEN VỚI BIẾN CỐ VÀ XÁC SUẤT CỦA BIẾN CỐ.',
            lessons: [
                { id: 'm7-c8-l29', title: 'Bài 29. Làm quen với biến cố.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c8-l30', title: 'Bài 30. Làm quen với xác suất của biến cố.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm7-c9',
            title: 'Chương IX. QUAN HỆ GIỮA CÁC YẾU TỐ TRONG MỘT TAM GIÁC.',
            lessons: [
                { id: 'm7-c9-l31', title: 'Bài 31. Quan hệ giữa góc và cạnh đối diện trong một tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c9-l32', title: 'Bài 32. Quan hệ giữa đường vuông góc và đường xiên.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c9-l33', title: 'Bài 33. Quan hệ giữa ba cạnh của một tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c9-l34', title: 'Bài 34. Sự đồng quy của ba trung tuyến, ba đường phân giác trong một tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c9-l35', title: 'Bài 35. Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm7-c10',
            title: 'Chương X. MỘT SỐ HÌNH KHỐI TRONG THỰC TIỄN.',
            lessons: [
                { id: 'm7-c10-l36', title: 'Bài 36. Hình hộp chữ nhật và hình lập phương.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c10-l37', title: 'Luyện tập.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm7-c10-l38', title: 'Bài 37. Hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
    ]
};

const MATH_6_COURSE_DATA: Course = {
    id: 'math-6',
    subjectName: 'Toán',
    gradeLevel: 6,
    title: 'Kết nối tri thức với cuộc sống',
    chapters: [
        {
            id: 'm6-c1',
            title: 'CHƯƠNG I. TẬP HỢP CÁC SỐ TỰ NHIÊN.',
            lessons: [
                { id: 'm6-c1-l1', title: 'Bài 1. Tập hợp.', type: 'video', videoUrl: 'https://youtu.be/Ho4OUW9QkpM?si=98JkcOiqoMOwmVel' },
                { id: 'm6-c1-l2', title: 'Bài 2. Cách ghi số tự nhiên.', type: 'video', videoUrl: 'https://vcos.cloudstorage.com.vn/1-bucket-1111/Gi%E1%BA%A3i_M%C3%A3_Nh%E1%BB%AFng_Con_S%E1%BB%91.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=atm305057-s3user%2F20251204%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251204T170955Z&X-Amz-Expires=600&X-Amz-Signature=db27a6fd9c37fd2f522cc6edcc91f2fb0c4a6f3cc9f51cc4241e38da10a3eec4&X-Amz-SignedHeaders=host' },
                { id: 'm6-c1-l3', title: 'Bài 3. Thứ tự trong tập hợp các số tự nhiên.', type: 'video', videoUrl: 'https://vcos.cloudstorage.com.vn/1-bucket-1111/Th%E1%BB%A9_T%E1%BB%B1_C%C3%A1c_S%E1%BB%91_T%E1%BB%B1_Nhi%C3%AAn.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=atm305057-s3user%2F20251204%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251204T170908Z&X-Amz-Expires=600&X-Amz-Signature=c9638476fc5d079a823a6a4188c8ca4314417e65e28b1c39702fa0ecabd824c0&X-Amz-SignedHeaders=host' },
                { id: 'm6-c1-l4', title: 'Bài 4. Phép cộng và phép trừ số tự nhiên.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c1-l5', title: 'Bài 5. Phép nhân và phép chia số tự nhiên.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c1-l6', title: 'Bài 6. Luỹ thừa với số mũ tự nhiên.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c1-l7', title: 'Bài 7. Thứ tự thực hiện các phép tính.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm6-c2',
            title: 'CHƯƠNG II. TÍNH CHIA HẾT TRONG TẬP HỢP CÁC SỐ TỰ NHIÊN.',
            lessons: [
                { id: 'm6-c2-l8', title: 'Bài 8. Quan hệ chia hết và tính chất.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c2-l9', title: 'Bài 9. Dấu hiệu chia hết.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c2-l10', title: 'Bài 10. Số nguyên tố.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c2-l11', title: 'Bài 11. Ước chung. Ước chung lớn nhất.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c2-l12', title: 'Bài 12. Bội chung. Bội chung nhỏ nhất.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm6-c3',
            title: 'CHƯƠNG III. SỐ NGUYÊN.',
            lessons: [
                 { id: 'm6-c3-l13', title: 'Bài 13. Tập hợp các số nguyên.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                 { id: 'm6-c3-l14', title: 'Bài 14. Phép cộng và phép trừ số nguyên.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                 { id: 'm6-c3-l15', title: 'Bài 15. Quy tắc dấu ngoặc.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                 { id: 'm6-c3-l16', title: 'Bài 16. Phép nhân số nguyên.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                 { id: 'm6-c3-l17', title: 'Bài 17. Phép chia hết. Ước và bội của một số nguyên.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm6-c4',
            title: 'CHƯƠNG IV. MỘT SỐ HÌNH PHẲNG TRONG THỰC TIỄN.',
            lessons: [
                { id: 'm6-c4-l18', title: 'Bài 18. Hình tam giác đều. Hình vuông. Hình lục giác đều.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c4-l19', title: 'Bài 19. Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c4-l20', title: 'Bài 20. Chu vi và diện tích của một số tứ giác đã học.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm6-c5',
            title: 'CHƯƠNG V. TÍNH ĐỐI XỨNG CỦA HÌNH PHẲNG TRONG TỰ NHIÊN.',
            lessons: [
                { id: 'm6-c5-l21', title: 'Bài 21. Hình có trục đối xứng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c5-l22', title: 'Bài 22. Hình có tâm đối xứng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm6-c6',
            title: 'CHƯƠNG VI. PHÂN SỐ.',
            lessons: [
                { id: 'm6-c6-l23', title: 'Bài 23. Mở rộng phân số. Phân số bằng nhau.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c6-l24', title: 'Bài 24. So sánh phân số. Hỗn số dương.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c6-l25', title: 'Bài 25. Phép cộng và phép trừ phân số.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c6-l26', title: 'Bài 26. Phép nhân và phép chia phân số.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c6-l27', title: 'Bài 27. Hai bài toán về phân số.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm6-c7',
            title: 'CHƯƠNG VII. SỐ THẬP PHÂN.',
            lessons: [
                { id: 'm6-c7-l28', title: 'Bài 28. Số thập phân.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c7-l29', title: 'Bài 29. Tính toán với số thập phân.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c7-l30', title: 'Bài 30. Làm tròn và ước lượng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c7-l31', title: 'Bài 31. Một số bài toán về tỉ số và tỉ số phần trăm.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm6-c8',
            title: 'CHƯƠNG VIII. NHỮNG HÌNH HÌNH HỌC CƠ BẢN.',
            lessons: [
                { id: 'm6-c8-l32', title: 'Bài 32. Điểm và đường thẳng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c8-l33', title: 'Bài 33. Điểm nằm giữa hai điểm. Tia.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c8-l34', title: 'Bài 34. Đoạn thẳng. Độ dài đoạn thẳng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c8-l35', title: 'Bài 35. Trung điểm của đoạn thẳng.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c8-l36', title: 'Bài 36. Góc.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c8-l37', title: 'Bài 37. Số đo góc.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
        {
            id: 'm6-c9',
            title: 'CHƯƠNG IX. DỮ LIỆU VÀ XÁC SUẤT THỰC NGHIỆM.',
            lessons: [
                { id: 'm6-c9-l38', title: 'Bài 38. Dữ liệu và thu thập dữ liệu.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c9-l39', title: 'Bài 39. Bảng thống kê và biểu đồ tranh.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c9-l40', title: 'Bài 40. Biểu đồ cột.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c9-l41', title: 'Bài 41. Biểu đồ cột kép.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c9-l42', title: 'Bài 42. Kết quả có thể và sự kiện trong trò chơi, thí nghiệm.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
                { id: 'm6-c9-l43', title: 'Bài 43. Xác suất thực nghiệm.', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=example' },
            ]
        },
    ]
};


// This is the "master map" of all available courses.
// App.tsx uses this to find the correct course data based on the user's selection.
export const ALL_COURSES: Record<string, Course> = {
  'math-6': MATH_6_COURSE_DATA,
  'math-7': MATH_7_COURSE_DATA,
  'math-8': MATH_8_COURSE_DATA,
  'math-9': MATH_9_COURSE_DATA,
  // Add more course data here for other subjects and grades as it becomes available
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
  'physics-mechanics': [
    {
      id: 'phet-forces-and-motion',
      title: 'Lực và Chuyển động: Cơ bản',
      description: 'Khám phá các lực khi tác động lên một vật và xem chúng làm thay đổi chuyển động của vật như thế nào.',
      embedUrl: 'https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_vi.html',
    },
    {
      id: 'phet-pendulum-lab',
      title: 'Con lắc đơn',
      description: 'Thí nghiệm với một hoặc hai con lắc, tìm hiểu các yếu tố ảnh hưởng đến chu kỳ dao động của con lắc.',
      embedUrl: 'https://phet.colorado.edu/sims/html/pendulum-lab/latest/pendulum-lab_vi.html',
    },
    {
      id: 'phet-density',
      title: 'Khối lượng riêng',
      description: 'Tại sao các vật thể lại nổi hoặc chìm? Thả các vật có khối lượng riêng khác nhau vào chất lỏng để tìm hiểu.',
      embedUrl: 'https://phet.colorado.edu/sims/html/density/latest/density_vi.html',
    },
  ],
  'physics-sound-waves': [
     {
      id: 'phet-wave-on-a-string',
      title: 'Sóng trên dây',
      description: 'Tạo ra các loại sóng khác nhau trên một sợi dây và quan sát các đặc tính như biên độ, tần số và bước sóng.',
      embedUrl: 'https://phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string_vi.html',
    },
    {
      id: 'phet-sound',
      title: 'Âm thanh',
      description: 'Tìm hiểu cách các tần số và biên độ khác nhau ảnh hưởng đến âm thanh bạn nghe được.',
      embedUrl: 'https://phet.colorado.edu/sims/html/sound/latest/sound_vi.html',
    },
  ],
  'physics-energy': [
    {
      id: 'phet-energy-skate-park',
      title: 'Năng lượng trong Sân trượt ván',
      description: 'Tìm hiểu về bảo toàn năng lượng với một vận động viên trượt ván! Xây dựng các đường trượt, dốc và nhảy cho ván trượt.',
      embedUrl: 'https://phet.colorado.edu/sims/html/energy-skate-park-basics/latest/energy-skate-park-basics_vi.html',
    },
  ],
  'physics-thermo': [
    {
      id: 'phet-states-of-matter',
      title: 'Các trạng thái của vật chất',
      description: 'Quan sát các phân tử di chuyển ở trạng thái rắn, lỏng và khí. Thêm hoặc bớt nhiệt và xem sự thay đổi trạng thái.',
      embedUrl: 'https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_vi.html',
    },
    {
      id: 'phet-gas-properties',
      title: 'Tính chất của chất khí',
      description: 'Bơm các phân tử khí vào một hộp và xem điều gì xảy ra khi bạn thay đổi thể tích, thêm hoặc bớt nhiệt, và nhiều hơn nữa.',
      embedUrl: 'https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_vi.html',
    },
  ],
  'physics-quantum': [
    {
      id: 'phet-quantum-wave-interference',
      title: 'Giao thoa sóng lượng tử',
      description: 'Khám phá hiện tượng giao thoa khi các hạt lượng tử như electron đi qua hai khe hẹp.',
      embedUrl: 'https://phet.colorado.edu/sims/html/quantum-wave-interference/latest/quantum-wave-interference_vi.html',
    },
  ],
  'physics-light-radiation': [
     {
      id: 'phet-bending-light',
      title: 'Khúc xạ ánh sáng',
      description: 'Quan sát hiện tượng khúc xạ khi ánh sáng đi qua các môi trường khác nhau như không khí, nước, và thủy tinh.',
      embedUrl: 'https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_vi.html',
    },
     {
      id: 'phet-molecules-and-light',
      title: 'Phân tử và Ánh sáng',
      description: 'Tìm hiểu cách ánh sáng tương tác với các phân tử trong khí quyển.',
      embedUrl: 'https://phet.colorado.edu/sims/html/molecules-and-light/latest/molecules-and-light_vi.html',
    },
  ],
  'physics-electricity': [
    {
      id: 'phet-circuit-construction-kit',
      title: 'Bộ xây dựng mạch điện: DC',
      description: 'Xây dựng các mạch điện với điện trở, bóng đèn, pin và công tắc. Thực hiện các phép đo bằng ampe kế và vôn kế.',
      embedUrl: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_vi.html',
    },
    {
      id: 'phet-balloons-and-static-electricity',
      title: 'Tĩnh điện và bóng bay',
      description: 'Chà quả bóng bay vào áo len, sau đó quan sát cách quả bóng bay có thể dính vào tường hoặc hút các vật thể khác.',
      embedUrl: 'https://phet.colorado.edu/sims/html/balloons-and-static-electricity/latest/balloons-and-static-electricity_vi.html',
    },
    {
      id: 'phet-ohms-law',
      title: 'Định luật Ôm',
      description: 'Xem mối quan hệ giữa hiệu điện thế, cường độ dòng điện và điện trở trong một mạch điện đơn giản.',
      embedUrl: 'https://phet.colorado.edu/sims/html/ohms-law/latest/ohms-law_vi.html',
    },
  ],
  
  // Hóa học
  'chem-general': [
    {
      id: 'phet-build-an-atom',
      title: 'Xây dựng một nguyên tử',
      description: 'Xây dựng một nguyên tử từ các proton, neutron và electron, và xem nguyên tố, điện tích và khối lượng thay đổi như thế nào.',
      embedUrl: 'https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_vi.html',
    },
    {
      id: 'phet-balancing-chemical-equations',
      title: 'Cân bằng phương trình hóa học',
      description: 'Làm thế nào để bạn cân bằng một phương trình hóa học? Tìm hiểu các chiến lược để tìm ra hệ số cho toàn bộ phương trình.',
      embedUrl: 'https://phet.colorado.edu/sims/html/balancing-chemical-equations/latest/balancing-chemical-equations_vi.html',
    },
    {
      id: 'phet-ph-scale',
      title: 'Thang đo pH',
      description: 'Kiểm tra độ pH của các chất lỏng khác nhau như cà phê, nước bọt và xà phòng để xác định chúng là axit, bazơ hay trung tính.',
      embedUrl: 'https://phet.colorado.edu/sims/html/ph-scale-basics/latest/ph-scale-basics_vi.html',
    },
    {
      id: 'phet-build-a-molecule',
      title: 'Xây dựng một phân tử',
      description: 'Ghép các nguyên tử lại với nhau để tạo thành các phân tử như nước, oxy, carbon dioxide và nhiều hơn nữa!',
      embedUrl: 'https://phet.colorado.edu/sims/html/build-a-molecule/latest/build-a-molecule_vi.html',
    },
    {
      id: 'phet-concentration',
      title: 'Nồng độ',
      description: 'Pha các dung dịch có nồng độ khác nhau. Tìm hiểu mối quan hệ giữa lượng chất tan, thể tích dung môi và nồng độ.',
      embedUrl: 'https://phet.colorado.edu/sims/html/concentration/latest/concentration_vi.html',
    },
  ],
  'chem-quantum': [
    // Placeholder - find a relevant simulation
  ],

  // Toán học
  'math-concepts': [
    {
      id: 'phet-fraction-matcher',
      title: 'Ghép phân số',
      description: 'Ghép các hình dạng và số phân số để kiếm sao trong trò chơi phân số này.',
      embedUrl: 'https://phet.colorado.edu/sims/html/fraction-matcher/latest/fraction-matcher_vi.html',
    },
    {
      id: 'phet-graphing-lines',
      title: 'Vẽ đồ thị đường thẳng',
      description: 'Khám phá mối quan hệ giữa phương trình đường thẳng và đồ thị của nó. Thao tác với độ dốc và giao điểm y.',
      embedUrl: 'https://phet.colorado.edu/sims/html/graphing-lines/latest/graphing-lines_vi.html',
    },
    {
      id: 'phet-area-builder',
      title: 'Xây dựng diện tích',
      description: 'Tạo các hình dạng với diện tích và chu vi cho trước. Tìm hiểu về mối quan hệ giữa diện tích và chu vi.',
      embedUrl: 'https://phet.colorado.edu/sims/html/area-builder/latest/area-builder_vi.html',
    },
    {
      id: 'phet-vector-addition',
      title: 'Cộng vectơ',
      description: 'Tìm hiểu cách cộng các vectơ. Kéo các vectơ vào đồ thị, thay đổi độ lớn và hướng của chúng, và tìm tổng.',
      embedUrl: 'https://phet.colorado.edu/sims/html/vector-addition/latest/vector-addition_vi.html',
    },
  ],
  'math-applications': [
    {
      id: 'phet-graphing-quadratics',
      title: 'Vẽ đồ thị hàm số bậc hai',
      description: 'Khám phá đồ thị của hàm số bậc hai. Thay đổi các hệ số trong phương trình và xem đồ thị thay đổi như thế nào.',
      embedUrl: 'https://phet.colorado.edu/sims/html/graphing-quadratics/latest/graphing-quadratics_vi.html',
    },
    {
      id: 'phet-plinko-probability',
      title: 'Xác suất Plinko',
      description: 'Thả các quả bóng qua một trường các chốt tam giác để xem chúng rơi vào các thùng bên dưới. Khám phá xác suất và phân phối chuẩn.',
      embedUrl: 'https://phet.colorado.edu/sims/html/plinko-probability/latest/plinko-probability_vi.html',
    },
    {
      id: 'phet-calculus-grapher',
      title: 'Vẽ đồ thị giải tích',
      description: 'Khám phá mối liên hệ giữa một hàm và đạo hàm của nó thông qua việc vẽ đồ thị.',
      embedUrl: 'https://phet.colorado.edu/sims/html/calculus-grapher/latest/calculus-grapher_vi.html',
    },
  ],

  // Khoa học Trái đất
  'earth-science-main': [
    {
      id: 'phet-plate-tectonics',
      title: 'Kiến tạo mảng',
      description: 'Khám phá cách các mảng kiến tạo di chuyển trên bề mặt Trái Đất. Thay đổi nhiệt độ, thành phần và độ dày của các mảng.',
      embedUrl: 'https://phet.colorado.edu/sims/html/plate-tectonics/latest/plate-tectonics_vi.html',
    },
    {
      id: 'phet-greenhouse-effect',
      title: 'Hiệu ứng nhà kính',
      description: 'Tìm hiểu xem hiệu ứng nhà kính ảnh hưởng đến nhiệt độ của Trái Đất như thế nào.',
      embedUrl: 'https://phet.colorado.edu/sims/html/greenhouse-effect/latest/greenhouse-effect_vi.html',
    },
  ],

  // Sinh học
  'biology-main': [
    {
      id: 'phet-natural-selection',
      title: 'Chọn lọc tự nhiên',
      description: 'Khám phá cơ chế chọn lọc tự nhiên bằng cách điều khiển môi trường và gây ra các đột biến ở thỏ.',
      embedUrl: 'https://phet.colorado.edu/sims/html/natural-selection/latest/natural-selection_vi.html',
    },
    {
      id: 'phet-gene-expression',
      title: 'Biểu hiện gen',
      description: 'Tìm hiểu về mối quan hệ giữa gen và các đặc điểm bằng cách quan sát các protein được tạo ra.',
      embedUrl: 'https://phet.colorado.edu/sims/html/gene-expression-essentials/latest/gene-expression-essentials_vi.html',
    },
  ],
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

export const TEST_TYPES: TestType[] = [
    {
        id: '15-minute',
        name: 'Kiểm tra 15 phút',
        duration: '15 Phút',
        description: 'Bài kiểm tra ngắn để ôn tập kiến thức vừa học.',
        questionCount: 10,
        essayCount: 0,
        color: 'bg-sky-500'
    },
    {
        id: '45-minute',
        name: 'Kiểm tra 1 tiết',
        duration: '45 Phút',
        description: 'Bài kiểm tra định kỳ, bao gồm cả trắc nghiệm và tự luận.',
        questionCount: 25,
        essayCount: 2,
        color: 'bg-orange-500'
    },
    {
        id: 'semester',
        name: 'Thi Học kỳ',
        duration: '60-90 Phút',
        description: 'Đề thi tổng hợp kiến thức toàn học kỳ. Thời gian tuỳ môn học.',
        questionCount: 40,
        essayCount: 3,
        color: 'bg-purple-500'
    }
];

export const MOCK_EXAM_SUBJECTS: MockExamSubject[] = [
  { 
    id: 'mock-math', 
    name: 'Toán', 
    icon: CalculatorIcon,
    description: 'Đề thi thử vào 10, thi thử THPTQG.',
    tags: ['Thi vào 10', 'Chuyên Toán', '90 Phút'],
    color: 'bg-blue-500'
  },
  { 
    id: 'mock-literature', 
    name: 'Ngữ văn', 
    icon: DocumentTextIcon,
    description: 'Đề thi thử Văn vào lớp 10 các trường chuyên.',
    tags: ['Vào 10', 'Văn mẫu', '120 Phút'],
    color: 'bg-amber-500'
  },
  { 
    id: 'mock-english', 
    name: 'Tiếng Anh', 
    icon: TowerIcon,
    description: 'Đề thi thử chuẩn form vào lớp 10 và THPTQG.',
    tags: ['Đề chuyên', 'IELTS form', '60 Phút'],
    color: 'bg-rose-500'
  },
  { 
    id: 'mock-science', 
    name: 'Khoa học tự nhiên', 
    icon: ScienceIcon,
    description: 'Đề thi thử tổng hợp KHTN.',
    tags: ['Thi vào 10', 'Đánh giá năng lực'],
    color: 'bg-green-500'
  },
  { 
    id: 'mock-history-geo', 
    name: 'Lịch sử và Địa lí', 
    icon: HistoryIcon,
    description: 'Đề thi thử Sử - Địa.',
    tags: ['Thi vào 10', 'Tổng hợp'],
    color: 'bg-orange-500'
  },
];

export const TEST_GRADES: TestGrade[] = [
  { id: 'grade-6', name: 'Lớp 6' },
  { id: 'grade-7', name: 'Lớp 7' },
  { id: 'grade-8', name: 'Lớp 8' },
  { id: 'grade-9', name: 'Lớp 9' },
];

export const MOCK_EXAM_GRADES: TestGrade[] = [
    { id: 'entrance-10', name: 'Thi vào lớp 10' }
];

// --- SOUNDS ---
// Placeholder Base64 audio strings (silent/minimal) for UI feedback
export const CORRECT_ANSWER_SOUND = 'data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YRAAAACAgICAgICAgICAgICAgICA'; 
export const INCORRECT_ANSWER_SOUND = 'data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YRAAAACAgICAgICAgICAgICAgICA';

// --- PRACTICE LESSONS DATA ---
export const PRACTICE_LESSONS_DATA: Record<string, PracticeChapter[]> = {
    // Mathematics
    'sp-math-grade-6': [
        {
            id: 'sp-m6-c1',
            title: 'Chương 1: Tập hợp các số tự nhiên',
            lessons: [
                { id: 'sp-m6-l1', title: 'Tập hợp' },
                { id: 'sp-m6-l2', title: 'Cách ghi số tự nhiên' },
                { id: 'sp-m6-l3', title: 'Thứ tự trong tập hợp các số tự nhiên' },
                { id: 'sp-m6-l4', title: 'Phép cộng và phép trừ số tự nhiên' },
                { id: 'sp-m6-l5', title: 'Phép nhân và phép chia số tự nhiên' },
            ]
        },
        {
             id: 'sp-m6-c2',
            title: 'Chương 2: Tính chia hết trong tập hợp số tự nhiên',
            lessons: [
                { id: 'sp-m6-l6', title: 'Quan hệ chia hết và tính chất' },
                { id: 'sp-m6-l7', title: 'Dấu hiệu chia hết cho 2, 5' },
                { id: 'sp-m6-l8', title: 'Dấu hiệu chia hết cho 3, 9' },
                 { id: 'sp-m6-l9', title: 'Số nguyên tố' },
            ]
        }
    ],
    'sp-math-grade-7': [
        {
            id: 'sp-m7-c1',
            title: 'Chương 1: Số hữu tỉ',
            lessons: [
                { id: 'sp-m7-l1', title: 'Tập hợp các số hữu tỉ' },
                { id: 'sp-m7-l2', title: 'Cộng, trừ, nhân, chia số hữu tỉ' },
                { id: 'sp-m7-l3', title: 'Lũy thừa với số mũ tự nhiên của một số hữu tỉ' },
            ]
        },
        {
            id: 'sp-m7-c2',
            title: 'Chương 2: Số thực',
            lessons: [
                 { id: 'sp-m7-l4', title: 'Số vô tỉ. Căn bậc hai số học' },
                { id: 'sp-m7-l5', title: 'Số thực' },
            ]
        }
    ],
    // Literature
     'sp-literature-grade-6': [
        {
            id: 'sp-lit6-c1',
            title: 'Bài 1: Lắng nghe lịch sử nước mình',
            lessons: [
                { id: 'sp-lit6-l1', title: 'Thánh Gióng' },
                { id: 'sp-lit6-l2', title: 'Sự tích Hồ Gươm' },
            ]
        }
    ],
    'sp-literature-grade-7': [
        {
            id: 'sp-lit7-c1',
            title: 'Bài 1: Bầu trời tuổi thơ',
            lessons: [
                { id: 'sp-lit7-l1', title: 'Bầy chim chìa vôi' },
                { id: 'sp-lit7-l2', title: 'Đi lấy mật' },
            ]
        }
    ],
    // English
    'sp-english-grade-6': [
         {
            id: 'sp-eng6-c1',
            title: 'Unit 1: My New School',
            lessons: [
                { id: 'sp-eng6-l1', title: 'Vocabulary & Pronunciation' },
                { id: 'sp-eng6-l2', title: 'Grammar: Present Simple' },
            ]
        }
    ],
    'sp-english-grade-7': [
         {
            id: 'sp-eng7-c1',
            title: 'Unit 1: Hobbies',
            lessons: [
                { id: 'sp-eng7-l1', title: 'Vocabulary & Pronunciation' },
                { id: 'sp-eng7-l2', title: 'Grammar: Present Simple & Future Simple' },
            ]
        }
    ],
    // Science
    'sp-science-grade-6': [
        {
            id: 'sp-sci6-c1',
            title: 'Chương 1: Mở đầu về Khoa học tự nhiên',
            lessons: [
                { id: 'sp-sci6-l1', title: 'Giới thiệu về Khoa học tự nhiên' },
                { id: 'sp-sci6-l2', title: 'An toàn trong phòng thực hành' },
            ]
        },
        {
            id: 'sp-sci6-c2',
            title: 'Chương 2: Chất và sự biến đổi của chất',
            lessons: [
                { id: 'sp-sci6-l3', title: 'Các thể của chất' },
                { id: 'sp-sci6-l4', title: 'Oxi và không khí' },
            ]
        }
    ],
    'sp-science-grade-7': [
        {
            id: 'sp-sci7-c1',
            title: 'Chương 1: Nguyên tử - Nguyên tố hóa học',
            lessons: [
                { id: 'sp-sci7-l1', title: 'Nguyên tử' },
                { id: 'sp-sci7-l2', title: 'Nguyên tố hóa học' },
            ]
        },
        {
            id: 'sp-sci7-c2',
            title: 'Chương 2: Tốc độ',
            lessons: [
                { id: 'sp-sci7-l3', title: 'Đo tốc độ' },
                { id: 'sp-sci7-l4', title: 'Đồ thị quãng đường - thời gian' },
            ]
        }
    ],
    // History and Geo
    'sp-history-geo-grade-6': [
        {
            id: 'sp-hg6-c1',
            title: 'Phần Lịch sử - Chương 1: Tại sao cần học Lịch sử?',
            lessons: [
                { id: 'sp-hg6-l1', title: 'Lịch sử và cuộc sống' },
                { id: 'sp-hg6-l2', title: 'Thời gian trong lịch sử' },
            ]
        },
         {
            id: 'sp-hg6-c2',
            title: 'Phần Địa lí - Chương 1: Bản đồ',
            lessons: [
                { id: 'sp-hg6-l3', title: 'Hệ thống kinh, vĩ tuyến và tọa độ địa lí' },
                { id: 'sp-hg6-l4', title: 'Lược đồ trí nhớ' },
            ]
        }
    ],
    'sp-history-geo-grade-7': [
        {
            id: 'sp-hg7-c1',
            title: 'Phần Lịch sử - Chương 1: Tây Âu thời kì trung đại',
            lessons: [
                { id: 'sp-hg7-l1', title: 'Quá trình hình thành xã hội phong kiến' },
                { id: 'sp-hg7-l2', title: 'Các cuộc phát kiến địa lí' },
            ]
        },
        {
            id: 'sp-hg7-c2',
            title: 'Phần Địa lí - Chương 1: Châu Âu',
            lessons: [
                { id: 'sp-hg7-l3', title: 'Vị trí địa lí, phạm vi và đặc điểm tự nhiên' },
                { id: 'sp-hg7-l4', title: 'Khai thác, sử dụng và bảo vệ thiên nhiên' },
            ]
        }
    ],
};
