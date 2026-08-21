import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screen/Homescreen";
import ChatScreen from "./screen/ChatScreen";
import LoginPage from "./screen/LoginPage";
import AdminPanel from "./screen/AdminPanel";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => window.clearTimeout(loadingTimer);
  }, []);

  if (isLoading) {
    return (
      <div className="app-loading" role="status" aria-live="polite">
        <div className="app-loading__spinner" aria-hidden="true" />
        <p className="app-loading__text">Memuat Gus Sakral</p>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Jika URL kosong (halaman awal), tampilkan HomeScreen */}
        <Route path="/" element={<HomeScreen />} />
        {/* Jika URL /login, tampilkan LoginPage */}
        <Route path="/login" element={<LoginPage />} />
        {/* Jika URL /admin, tampilkan AdminPanel */}
        <Route path="/admin" element={<AdminPanel />} />
        {/* Jika URL /chat, tampilkan ChatScreen */}
        <Route path="/chat" element={<ChatScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
