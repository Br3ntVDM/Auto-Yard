
import React from 'react';
import '../Style/Account.css';

const Account = ({ openSignupModal, openLoginModal }) => {
  const handleSignupClick = () => {
    openSignupModal();
  };

  const handleLoginClick = () => {
    openLoginModal();
  };

  return (
    <div className="account-container">
      <button className="account-button" onClick={handleSignupClick}>Sign Up</button>
      <div className="divider"></div>
      <button className="account-button" onClick={handleLoginClick}>Log In</button>
    </div>
  );
};

export default Account;
