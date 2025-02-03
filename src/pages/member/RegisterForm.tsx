import React, { useState } from 'react';

const RegisterForm: React.FC = () => {
  const [form, setForm] = useState({
    id: '',
    password: '',
    passwordConfirm: '',
    name: '',
    phone: '',
    age: '14세 이상',
    verificationCode: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 회원가입 처리 로직

  };

  return (
    <div className="mx-auto h-screen flex items-center justify-center p-6 bg-white w-3/5">
      <div className="w-full bg-white p-6">
        <h2 className="text-2xl font-bold mb-6 text-black">회원가입</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">아이디</label>
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 p-2 border rounded bg-white placeholder-gray-400"
                placeholder="영문, 숫자 6-20자리"
              />
              <button className="px-4 py-2 bg-gray-200 rounded">중복확인</button>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">비밀번호</label>
            <input
              type="password"
              className="w-full p-2 border rounded bg-white placeholder-gray-400"
              placeholder="영문+숫자+특수문자 8-20자리"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">비밀번호 확인</label>
            <input
              type="password"
              className="w-full p-2 border rounded bg-white placeholder-gray-400"
              placeholder="비밀번호를 한번 더 입력해 주세요."
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">이름</label>
            <input
              type="text"
              className="w-full p-2 border rounded bg-white placeholder-gray-400"
              placeholder="국문 또는 영문 이름 / 2자, 특수문자 불가"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">연령 선택</label>
            <div className="flex gap-4 text-black">
                <label className="flex-1">
                <input
                    type="radio"
                    name="age"
                    value="14up"
                    className="hidden"
                />
                <div className="text-center py-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                    14세 이상
                </div>
                </label>
                <label className="flex-1">
                <input
                    type="radio"
                    name="age"
                    value="14down"
                    className="hidden"
                />
                <div className="text-center py-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                    14세 미만
                </div>
                </label>
            </div>
            </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">휴대폰번호</label>
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 p-2 border rounded bg-white placeholder-gray-400"
                placeholder="-없이 입력해 주세요."
              />
              <button className="px-4 py-2 bg-gray-200 rounded">인증번호 받기</button>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">인증번호 입력</label>
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 p-2 border rounded bg-white placeholder-gray-400"
                placeholder="인증번호 6자리"
              />
              <button className="px-4 py-2 bg-gray-200 rounded">확인</button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mt-6"
          >
            확인
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm; 