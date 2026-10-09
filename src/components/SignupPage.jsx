import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import bcrypt from 'bcryptjs';
import { db } from '../firebase';
import './SignupPage.css';

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Validation
    if (!name.trim() || !email.trim() || !password) {
      setErrorMsg('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true);

    try {
      const usersRef = collection(db, 'users');
      // Check if user already exists
      const q = query(usersRef, where('email', '==', email.trim().toLowerCase()));
      const snap = await getDocs(q);

      if (!snap.empty) {
        setErrorMsg('An account with this email already exists.');
        setLoading(false);
        return;
      }

      // Hash password using bcryptjs (salt rounds = 10)
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Save user to Firestore
      await addDoc(usersRef, {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password: hashedPassword,
        createdAt: new Date().toISOString()
      });

      // Redirect to login page on success
      navigate('/login');
    } catch (err) {
      console.error(err);
      setErrorMsg('Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h3 className="signup-title">Create a DEV@Deakin Account</h3>

        {errorMsg && <div className="signup-error-banner">{errorMsg}</div>}

        <form onSubmit={handleCreate} className="signup-form">
          <div className="signup-field">
            <label>Name*</label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)} 
            />
          </div>

          <div className="signup-field">
            <label>Email*</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div className="signup-field">
            <label>Password*</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          <div className="signup-field">
            <label>Confirm password*</label>
            <input 
              type="password" 
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
          </div>

          <button type="submit" className="signup-btn" disabled={loading}>
            {loading ? 'Creating...' : 'Create'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;