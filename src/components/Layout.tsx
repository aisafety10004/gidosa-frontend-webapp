import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isRegisterPath = location.pathname.includes('/member/register/agreement');

  return (
    <div className={`h-screen w-full overflow-hidden ${isRegisterPath ? 'bg-gray-500/50' : 'bg-white'}`}>
      <Navbar />
      <main className="h-[calc(100vh-64px)] w-full overflow-hidden flex items-center justify-center">
        {children}
      </main>
    </div>
  );
};

export default Layout;