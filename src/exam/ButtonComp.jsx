import { useState } from "react";
import { SignIn } from "../features/authontication/SignIn";
import { Login } from "../features/authontication/Login";

export const ButtonComp = () => {
  const [mode, setMode] = useState("signin");

  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      
      {/* Buttons Row */}
      <div className="flex gap-6">
        
        {/* LOGIN BUTTON */}
        <div className="relative inline-block">
          <div className="absolute inset-0 border border-gray-900 translate-x-1 translate-y-1"></div>

          <button
            onClick={() => setMode("login")}
            className="relative z-10 px-6 py-3 text-white text-sm font-bold tracking-wide 
            bg-[#0E1822] border border-[#0E1822] overflow-hidden
            transition-all duration-300 hover:border-blue-500 group"
          >
            <span className="absolute inset-0 bg-blue-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            <span className="relative z-10">LOGIN</span>
          </button>
        </div>

        {/* SIGNIN BUTTON */}
        <div className="relative inline-block">
          <div className="absolute inset-0 border border-gray-900 translate-x-1 translate-y-1"></div>

          <button
            onClick={() => setMode("signin")}  
            className="relative z-10 px-6 py-3 text-white text-sm font-bold tracking-wide 
            bg-[#0E1822] border border-[#0E1822] overflow-hidden
            transition-all duration-300 hover:border-blue-500 group"
          >
            <span className="absolute inset-0 bg-blue-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            <span className="relative z-10">SIGN IN</span>
          </button>
        </div>

      </div>

      {/* Form Section */}
      <div className="w-full flex justify-center">
        {mode === "signin" ? <SignIn /> : <Login />}
      </div>

    </div>
  );
};