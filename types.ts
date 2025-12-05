
// FIX: Import `ComponentType` from 'react' to fix "Cannot find namespace 'React'" error.
import type { ComponentType } from 'react';

export interface Subject {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: ComponentType<{ className?: string }>;
}

export interface TestSubject {
  id: string;
  name: string;
  icon: ComponentType<{ className?: string }>;
  description?: string; // Added for modern UI
  tags?: string[];      // Added for modern UI
  color?: string;       // Added for modern UI
}

export interface MockExamSubject extends TestSubject {}

// New interface for Lecture Subjects matching the modern card style
export interface LectureSubject {
    id: string;
    name: string;
    icon: ComponentType<{ className?: string }>;
    description?: string;
    tags?: string[];
    color?: string;
}

export interface TestGrade {
  id: string;
  name: string;
}

export interface TestType {
    id: '15-minute' | '45-minute' | 'semester';
    name: string;
    duration: string;
    description: string;
    questionCount: number; // Estimated
    essayCount: number;
    color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>; // Added for modern UI
  color: string; // Added for modern UI
  tags: string[]; // Added for modern UI
}

export interface SelfPracticeSubject {
  id: string;
  name: string;
  description: string; // Mô tả môn học
  icon: ComponentType<{ className?: string }>;
  tags: string[]; // Các thẻ thông tin (VD: "Lớp 6-9", "30 Chủ đề")
  color: string; // Màu nền cho icon
}

export interface Grade {
  id: string;
  name: string;
  courseId: string; // To link to a specific course data object
}

export interface Lesson {
    id: string;
    title: string;
    type: 'video' | 'text' | 'quiz';
    videoUrl?: string; // Direct URL to a video file
}

export interface Chapter {
    id: string;
    title: string;
    lessons: Lesson[];
}

export interface Course {
    id: string;
    subjectName: string;
    gradeLevel: number;
    title: string;
    chapters: Chapter[];
}

export interface PhetSimulation {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
}

export interface LabCategory {
  id: string;
  name: string;
  subcategories?: LabCategory[];
  icon?: ComponentType<{ className?: string }>;
  color?: string; // e.g., 'bg-sky-500'
  description?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  topics?: string[]; // Danh sách các chủ đề kiến thức liên quan (VD: ["Phân số", "Đại số"])
}

export interface EssayQuestion {
  question: string;
  sampleAnswer: string;
}

export interface Quiz {
  sourceSchool: string;
  title: string; // e.g., "Kiểm tra 15 phút"
  timeLimit: string; // e.g., "15 phút"
  questions: QuizQuestion[];
  essayQuestions?: EssayQuestion[];
}

export interface PracticeLesson {
  id: string;
  title: string;
}

export interface PracticeChapter {
  id: string;
  title: string;
  lessons: PracticeLesson[];
}

// --- PERSONALIZED LEARNING TYPES ---

export interface UserProgress {
    item_id: string;
    item_type: 'lecture' | 'practice' | 'test';
    is_completed: boolean;
    completed_at: string;
}

export interface ExamResult {
    id: number;
    subject_name: string;
    grade_name: string;
    score: number;
    total_questions: number;
    exam_type?: 'practice' | 'test' | 'mock'; // Added for separation
    created_at: string;
}

export interface DailyTask {
    day: number;
    title: string; // VD: "Ôn tập Phân số"
    description: string; // VD: "Xem video và làm 10 câu bài tập"
    tasks: {
        type: 'video' | 'practice';
        content: string; // Tên video hoặc tên bài tập
        difficulty?: 'Easy' | 'Medium' | 'Hard';
    }[];
}

export interface LearningPath {
    grade?: string; // Lộ trình cho lớp mấy
    studentWeaknesses: string[]; // Danh sách các chủ đề yếu
    weeklyPlan: DailyTask[];
}

export interface LessonLookupInfo {
  title: string;
  courseId: string;
  gradeName: string;
  subjectName: string;
}