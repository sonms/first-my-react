import React from "react";
import Form from "../components/form"
import LoginButton from "../components/LoginButton";
//import { useAuth } from "../hooks/useAuth";

const LoginPages = () => {
//   const { login, loading, error } = useAuth();

//   const handleLogin = async (credentials) => {
//     await login(credentials);
//   };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center mb-4">로그인</h2>
      
        <LoginButton /> 
        <Form />
      </div>
    </div> 
  );
};

export default LoginPages;