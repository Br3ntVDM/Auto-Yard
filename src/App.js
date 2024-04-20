import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Account from './Components/Account';
import SellCar from './Pages/SellCar';
import BuyCar from './Pages/BuyCar';
import Services from './Pages/Services';
import Home from './Pages/Home';
import AuthModal from './Components/AuthModal';


function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleOpenSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  const handleCloseSignupModal = () => {
    setIsSignupModalOpen(false);
  };

  return (
    <Router>
      <div className="app">
        <NavBar />
        <Account 
          openLoginModal={handleOpenLoginModal} 
          openSignupModal={handleOpenSignupModal} 
        />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/sell" element={<SellCar />} />
          <Route path="/buy" element={<BuyCar />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
        <AuthModal 
          isOpen={isLoginModalOpen} 
          onClose={handleCloseLoginModal} 
          initialTab={'login'} 
        />
        <AuthModal 
          isOpen={isSignupModalOpen} 
          onClose={handleCloseSignupModal} 
          initialTab={'signup'} 
        />
      </div>
    </Router>
  );
};

export default App;
