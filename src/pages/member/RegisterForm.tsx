import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// API 호출 함수 정의
const registerUser = async (userData: {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  age: string;
}) => {
  const response = await axios.post(process.env.VITE_GIDOSA_BACKEND_API_URL + '/member-general', userData);
  return response.data;
};

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    //phone: '',
    age: '14세 이상',
    verificationCode: ''
  });

  // React Query mutation 설정
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      alert('회원가입이 완료되었습니다.');
      navigate('/auth/login');
    },
    onError: (error: any) => {
      alert(error.response?.data?.message || '회원가입 중 오류가 발생했습니다.\n\n관리자에게 문의해주세요.');
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 유효성 검사
    if (!form.email || !form.password || !form.passwordConfirm || !form.name) {
      alert('모든 필수 항목을 입력해주세요.');
      return;
    }

    if (form.password !== form.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    // ------------------------------------------------------------
    // 이메일 정규식 검사 (이메일 형식)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      alert('이메일 형식이 올바르지 않습니다.');
      return;
    }
    
    // 비밀번호 정규식 검사 (영문+숫자+특수문자 8-20자리)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
    if (!passwordRegex.test(form.password)) {
      alert('비밀번호는 영문, 숫자, 특수문자를 포함하여 8-20자리로 입력해주세요.');
      return;
    }

    // 이름 정규식 검사 (한글 또는 영문 2-10자리) 
    const nameRegex = /^[가-힣a-zA-Z]{2,10}$/;
    if (!nameRegex.test(form.name)) {
      alert('이름은 한글 또는 영문 2-10자리로 입력해주세요.');
      return;
    }

    // API 호출
    mutation.mutate({
      email: form.email,
      password: form.password,
      passwordConfirm: form.passwordConfirm,
      name: form.name,
      age: form.age,
    });
  };

  return (
    <div className="w-full mx-auto flex items-center justify-center p-4 sm:p-6 bg-white">
      <div className="w-full bg-white mt-20">
        <h2 className="text-2xl font-bold mb-6 text-black">회원가입</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">이메일</label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                className="flex-1 p-2 border rounded bg-white placeholder-gray-400"
                placeholder="이메일"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <button 
                className={`w-full sm:w-auto px-4 py-2 rounded ${
                  form.email 
                    ? 'bg-yellow-500 text-white hover:bg-yellow-500' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!form.email}
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
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">비밀번호 확인</label>
            <input
              type="password"
              className="w-full p-2 border rounded bg-white placeholder-gray-400"
              placeholder="비밀번호를 한번 더 입력해 주세요."
              value={form.passwordConfirm}
              onChange={(e) => setForm({ ...form, passwordConfirm: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">이름</label>
            <input
              type="text"
              className="w-full p-2 border rounded bg-white placeholder-gray-400"
              placeholder="국문 또는 영문 이름 / 2자, 특수문자 불가"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                    onChange={() => setForm({ ...form, age: '14세 이상' })}
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
                    onChange={() => setForm({ ...form, age: '14세 미만' })}
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