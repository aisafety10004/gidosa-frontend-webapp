import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
// import Register from './pages/member/Register';
import RegisterAgreement from './pages/member/RegisterAgreement';
import RegisterForm from './pages/member/RegisterForm';
// import About from './pages/About';
// import Mission from './pages/Mission';
// import Product from './pages/Product';
// import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/member/register/agreement" element={<RegisterAgreement />} />
          <Route path="/member/register/form" element={<RegisterForm />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
