import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isRegisterAgreement = location.pathname.includes('/member/register/agreement');
  const isRegisterForm = location.pathname.includes('/member/register/form');
  const isHomePath = location.pathname === '/';

  return (
    <div className={`min-h-screen w-full [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-track]:bg-[#f1f1f1] [&::-webkit-scrollbar-thumb]:bg-[#c1c1c1] [&::-webkit-scrollbar-thumb]:rounded-md hover:[&::-webkit-scrollbar-thumb]:bg-[#a8a8a8] ${
      isRegisterAgreement ? 'bg-gray-500/50' : ''
    }`}>
      <div className={`fixed top-0 left-0 right-0 z-50 ${isRegisterAgreement ? 'bg-gray-500/50' : ''}`}>
        <Navbar showCloseButton={isRegisterForm} />
      </div>
      <main 
        className={`w-full pt-[1px] px-4 sm:px-0 ${
          isHomePath 
            ? '' 
            : 'min-h-[calc(100vh-64px)] flex items-center justify-center'
        } ${
          isRegisterAgreement ? 'bg-gray-500/50' : 'bg-white'
        }`}
      >
        <div className={`${isHomePath ? 'w-full' : 'w-full sm:w-3/5'}`}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;