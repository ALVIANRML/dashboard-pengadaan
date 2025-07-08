import React, { useState } from "react";
import Button from "../components/Button/Button";
import InputForm from "../components/Input/InputForm";
import { useNavigate } from "react-router-dom";
import sawitImage from "../assets/sawit.jpg";

const LoginPage = () => {
  const [form, setForm] = useState({ name: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleLogin = () => {
    const dummyUser = {
      name: "admin",
      password: "123456",
    };

    // Validasi kosong
    if (!form.name.trim() || !form.password.trim()) {
      setError("Nama dan password tidak boleh kosong.");
      setSuccess("");
      return;
    }

    // Cek kredensial
    if (
      form.name.trim().toLowerCase() === dummyUser.name &&
      form.password === dummyUser.password
    ) {
      setSuccess("Login berhasil! 🎉");
      setError("");

      // Simpan login status
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", form.name.trim());

      // Redirect ke dashboard
      navigate("/dashboard");
    } else {
      setError("Nama atau password salah.");
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Form Login */}
      <div className="lg:w-1/2 w-full flex items-center justify-center px-8 py-12 bg-white">
        <div className="w-full max-w-md">
          <div className="flex flex-col gap-y-2 text-center mb-10">
            <h1 className="text-3xl font-bold font-heading">Selamat Datang</h1>
            <p className="font-inter">Silakan masuk untuk melanjutkan</p>
          </div>

          {/* Input Form */}
          <InputForm
            label="Nama"
            name="name"
            type="text"
            placeholder="Masukkan Nama Anda"
            value={form.name}
            onChange={handleChange}
          />
          <InputForm
            label="Password"
            name="password"
            type="password"
            placeholder="Masukkan Password Anda"
            value={form.password}
            onChange={handleChange}
          />

          {/* Tombol Login */}
          <Button
            variant="bg-[#C1CFA1] border border-[#9AA580]"
            onClick={handleLogin}
          >
            Masuk
          </Button>

          {/* Feedback */}
          {error && (
            <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
          )}
          {success && (
            <p className="text-green-600 text-sm mt-4 text-center">{success}</p>
          )}
        </div>
      </div>

      {/* Gambar */}
      <div className="lg:w-1/2 w-full lg:h-auto">
        <img
          src={sawitImage}
          alt="Sawit"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
