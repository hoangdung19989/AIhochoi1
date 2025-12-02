
import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import { useAuth } from '../contexts/AuthContext';
import { generatePersonalizedLearningPath } from '../services/geminiService';
import { ChartBarIcon, MapIcon, RocketLaunchIcon, ClockIcon, CheckCircleIcon, PlayCircleIcon, XCircleIcon, AcademicCapIcon, PencilSquareIcon } from './icons';
import type { LearningPath, ExamResult } from '../types';

interface PersonalizedDashboardProps {
  onStartLesson: () => void; // Redirect to Self Study
}

const PersonalizedDashboard: React.FC<PersonalizedDashboardProps> = ({ onStartLesson }) => {
  const { user } = useAuth();
  
  // State for Filters and Stats
  const [selectedGrade, setSelectedGrade] = useState<string>('9'); // Default grade
  const [stats, setStats] = useState({
      practiceCount: 0,
      avgTestScore: 0,
      avgMockScore: 0
  });
  
  const [weaknesses, setWeaknesses] = useState<string[]>([]);
  const [learningPath, setLearningPath] = useState<LearningPath | null>(null);
  const [isLoadingPath, setIsLoadingPath] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user, selectedGrade]); // Re-fetch when grade changes

  const fetchUserData = async () => {
    setLoadingData(true);
    setFetchError(null);
    try {
      // 1. Fetch Exam Results with Grade Filter
      const { data: results, error: resultsError } = await supabase
        .from('exam_results')
        .select('*')
        .eq('user_id', user!.id);

      if (resultsError) throw resultsError;

      // Filter locally for simplicity
      // We check if grade_name contains the selected grade (e.g. "Toán Lớp 9" contains "9")
      // OR if user has added a 'grade' column (recommended)
      const gradeResults = (results as ExamResult[]).filter(r => {
          // Check explicit 'grade' column if available (dynamic check), otherwise fallback to name parsing
          const row: any = r;
          // Prefer explicit column 'grade'
          if (row.grade && row.grade.toString().includes(selectedGrade)) return true;
          // Fallback to 'grade_name' parsing
          if (row.grade_name && row.grade_name.toString().includes(selectedGrade)) return true;
          return false;
      });

      // Separate stats by exam_type
      const tests = gradeResults.filter(r => r.exam_type === 'test');
      const mocks = gradeResults.filter(r => r.exam_type === 'mock');
      const practices = gradeResults.filter(r => r.exam_type === 'practice');

      const calcAvg = (items: ExamResult[]) => {
          if (items.length === 0) return 0;
          const total = items.reduce((acc, curr) => acc + (curr.score / curr.total_questions) * 10, 0);
          return (total / items.length).toFixed(1);
      };

      setStats({
        practiceCount: practices.length,
        avgTestScore: Number(calcAvg(tests)),
        avgMockScore: Number(calcAvg(mocks))
      });

      // 2. Analyze Weaknesses (Needs Grade Filter on question_attempts)
      // Note: This requires 'grade' column in question_attempts
      let attemptsQuery = supabase
        .from('question_attempts')
        .select('question_topics, grade')
        .eq('user_id', user!.id)
        .eq('is_correct', false);
      
      const { data: attempts, error: attemptsError } = await attemptsQuery;

      if (attemptsError) throw attemptsError;

      // Filter attempts by grade locally
      const gradeAttempts = attempts?.filter((row: any) => {
          // Robust check for grade column
          return row.grade ? row.grade.toString().includes(selectedGrade) : true; 
      }) || [];

      const topicCounts: Record<string, number> = {};
      gradeAttempts.forEach((row: any) => {
          let topics: string[] = [];
          if (Array.isArray(row.question_topics)) {
              topics = row.question_topics;
          } else if (typeof row.question_topics === 'string') {
               topics = row.question_topics.replace(/[{}]/g, '').split(',').map(t => t.trim().replace(/"/g, ''));
          }

          topics.forEach((topic: string) => {
            if (topic) topicCounts[topic] = (topicCounts[topic] || 0) + 1;
          });
      });

      const sortedWeaknesses = Object.entries(topicCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 3)
        .map(([topic]) => topic);

      setWeaknesses(sortedWeaknesses);

    } catch (err: any) {
      console.error("Error fetching user data:", err);
      
      let msg = "Lỗi không xác định.";
      
      if (typeof err === 'string') {
          msg = err;
      } else if (err instanceof Error) {
          msg = err.message;
      } else if (typeof err === 'object' && err !== null) {
          // Parse Supabase error object safely
          if ('message' in err) {
              msg = err.message;
              if ('details' in err && err.details) msg += ` (${err.details})`;
          } else {
              // Fallback for unknown object structure
              try {
                  msg = JSON.stringify(err);
              } catch (e) {
                  msg = "Lỗi đối tượng không xác định (Unknown Error Object)";
              }
          }
      }
      
      // Better message for missing columns
      if (msg.toLowerCase().includes("column") && msg.toLowerCase().includes("does not exist")) {
          msg = "Lỗi cơ sở dữ liệu: Thiếu cột dữ liệu (grade, exam_type). Vui lòng cập nhật bảng Supabase theo hướng dẫn trong README.";
      }

      setFetchError(msg);
    } finally {
      setLoadingData(false);
    }
  };

  const handleGeneratePath = async () => {
    if (weaknesses.length === 0) {
      alert("Bạn chưa có đủ dữ liệu để tạo lộ trình cho Khối lớp này. Hãy làm thử một bài kiểm tra trước!");
      return;
    }
    setIsLoadingPath(true);
    try {
      // Pass the selected grade to AI so it generates appropriate content
      const path = await generatePersonalizedLearningPath(weaknesses, selectedGrade);
      // Manually attach grade info if needed
      setLearningPath({ ...path, grade: selectedGrade });
    } catch (err) {
      console.error("Failed to generate path:", err);
      alert("Không thể tạo lộ trình lúc này. Vui lòng thử lại sau.");
    } finally {
      setIsLoadingPath(false);
    }
  };

  if (loadingData) {
    return <div className="p-10 text-center text-slate-500">Đang tải dữ liệu cá nhân...</div>;
  }
  
  if (fetchError) {
    return (
        <div className="container mx-auto max-w-2xl mt-10 p-8 bg-red-50 border-2 border-dashed border-red-200 rounded-2xl text-center">
            <XCircleIcon className="h-12 w-12 text-red-400 mx-auto mb-4"/>
            <h2 className="text-2xl font-bold text-red-800">Không thể tải dữ liệu</h2>
            <p className="mt-2 text-red-600">{fetchError}</p>
             <button onClick={fetchUserData} className="mt-6 px-5 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700">
                Thử lại
            </button>
        </div>
    )
  }

  return (
    <div className="container mx-auto max-w-6xl space-y-8">
      
      {/* Grade Selector */}
      <div className="flex justify-end items-center space-x-3">
          <label className="text-sm font-semibold text-slate-600">Dữ liệu cho:</label>
          <select 
            value={selectedGrade} 
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="bg-white border border-slate-300 text-slate-800 text-sm rounded-lg focus:ring-brand-blue focus:border-brand-blue block p-2.5 shadow-sm"
          >
              <option value="6">Lớp 6</option>
              <option value="7">Lớp 7</option>
              <option value="8">Lớp 8</option>
              <option value="9">Lớp 9</option>
          </select>
      </div>

      {/* Header Stats - Separated */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center">
            <div className="p-4 bg-emerald-100 text-emerald-600 rounded-xl mr-4">
                <PencilSquareIcon className="h-8 w-8" />
            </div>
            <div>
                <p className="text-sm text-slate-500 font-medium">Số bài Tự luyện</p>
                <p className="text-2xl font-bold text-slate-800">{stats.practiceCount}</p>
            </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center">
            <div className="p-4 bg-orange-100 text-orange-600 rounded-xl mr-4">
                <ChartBarIcon className="h-8 w-8" />
            </div>
            <div>
                <p className="text-sm text-slate-500 font-medium">Điểm TB Kiểm tra</p>
                <p className="text-2xl font-bold text-slate-800">{stats.avgTestScore} / 10</p>
            </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center">
             <div className="p-4 bg-purple-100 text-purple-600 rounded-xl mr-4">
                <AcademicCapIcon className="h-8 w-8" />
            </div>
            <div>
                <p className="text-sm text-slate-500 font-medium">Điểm TB Thi thử</p>
                <p className="text-2xl font-bold text-slate-800">{stats.avgMockScore} / 10</p>
            </div>
        </div>
      </div>

      {/* Weakness Analysis & Path Generation */}
      <div className="bg-gradient-to-r from-brand-blue to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-start justify-between">
            <div className="max-w-xl">
                <h2 className="text-3xl font-bold mb-4">Lộ trình học Lớp {selectedGrade}</h2>
                <p className="text-indigo-100 mb-6 text-lg">
                    AI đã phân tích các bài làm **Lớp {selectedGrade}** của bạn và phát hiện các chủ đề cần cải thiện.
                </p>
                
                {weaknesses.length > 0 ? (
                    <div className="mb-8">
                        <p className="text-sm uppercase tracking-wide text-indigo-200 font-bold mb-3">Điểm yếu cần khắc phục:</p>
                        <div className="flex flex-wrap gap-3">
                            {weaknesses.map((topic, idx) => (
                                <span key={idx} className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold border border-white/30">
                                    {topic}
                                </span>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className="mb-8 italic text-indigo-200">
                        Chưa có đủ dữ liệu điểm yếu cho Lớp {selectedGrade}. Hãy làm thêm bài tập nhé!
                    </p>
                )}

                <button 
                    onClick={handleGeneratePath}
                    disabled={isLoadingPath || weaknesses.length === 0}
                    className="flex items-center px-8 py-4 bg-brand-yellow text-brand-blue-dark font-bold rounded-xl shadow-lg hover:bg-amber-400 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoadingPath ? (
                        <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-brand-blue-dark mr-3"></div>
                            Đang tạo lộ trình...
                        </>
                    ) : (
                        <>
                            <MapIcon className="h-6 w-6 mr-2" />
                            Tạo Lộ trình 7 Ngày
                        </>
                    )}
                </button>
            </div>
            
            <div className="hidden md:block">
                 <RocketLaunchIcon className="h-64 w-64 text-white/10" />
            </div>
        </div>
      </div>

      {/* Learning Path Timeline */}
      {learningPath && Array.isArray(learningPath.weeklyPlan) && (
        <div className="space-y-6 animate-slide-in-bottom">
            <h3 className="text-2xl font-bold text-slate-800 border-l-4 border-brand-yellow pl-4">Kế hoạch Lớp {selectedGrade} tuần này</h3>
            
            <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-8 pb-4">
                {learningPath.weeklyPlan.map((day, idx) => (
                    <div key={idx} className="relative pl-8 md:pl-10">
                        {/* Dot */}
                        <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-brand-blue ring-4 ring-white"></div>
                        
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                                    Ngày {day.day}
                                </span>
                                <span className="text-sm font-medium text-sky-600">{day.title}</span>
                            </div>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">{day.description}</h4>
                            
                            <div className="space-y-3 mt-4">
                                {Array.isArray(day.tasks) && day.tasks.map((task, tIdx) => (
                                    <div key={tIdx} className="flex items-start p-3 bg-slate-50 rounded-lg">
                                        {task.type === 'video' ? (
                                            <PlayCircleIcon className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                                        ) : (
                                            <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                                        )}
                                        <div>
                                            <p className="text-sm font-semibold text-slate-700">{task.content}</p>
                                            {task.difficulty && (
                                                <span className={`text-xs px-2 py-0.5 rounded ml-2 ${
                                                    task.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                                                    task.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                                    'bg-red-100 text-red-700'
                                                }`}>
                                                    {task.difficulty}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      )}
    </div>
  );
};

export default PersonalizedDashboard;
