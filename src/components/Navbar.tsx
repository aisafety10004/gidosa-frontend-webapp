import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // 회원가입 관련 페이지인지 확인
  const isRegisterPage = location.pathname.includes('/member/register');

  return (
    <div className="relative w-full">
      <nav className="relative flex items-center justify-between px-8 py-4 bg-white shadow-md w-full">
        <Link 
          to="/" 
          onClick={closeMenu}
          className="text-2xl font-bold text-primary focus:outline-none"
        >
          위험안전 관리 시스템
        </Link>

        {/* 햄버거 버튼 - 회원가입 페이지가 아닐 때만 표시 */}
        {!isRegisterPage && (
          <button
            className="relative w-10 h-10 md:hidden bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
            onClick={toggleMenu}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-[6px]">
              <span className={`w-6 h-[2px] bg-gray-700 transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-[8px]' : ''}`} />
              <span className={`w-6 h-[2px] bg-gray-700 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-[2px] bg-gray-700 transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-[8px]' : ''}`} />
            </div>
          </button>
        )}

        {/* 데스크탑 네비게이션 링크 - 회원가입 페이지가 아닐 때만 표시 */}
        {!isRegisterPage && (
          <div className="hidden md:flex md:items-center md:gap-8">
            {/* <Link
              to="/about"
              className="px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md focus:outline-none"
            >
              About
            </Link>
            <Link
              to="/mission"
              className="px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md focus:outline-none"
            >
              Mission
            </Link> */}
            <Link
              to="/Login"
              className="px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md focus:outline-none"
            >
              Login
            </Link>
            <Link
              to="/member/register/agreement"
              className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primaryDark transition-colors duration-300 focus:outline-none"
            >
              Register
            </Link>
          </div>
        )}
      </nav>

      {/* 모바일 드롭다운 메뉴 - 회원가입 페이지가 아닐 때만 표시 */}
      {!isRegisterPage && (
        <div
          className={`
            md:hidden
            absolute top-full left-0 right-0
            bg-white shadow-lg
            transition-all duration-300 ease-in-out w-full
            ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
            transform ${isOpen ? 'translate-y-0' : '-translate-y-2'}
          `}
        >
          <div className="flex flex-col py-2">
            {/* <Link
              to="/about"
              onClick={closeMenu}
              className="px-8 py-3 text-gray-700 hover:bg-gray-50 focus:outline-none"
            >
              About
            </Link>
            <Link
              to="/mission"
              onClick={closeMenu}
              className="px-8 py-3 text-gray-700 hover:bg-gray-50 focus:outline-none"
            >
              Mission
            </Link> */}
            <Link
              to="/login"
              onClick={closeMenu}
              className="px-8 py-3 text-gray-700 hover:bg-gray-50 focus:outline-none"
            >
              Login
            </Link>
            <Link
              to="/member/register/agreement"
              onClick={closeMenu}
              className="mx-8 my-3 px-6 py-2 bg-primary text-white rounded-md hover:bg-primaryDark text-center focus:outline-none"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar; 