import React from 'react';


export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-gray-700/50 py-8 text-gray-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3 text-left mx-auto">
          <div>
            <span className="text-gray-200 font-bold block text-xs">Dipesh Dhakal</span>
            <span className="text-[10px] text-gray-500">
              © {new Date().getFullYear()} Dipesh Dhakal. All Rights Reserved.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
