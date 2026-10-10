import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import './SignupPage.css';

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }

    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match.');
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.trim().toLowerCase(),
        password
      );

      await setDoc(doc(db, 'users', userCredential.user.uid), {
        name: name.trim(),
        email: userCredential.user.email
      });

      navigate('/login', { replace: true });
    } catch (error) {
      console.error('Signup error:', error.code);

      if (error.code === 'auth/email-already-in-use') {
        setErrorMsg('This email is already registered.');
      } else if (error.code === 'auth/invalid-email') {
        setErrorMsg('Please enter a valid email address.');
      } else if (error.code === 'auth/weak-password') {
        setErrorMsg('Please choose a stronger password.');
      } else {
        setErrorMsg('Registration failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Create a DEV@Deakin Account</h2>

        {errorMsg && (
          <div className="auth-error-banner" role="alert">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSignup} className="auth-form">
          <div className="form-group">
            <label htmlFor="signupName">Name*</label>
            <input
              id="signupName"
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value.replace(/[0-9]/g, ''))
              }
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="signupEmail">Email*</label>
            <input
              id="signupEmail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="signupPassword">Password*</label>
            <input
              id="signupPassword"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">
              Confirm password*
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="auth-submit-btn"
            disabled={loading}
          >
            {loading ? 'Creating account...' : 'Create'}
          </button>
        </form>

       
      </div>
    </div>
  );
}

export default SignupPage;
