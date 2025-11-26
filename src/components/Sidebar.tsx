import { Home, Upload, BookOpen, Briefcase, Target, MessageSquare, Award, Settings, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage?: string;
}

const menuItems = [
  { icon: Home, label: 'Dashboard', id: 'dashboard' },
  { icon: Upload, label: 'Upload Resume', id: 'upload' },
  { icon: BookOpen, label: 'Learning Path', id: 'learning' },
  { icon: Briefcase, label: 'Job Matches', id: 'jobs' },
  { icon: Target, label: 'Skill Gap', id: 'skills' },
  { icon: MessageSquare, label: 'AI Coach', id: 'coach' },
  { icon: Award, label: 'Portfolio', id: 'portfolio' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

export default function Sidebar({ isOpen, onClose, currentPage = 'dashboard' }: SidebarProps) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen bg-white border-r border-gray-200 z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } w-64`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 lg:hidden border-b border-gray-200">
            <span className="font-bold text-lg">Menu</span>
            <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100">
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-gray-200">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
              <p className="text-sm font-medium text-gray-900 mb-1">Upgrade to Pro</p>
              <p className="text-xs text-gray-600 mb-3">Get unlimited access to all features</p>
              <button className="w-full bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
