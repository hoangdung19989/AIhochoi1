
import React, { useState } from 'react';
import type { View } from '../App';
import { 
    HomeIcon, 
    PencilSquareIcon, 
    LightBulbIcon, 
    QuestionMarkCircleIcon,
    ChatBubbleBottomCenterTextIcon,
    ChevronRightIcon,
    OnLuyenLogo,
    UserCircleIcon,
    ArrowRightCircleIcon,
    MapIcon
} from './icons';
import { useAuth } from '../contexts/AuthContext';


interface SidebarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
  onOpenAboutModal: () => void;
}

const NavLink: React.FC<{
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  isExpanded: boolean;
  onClick: () => void;
}> = ({ icon: Icon, label, isActive, isExpanded, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center p-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
        isActive
          ? 'bg-amber-400/90 text-slate-900 shadow-inner'
          : 'text-slate-200 hover:bg-brand-blue'
      } ${!isExpanded ? 'justify-center' : ''}`}
    >
      <Icon className="h-6 w-6 flex-shrink-0" />
      <span
        className={`flex-1 text-left whitespace-nowrap transition-all duration-200 overflow-hidden ${
          isExpanded ? 'w-auto ml-4 opacity-100' : 'w-0 ml-0 opacity-0'
        }`}
      >
        {label}
      </span>
      {isActive && isExpanded && <ChevronRightIcon className="h-4 w-4 ml-auto" />}
    </button>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView, onOpenAboutModal }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { user, signOut } = useAuth(); // Lấy thông tin user từ AuthContext

    const isSelfStudyActive = currentView === 'self-study' 
        || currentView.startsWith('lecture') 
        || currentView.startsWith('laboratory')
        || currentView.startsWith('test')
        || currentView.startsWith('quiz')
        || currentView.startsWith('mock-exam')
        || currentView.startsWith('self-practice');

    const isAiConvoActive = currentView === 'ai-subjects' || currentView === 'ai-tutor';

  return (
    <aside 
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className={`bg-brand-blue-dark text-white flex flex-col p-3 shadow-2xl z-20 transition-all duration-300 ease-in-out ${isExpanded ? 'w-64' : 'w-20'}`}
    >
        <div className={`flex items-center mb-8 pt-1 ${isExpanded ? 'pl-1' : 'justify-center'}`}>
            <div className="mr-3 flex-shrink-0">
                 <OnLuyenLogo className="h-10 w-10" />
            </div>
            <span className={`text-2xl font-extrabold tracking-wide whitespace-nowrap transition-all duration-200 overflow-hidden ${isExpanded ? 'w-auto opacity-100' : 'w-0 opacity-0'}`}>OnLuyen</span>
        </div>
      
      <nav className="flex-1 space-y-2">
        <NavLink icon={HomeIcon} label="Trang chủ" isActive={currentView === 'home'} isExpanded={isExpanded} onClick={() => setCurrentView('home')} />
        <NavLink icon={PencilSquareIcon} label="Tự học" isActive={isSelfStudyActive} isExpanded={isExpanded} onClick={() => setCurrentView('self-study')} />
        {user && (
            <NavLink icon={MapIcon} label="Lộ trình của tôi" isActive={currentView === 'personalized-dashboard'} isExpanded={isExpanded} onClick={() => setCurrentView('personalized-dashboard')} />
        )}
        <NavLink icon={LightBulbIcon} label="AI Convo" isActive={isAiConvoActive} isExpanded={isExpanded} onClick={() => setCurrentView('ai-subjects')} />
      </nav>

        <div className="mt-auto">
             {/* Auth Section */}
             <div className="mb-2">
                {user ? (
                    <div className={`p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 ${!isExpanded ? 'flex justify-center' : ''}`}>
                         <div className="flex items-center">
                            <UserCircleIcon className="h-6 w-6 text-amber-400 flex-shrink-0" />
                            <div className={`ml-3 overflow-hidden transition-all duration-200 ${isExpanded ? 'w-auto opacity-100' : 'w-0 opacity-0 hidden'}`}>
                                <p className="text-xs text-slate-400">Xin chào,</p>
                                <p className="text-sm font-semibold truncate max-w-[120px]">{user.email?.split('@')[0]}</p>
                            </div>
                         </div>
                         {isExpanded && (
                             <button 
                                onClick={() => {
                                    signOut();
                                    setCurrentView('home');
                                }}
                                className="mt-2 w-full text-xs text-center py-1.5 rounded bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors"
                             >
                                Đăng xuất
                             </button>
                         )}
                    </div>
                ) : (
                    <button
                        onClick={() => setCurrentView('login' as View)}
                        className={`w-full flex items-center p-3 text-sm font-bold text-brand-blue-dark bg-brand-yellow hover:bg-amber-400 rounded-lg transition-colors duration-200 shadow-lg ${!isExpanded ? 'justify-center' : ''}`}
                    >
                        <ArrowRightCircleIcon className="h-6 w-6 flex-shrink-0" />
                        <span className={`whitespace-nowrap transition-all duration-200 overflow-hidden ${isExpanded ? 'w-auto ml-3 opacity-100' : 'w-0 ml-0 opacity-0'}`}>
                            Đăng nhập
                        </span>
                    </button>
                )}
            </div>

            <div className="border-t border-brand-blue mb-2"></div>
             <button
                onClick={onOpenAboutModal}
                className={`w-full flex items-center p-3 text-sm text-slate-300 hover:bg-brand-blue rounded-lg transition-colors duration-200 ${!isExpanded ? 'justify-center' : ''}`}
            >
                <QuestionMarkCircleIcon className="h-6 w-6 flex-shrink-0" />
                <span className={`whitespace-nowrap transition-all duration-200 overflow-hidden ${isExpanded ? 'w-auto ml-3 opacity-100' : 'w-0 ml-0 opacity-0'}`}>
                    Giới thiệu về web
                </span>
            </button>
             <a
                href="mailto:gopy@onluyen.ai?subject=Góp ý cho OnLuyen AI Tutor"
                className={`w-full flex items-center p-3 text-sm text-slate-300 hover:bg-brand-blue rounded-lg transition-colors duration-200 mt-1 ${!isExpanded ? 'justify-center' : ''}`}
            >
                <ChatBubbleBottomCenterTextIcon className="h-6 w-6 flex-shrink-0" />
                <div className={`whitespace-nowrap overflow-hidden transition-all duration-200 ${isExpanded ? 'w-auto ml-3 opacity-100' : 'w-0 ml-0 opacity-0'}`}>
                    <p className="font-semibold text-white">Góp ý & Báo lỗi</p>
                    <p className="text-xs text-slate-400">Giúp chúng tôi cải thiện</p>
                </div>
            </a>
      </div>
    </aside>
  );
};

export default Sidebar;
