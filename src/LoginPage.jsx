import React from "react";
import Button from "./components/Button/Button";
import InputForm from "./components/Input/InputForm";
import sawitImage from "./assets/sawit.jpg";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="lg:w-1/2 w-full flex items-center justify-center px-45 py-12 bg-white">
        <div className="w-full max-w-md">
          <div className="flex flex-col gap-y-2 text-center mb-32">
            <h1 className="text-3xl font-bold text-center font-heading">
              Selamat Datang
            </h1>
            <p className="font-inter">Silakan masuk untuk melanjutkan</p>
          </div>
          <InputForm
            label="Nama"
            name="name"
            type="text"
            placeholder="Masukkan Nama Anda"
          />
          <InputForm
            label="Password"
            name="password"
            type="password"
            placeholder="Masukkan Password Anda"
          />
          <Button className="bg-[#C1CFA1] border border-[#9AA580]">
            Masuk
          </Button>
        </div>
      </div>

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
