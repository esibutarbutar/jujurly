// src/pages/LandingPage.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Impor komponen layout dan common yang sudah kita buat (pastikan ekstensi .tsx)
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const isAuthenticated = (): boolean => {
    return !!localStorage.getItem('userData');
  };

  const handleCollectFeedbackClick = () => {
    if (isAuthenticated()) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

return (
    <div className="flex flex-col min-h-screen bg-light-gray-bg">
      <Header title="Jujurly" />

      {/* Bagian Main: Kembali ke satu kolom, terpusat */}
      <main className="flex-grow container mx-auto p-6 md:p-12 flex items-center justify-center text-center">
        {/* Card sekarang tidak lagi punya flex-row */}
        <Card className="w-full max-w-3xl rounded-xl shadow-xl overflow-hidden p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary-blue mb-4 leading-tight">
            Feedback Jujur biar makin mujur.
          </h2>
          <p className="text-lg md:text-xl text-text-medium mb-8 max-w-2xl mx-auto">
            Get genuine insights anonymously. Understand what others truly think and take your journey to the next level.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Button
              onClick={handleCollectFeedbackClick}
              className="w-full md:w-auto px-8 py-3 text-lg rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300
                         bg-violet-600 hover:bg-violet-700 active:bg-violet-800 focus:ring-violet-500"
            >
              Mau Kumpulin Feedback
            </Button>

            <Link to="/ke">
              <Button
                className="w-full md:w-auto px-8 py-3 text-lg rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300
                           bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 focus:ring-emerald-400"
              >
                Mau Kasih Feedback
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-sm text-text-medium max-w-md mx-auto mb-2">
            Kalau mau kasih feedback, pastiin kamu punya link unik dari orangnya, atau tahu usernamenya ya!
          </p>
          <p className="text-sm text-text-medium">
            Format:{" "}
            <a
              href="https://jujurly.space/ke/usernameanda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-blue hover:underline font-semibold"
            >
              https://jujurly.space/ke/usernameanda
            </a>
          </p>
        </Card>
      </main>

      <Footer text={`© ${new Date().getFullYear()} Jujurly. Semua hak cipta dilindungi.`} />
    </div>
  );
};

export default LandingPage;