import { Bell, User, Menu } from 'lucide-react';
import Button from './Button';

interface NavbarProps {
  onMenuClick?: () => void;
  showMenu?: boolean;
}

export default function Navbar({ onMenuClick, showMenu = true }: NavbarProps) {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            {showMenu && (
              <button
                onClick={onMenuClick}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
            )}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="font-bold text-xl text-gray-900 hidden sm:block">SkillSync</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
              <Bell className="w-5 h-5 text-gray-700" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="hidden md:block text-sm font-medium text-gray-700">John Doe</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
