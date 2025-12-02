
import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';
import { HomeIcon, ChevronRightIcon, UserCircleIcon } from './icons';

interface LoginViewProps {
  onLoginSuccess: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLoginSuccess }) => {
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setMessage('Đăng ký thành công! Vui lòng kiểm tra email để xác nhận tài khoản (nếu được yêu cầu).');
      } else if (mode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        onLoginSuccess();
      } else { // 'forgot'
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: window.location.origin, // Supabase will append the recovery token
        });
        if (error) throw error;
        setMessage('Đã gửi hướng dẫn khôi phục mật khẩu. Vui lòng kiểm tra email của bạn.');
      }
    } catch (err: any) {
      if (err.message.includes("Email signups are disabled")) {
          setError("Lỗi: Chức năng đăng ký bằng email đã bị tắt. Vui lòng liên hệ quản trị viên.");
      } else {
          setError(err.message || 'Đã xảy ra lỗi.');
      }
    } finally {
      setLoading(false);
    }
  };
  
  const getTitle = () => {
      switch(mode) {
          case 'signup': return 'Tạo tài khoản mới';
          case 'forgot': return 'Khôi phục mật khẩu';
          default: return 'Chào mừng trở lại';
      }
  };

  const getDescription = () => {
      switch(mode) {
          case 'signup': return 'Tham gia cùng OnLuyen AI Tutor để lưu lại tiến trình học tập.';
          case 'forgot': return 'Nhập email của bạn để nhận hướng dẫn đặt lại mật khẩu.';
          default: return 'Đăng nhập để tiếp tục hành trình học tập của bạn.';
      }
  };

  return (
    <div className="container mx-auto max-w-md mt-8">
       {/* Breadcrumb */}
       <div className="flex items-center text-sm text-slate-500 mb-8">
        <HomeIcon className="h-5 w-5 mr-2" />
        <span className="font-semibold text-slate-700">{getTitle()}</span>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
        <div className="text-center mb-8">
            <div className="inline-block p-4 rounded-full bg-sky-50 mb-4">
                <UserCircleIcon className="h-10 w-10 text-brand-blue" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800">
                {getTitle()}
            </h1>
            <p className="text-slate-500 mt-2">
                {getDescription()}
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

        <form onSubmit={handleSubmit} className="space-y-4">
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
          {mode !== 'forgot' && (
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
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold rounded-lg transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Đang xử lý...' : (mode === 'signup' ? 'Đăng ký' : mode === 'login' ? 'Đăng nhập' : 'Gửi hướng dẫn')}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          {mode === 'login' && (
            <>
              Chưa có tài khoản?{' '}
              <button onClick={() => setMode('signup')} className="font-semibold text-brand-blue hover:underline">Đăng ký ngay</button>
              <span className="mx-2">·</span>
              <button onClick={() => setMode('forgot')} className="font-semibold text-brand-blue hover:underline">Quên mật khẩu?</button>
            </>
          )}
          {mode === 'signup' && (
            <>
              Đã có tài khoản?{' '}
              <button onClick={() => setMode('login')} className="font-semibold text-brand-blue hover:underline">Đăng nhập ngay</button>
            </>
          )}
           {mode === 'forgot' && (
            <>
              Nhớ lại mật khẩu?{' '}
              <button onClick={() => setMode('login')} className="font-semibold text-brand-blue hover:underline">Quay lại Đăng nhập</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginView;
