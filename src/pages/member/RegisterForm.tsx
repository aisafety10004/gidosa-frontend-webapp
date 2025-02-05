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
    <div className="w-full mx-auto flex items-center justify-center p-4 sm:p-6 bg-white">
      <div className="w-full bg-white mt-20">
        <h2 className="text-2xl font-bold mb-6 text-black">회원가입</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">아이디</label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                className="flex-1 p-2 border rounded bg-white placeholder-gray-400"
                placeholder="영문, 숫자 6-20자리"
                value={form.id}
                onChange={(e) => setForm({ ...form, id: e.target.value })}
              />
              <button 
                className={`w-full sm:w-auto px-4 py-2 rounded ${
                  form.id 
                    ? 'bg-yellow-500 text-white hover:bg-yellow-500' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!form.id}
              >
                중복확인
              </button>
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
                    checked={form.age === '14세 이상'}
                    onChange={(e) => setForm({ ...form, age: '14세 이상' })}
                />
                <div className={`text-center py-3 border rounded-md cursor-pointer transition-colors
                    ${form.age === '14세 이상' 
                      ? 'bg-blue-50 border-blue-500 text-blue-700' 
                      : 'border-gray-300 hover:bg-gray-50'}`}>
                    14세 이상
                </div>
                </label>
                <label className="flex-1">
                <input
                    type="radio"
                    name="age"
                    value="14down"
                    className="hidden"
                    checked={form.age === '14세 미만'}
                    onChange={(e) => setForm({ ...form, age: '14세 미만' })}
                />
                <div className={`text-center py-3 border rounded-md cursor-pointer transition-colors
                    ${form.age === '14세 미만' 
                      ? 'bg-blue-50 border-blue-500 text-blue-700' 
                      : 'border-gray-300 hover:bg-gray-50'}`}>
                    14세 미만
                </div>
                </label>
            </div>
            </div>

          {/* <div>
            <label className="block text-sm text-gray-600 mb-1">휴대폰번호</label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                className="flex-1 p-2 border rounded bg-white placeholder-gray-400"
                placeholder="-없이 입력해 주세요."
              />
              <button className="w-full sm:w-auto px-4 py-2 bg-gray-200 rounded">인증번호 받기</button>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">인증번호 입력</label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                className="flex-1 p-2 border rounded bg-white placeholder-gray-400"
                placeholder="인증번호 6자리"
              />
              <button className="w-full sm:w-auto px-4 py-2 bg-gray-200 rounded">확인</button>
            </div>
          </div> */}

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