import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import RupaPage from "./pages/RupaPage";
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="flex h-screen w-full">
        <Sidebar />

        {/* Konten utama */}
        <div className="flex-1 ml-64">
          <Navbar />

          {/* Halaman utama (isi konten) */}
          <main className="p-6 pt-36">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/rupa" element={<RupaPage />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;