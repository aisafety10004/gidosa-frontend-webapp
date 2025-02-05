import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [form, setForm] = useState({
    id: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 처리 로직
  };

  return (
    <div className="max-w-md mx-auto h-screen flex items-center justify-center p-6 bg-white">
      <div className="w-full bg-white p-6">
        {/* 로고 영역 */}
        <div className="flex flex-col items-center mb-8">
          <div className="text-4xl mb-4">🛡️</div>
        </div>

        {/* 로그인 폼 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">아이디</label>
            <input
              type="text"
              className="w-full p-2 border rounded bg-white placeholder-gray-400"
              placeholder="아이디를 입력해주세요"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">비밀번호</label>
            <input
              type="password"
              className="w-full p-2 border rounded bg-white placeholder-gray-400"
              placeholder="비밀번호를 입력해주세요"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            로그인하기
          </button>
        </form>

        {/* 추가 링크 */}
        <div className="flex justify-center gap-4 mt-4 text-sm text-gray-600">
          <Link to="/member/find-id">아이디 찾기</Link>
          <span>|</span>
          <Link to="/member/find-pw">비밀번호 찾기</Link>
          <span>|</span>
          <Link to="/member/register/agreement">회원가입</Link>
        </div>

        {/* 푸터 */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <div className="flex justify-center gap-2 mb-2">
            <Link to="/terms">이용약관</Link>
            <span>|</span>
            <Link to="/privacy">개인정보처리방침</Link>
          </div>
          <div>
            Copyright (C) gidosa.inc. All Right Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;