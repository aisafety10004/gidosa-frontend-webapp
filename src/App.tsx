import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Layout from './components/Layout';
import Home from './pages/Home';
// import Register from './pages/member/Register';
import RegisterAgreement from './pages/member/RegisterAgreement';
import RegisterForm from './pages/member/RegisterForm';
import FindId from './pages/member/FindId';
import FindPw from './pages/member/FindPw';
import Login from './pages/auth/Login';
import Privacy1 from './pages/document/Privacy1';
import Terms1 from './pages/document/Terms1';
import Marketing1 from './pages/document/Marketing1';

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/member/find-id" element={<FindId />} />
          <Route path="/member/find-pw" element={<FindPw />} />
          <Route path="/member/register/agreement" element={<RegisterAgreement />} />
          <Route path="/member/register/form" element={<RegisterForm />} />
          <Route path="/document/privacy1" element={<Privacy1 />} />
          <Route path="/document/terms1" element={<Terms1 />} />
          <Route path="/document/marketing1" element={<Marketing1 />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
