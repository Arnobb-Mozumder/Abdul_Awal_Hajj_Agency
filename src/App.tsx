import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Dynamically run the original script.js logic if needed,
    // or let it run when imported.
  }, []);

  return (
    <div className="app-container">
      {/* The frontend relies on direct HTML serving, but we keep this here for Vite type safety */}
      <h1 style={{ textAlign: 'center', marginTop: '20%' }}>আল কারীম হজ্জ কাফেলা</h1>
      <p style={{ textAlign: 'center' }}>পবিত্র হজ্জ ও ওমরাহ এজেন্সি - ব্যাকএন্ড লোড হচ্ছে...</p>
    </div>
  );
}
