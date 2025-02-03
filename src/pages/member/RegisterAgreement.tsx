import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterAgreement: React.FC = () => {
  const navigate = useNavigate();
  const [agreements, setAgreements] = useState({
    all: false,
    terms: false,
    privacy: false,
    location: false,
    promotion: false
  });

  const handleAllCheck = () => {
    const newValue = !agreements.all;
    setAgreements({
      all: newValue,
      terms: newValue,
      privacy: newValue,
      location: newValue,
      promotion: newValue
    });
  };

  const handleSingleCheck = (key: keyof typeof agreements) => {
    const newAgreements = {
      ...agreements,
      [key]: !agreements[key]
    };
    
    // 모든 항목이 체크되었는지 확인
    const allChecked = Object.entries(newAgreements)
      .filter(([key]) => key !== 'all')
      .every(([, value]) => value);
    
    setAgreements({
      ...newAgreements,
      all: allChecked
    });
  };

  const isAllRequiredChecked = agreements.terms && agreements.privacy && agreements.location;

  return (
    <div className="max-w-md mx-auto h-screen flex items-center justify-center p-1">
      <div className="w-full bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6 text-black">서비스 이용을 위해<br />약관동의가 필요해요.</h2>
        <div className="space-y-4">
          <label className="flex items-center gap-2 p-4 border rounded">
            <input
              type="checkbox"
              checked={agreements.all}
              onChange={handleAllCheck}
              className={`w-5 h-5 rounded ${agreements.all ? 'bg-white border-gray-300 accent-blue-500' : 'bg-gray-100 border-gray-200'} focus:ring-blue-500`}
            />
            <span className={`font-semibold text-black`}>약관 전체동의</span>
          </label>

          <div className="space-y-2">
            <label className="flex items-center gap-2 p-4 border rounded">
              <input
                type="checkbox"
                checked={agreements.terms}
                onChange={() => handleSingleCheck('terms')}
                className="w-5 h-5 rounded bg-white border-gray-300 accent-blue-500 focus:ring-blue-500"
              />
              <span className={`font-semibold text-black`}>홈노크타운·홈노크존 서비스 이용약관 (필수)</span>
            </label>

            <label className="flex items-center gap-2 p-4 border rounded">
              <input
                type="checkbox"
                checked={agreements.privacy}
                onChange={() => handleSingleCheck('privacy')}
                className="w-5 h-5 rounded bg-white border-gray-300 accent-blue-500 focus:ring-blue-500"
              />
              <span className={`font-semibold text-black`}>트러스테이 개인정보 수집 및 이용동의 (필수)</span>
            </label>

            <label className="flex items-center gap-2 p-4 border rounded">
              <input
                type="checkbox"
                checked={agreements.location}
                onChange={() => handleSingleCheck('location')}
                className="w-5 h-5 rounded bg-white border-gray-300 accent-blue-500 focus:ring-blue-500"
              />
              <span className={`font-semibold text-black`}>트러스테이 프로모션 정보수신 동의 (선택)</span>
            </label>
          </div>
        </div>

        <button
          onClick={() => navigate('/member/register/form')}
          disabled={!isAllRequiredChecked}
          className={`w-full mt-6 py-3 rounded-lg text-white font-semibold
            ${isAllRequiredChecked ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300'}`}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default RegisterAgreement; 