import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword , signInWithPopup } from 'firebase/auth';
import { auth , provider , githubProvider} from '../firebase';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        email.trim().toLowerCase(),
        password
      );

      navigate('/', { replace: true });
    } catch (error) {
      console.error('Login error:', error.code);
      setErrorMsg('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  const handleGoogleLogin = async () => {
  setErrorMsg('');
  setLoading(true);

  try {
    await signInWithPopup(auth, provider);
    navigate('/', { replace: true });
  } catch (error) {
    console.error('Google login error:', error.code);
    setErrorMsg('Google login failed. Please try again.');
  } finally {
    setLoading(false);
  }
};



const handleGithubLogin = async () => {
  setErrorMsg('');
  setLoading(true);

  try {
    await signInWithPopup(auth, githubProvider);
    navigate('/', { replace: true });
  } catch (error) {
    console.error('GitHub login error:', error.code, error.message);
    setErrorMsg(
      error.code === 'auth/account-exists-with-different-credential'
        ? 'This email already uses another login method. Please sign in using that method.'
        : 'GitHub login failed. Please try again.'
    );
  } finally {
    setLoading(false);
  }
};



  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-top-action">
        
          <Link to="/signup" className="top-action-link">
            Sign up
          </Link>
        </div>

        {errorMsg && (
          <div className="auth-error-banner" role="alert">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="auth-form">
          <div className="form-group">
            <label htmlFor="loginEmail">Your email</label>
            <input
              id="loginEmail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="loginPassword">Your password</label>
            <input
              id="loginPassword"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="auth-submit-btn"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        

        <button
          type="button"
          className="google-login-btn"
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          {loading ? 'Please wait...' : 'Login with Google'}
        </button>

        <button
          type="button"
          className="github-login-btn"
          onClick={handleGithubLogin}
          disabled={loading}
        >
          {loading ? 'Please wait...' : 'Login with GitHub'}
        </button>
      </div>
      
    </div>
  );
}

export default LoginPage;