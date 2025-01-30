import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // CSS dosyasını doğru şekilde bağladık
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();  // Sayfanın yenilenmesini engelle
    if (username === 'admin' && password === 'admin123') {
      const userData = { role: 'admin', token: 'some-jwt-token' };
      dispatch(login(userData));
      navigate('/dashboard');
    } else {
      alert('Geçersiz kullanıcı adı veya şifre');
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h1>Giriş Yap</h1>
        <div className="space-y-4">
          <div className="input-box">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="Kullanıcı adı"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-box">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="remember-forget">
          <label>
            <input type="checkbox" />
            Beni Hatırla
          </label>
          <a href="#">Parolanızı mı Unuttunuz?</a>
        </div>
        <button type="submit">Giriş Yap</button>
        <div className="register-link">
          <p>Hesabınız yok mu? <a href="#">Kayıt Ol</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
