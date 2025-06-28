import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Lock } from 'lucide-react'; // Optional icon library

const LoginPage: React.FC = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!emailOrUsername || !password) {
      setError('Email/Username dan password wajib diisi.');
      setLoading(false);
      return;
    }

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: emailOrUsername, password }),
      });

      setLoading(false);

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('userData', JSON.stringify(data));
        navigate('/dashboard');
      } else {
        const data = await response.json();
        setError(data.message || 'Login gagal. Coba lagi.');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setLoading(false);
      setError('Terjadi kesalahan. Coba lagi nanti.');
    }
  };

  return (
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-700">Selamat Datang</h1>
        <p className="text-center text-sm text-gray-600">
          Masuk ke <span className="font-semibold text-blue-600">Jujurly</span> dan kelola akunmu
        </p>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="emailOrUsername" className="block text-sm font-medium text-gray-700 text-left">
              Email atau Username
            </label>
            <div className="relative mt-1">
              <input
                id="emailOrUsername"
                type="text"
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
                disabled={loading}
                placeholder="jujurly@mail.com"
                className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-left">
              Password
            </label>
            <div className="relative mt-1">
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <Lock className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          <div className="text-right">
            <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">
              Lupa password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-200 disabled:opacity-60"
          >
            {loading ? 'Sedang masuk...' : 'Masuk'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Belum punya akun?{' '}
          <Link to="/register" className="text-blue-600 font-medium hover:underline">
            Daftar sekarang
          </Link>
        </p>
      </div>
    
  );
};

export default LoginPage;
