import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  showCloseButton?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ showCloseButton }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // 현재 페이지에 따른 메뉴 텍스트 반환
  const getMenuText = () => {
    if (location.pathname.includes('/member/find-id')) return '아이디 찾기';
    if (location.pathname.includes('/member/find-pw')) return '비밀번호 찾기';
    if (location.pathname.includes('/member/register')) return '회원가입';
    if (location.pathname.includes('/document/terms1')) return '이용약관';
    if (location.pathname.includes('/document/privacy1')) return '개인정보처리방침';
    if (location.pathname.includes('/document/marketing1')) return '프로모션 정보수신 동의';
    return '';
  };

  // 회원가입 및 로그인 관련 페이지인지 확인
  const isAuthPage = location.pathname.includes('/auth/login');
  const isRegisterAgreement = location.pathname.includes('/member/register/agreement');
  
  // 로그인 페이지 및 회원가입 약관동의 페이지에서는 Navbar를 표시하지 않음
  if (isAuthPage) return null;
  //if (isAuthPage || isRegisterAgreement) return null;

  const menuText = getMenuText();

  return (
    <div className="w-full">
      <nav className={`flex items-center justify-between px-8 py-4 ${
        isRegisterAgreement ? 'bg-gray-500/50' : 'bg-white'
      } shadow-md w-full`}>
        <div className="flex items-center">
          <Link 
            to="/" 
            onClick={(e) => {
              if (isRegisterAgreement) {
                e.preventDefault();
                return;
              }
              closeMenu();
            }}
            className={`text-lg md:text-2xl font-bold text-primary focus:outline-none ${
              isRegisterAgreement ? 'pointer-events-none' : ''
            }`}
          >
            위험안전 관리
          </Link>
          {menuText && (
            <>
              <span className="mx-2 md:mx-4 text-gray-300">|</span>
              <span className="text-base md:text-xl text-gray-700">{menuText}</span>
            </>
          )}
        </div>

        {/* 햄버거 버튼과 X 버튼 */}
        {showCloseButton ? (
          <button
            onClick={() => navigate('/auth/login')}
            className="w-10 h-10 flex items-center justify-center rounded-lg ${
        isRegisterAgreement ? 'bg-gray-500/50' : 'bg-white'
      } text-black"
          >X
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        ) : (
          <button
            className="relative w-10 h-10 md:hidden ${
        isRegisterAgreement ? 'bg-gray-500/50' : 'bg-white'
      } rounded-lg transition-colors duration-200 focus:outline-none"
            onClick={toggleMenu}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-[6px]">
              <span className={`w-6 h-[2px] bg-gray-700 transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-[8px]' : ''}`} />
              <span className={`w-6 h-[2px] bg-gray-700 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-[2px] bg-gray-700 transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-[8px]' : ''}`} />
            </div>
          </button>
        )}

        {/* 데스크탑 네비게이션 링크 */}
        {!showCloseButton && (
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link
              to="/auth/login"
              onClick={(e) => {
                if (isRegisterAgreement) {
                  e.preventDefault();
                  return;
                }
              }}
              className={`px-6 py-2 ${
                isRegisterAgreement ? 'bg-gray-500/50 pointer-events-none' : 'bg-primary'
              } text-white rounded-md hover:bg-primaryDark transition-colors duration-300 focus:outline-none`}
            >
              가입/로그인
            </Link>
          </div>
        )}
      </nav>

      {/* 모바일 드롭다운 메뉴 */}
      {isOpen && !showCloseButton && (
        <div className="md:hidden absolute w-full bg-white shadow-lg z-50">
          <div className="flex flex-col py-2">
            <Link
              to="/auth/login"
              onClick={closeMenu}
              className="mx-8 my-3 px-6 py-2 bg-primary text-white rounded-md hover:bg-primaryDark text-center focus:outline-none"
            >
              가입/로그인
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar; 