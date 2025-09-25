import React from 'react';

const LoginPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <h1>Welcome to DevDash</h1>
        <p>Please log in to continue.</p>
        {/* This is the key: It's a simple link to your backend's auth route! */}
        <a href="http://localhost:8000/api/auth/github">
          <button>Login with GitHub</button>
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
