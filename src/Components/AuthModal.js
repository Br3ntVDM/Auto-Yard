
import React from 'react';
import '../Style/AuthModal.css';

const AuthModal = ({ isOpen, onClose, initialTab }) => {
  const handleClose = () => {
    onClose();
  };

  if (!isOpen) {
    return null; // Don't render the modal if it's closed
  }

  return (
    <div className="auth-modal">
      <div className="modal-content">
        <button className="close-btn" onClick={handleClose}>×</button> {/* Close button (x) */}
        {initialTab === 'login' && (
          <div className="auth-forms">
            <form className="login-form">
              <h2>Login</h2>
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>
          </div>
        )}
        {initialTab === 'signup' && (
          <div className="auth-forms">
            <form className="signup-form">
              <h2>Sign Up</h2>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Surname" />
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="tel" placeholder="Phone Number" />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
