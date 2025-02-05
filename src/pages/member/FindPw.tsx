import React, { useState } from 'react';

const FindPw: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    id: '',
    phone: '',
    verificationCode: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 비밀번호 찾기 처리 로직
  };

  return (
    <div className="max-w-md mx-auto h-screen flex items-center justify-center p-6 bg-white">
      <div className="w-full bg-white p-6">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">등록된 정보로<br />비밀번호를 찾아드려요.</h1>
        </div>

        {/* 비밀번호 찾기 폼 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">이름</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-2 border rounded bg-white placeholder-gray-400"
              placeholder="이름을 입력해 주세요"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">아이디</label>
            <input
              type="text"
              value={form.id}
              onChange={(e) => setForm({ ...form, id: e.target.value })}
              className="w-full p-2 border rounded bg-white placeholder-gray-400"
              placeholder="아이디 입력"
            />
          </div>

          {/* <div>
            <label className="block text-sm text-gray-600 mb-1">휴대폰번호</label>
            <div className="flex gap-2">
            <input
                type="text"
                value={form.phone}
                onChange={(e) => {
                  const onlyNumbers = e.target.value.replace(/[^0-9]/g, '');
                  if (onlyNumbers.length <= 11) {
                    setForm({ ...form, phone: onlyNumbers });
                  }
                }}
                className="w-[60%] p-2 border rounded bg-white placeholder-gray-400"
                placeholder="-없이 입력해 주세요"
              />
              <button 
                type="button"
                className="min-w-[110px] px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 whitespace-nowrap"
              >
                인증번호 받기
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-1">인증번호 입력</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={form.verificationCode}
                onChange={(e) => setForm({ ...form, verificationCode: e.target.value })}
                className="flex-1 p-2 border rounded bg-white placeholder-gray-400"
                placeholder="인증번호 6자리"
              />
              <button 
                type="button"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                확인
              </button>
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

export default FindPw;