
import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';
import { HomeIcon, ChevronRightIcon, UserCircleIcon } from './icons';

interface LoginViewProps {
  onBackToHome: () => void;
  onLoginSuccess: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onBackToHome, onLoginSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      if (isSignUp) {
        // Đăng ký
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        setMessage('Đăng ký thành công! Vui lòng kiểm tra email để xác nhận tài khoản.');
      } else {
        // Đăng nhập
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        onLoginSuccess();
      }
    } catch (err: any) {
      setError(err.message || 'Đã xảy ra lỗi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-md">
       {/* Breadcrumb */}
       <div className="flex items-center text-sm text-slate-500 mb-8">
        <HomeIcon className="h-5 w-5 mr-2" />
        <button onClick={onBackToHome} className="hover:underline">Trang chủ</button>
        <ChevronRightIcon className="h-4 w-4 mx-1" />
        <span className="font-semibold text-slate-700">{isSignUp ? 'Đăng ký' : 'Đăng nhập'}</span>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
        <div className="text-center mb-8">
            <div className="inline-block p-4 rounded-full bg-sky-50 mb-4">
                <UserCircleIcon className="h-10 w-10 text-brand-blue" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800">
                {isSignUp ? 'Tạo tài khoản mới' : 'Chào mừng trở lại'}
            </h1>
            <p className="text-slate-500 mt-2">
                {isSignUp 
                    ? 'Tham gia cùng OnLuyen AI Tutor để lưu lại tiến trình học tập.' 
                    : 'Đăng nhập để tiếp tục hành trình học tập của bạn.'}
            </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-200">
            {error}
          </div>
        )}

        {message && (
          <div className="mb-4 p-3 bg-green-50 text-green-700 text-sm rounded-lg border border-green-200">
            {message}
          </div>
        )}

        <form onSubmit={handleAuth} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold rounded-lg transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Đang xử lý...' : (isSignUp ? 'Đăng ký' : 'Đăng nhập')}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          {isSignUp ? 'Đã có tài khoản? ' : 'Chưa có tài khoản? '}
          <button
            onClick={() => {
                setIsSignUp(!isSignUp);
                setError(null);
                setMessage(null);
            }}
            className="font-semibold text-brand-blue hover:underline"
          >
            {isSignUp ? 'Đăng nhập ngay' : 'Đăng ký ngay'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
