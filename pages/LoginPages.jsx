import React from "react";
import Form from "../components/form";
import LoginButton from "../components/LoginButton";
import styles from "./LoginPages.module.css"; 

//import { useAuth } from "../hooks/useAuth";

const LoginPages = () => {
//   const { login, loading, error } = useAuth();

//   const handleLogin = async (credentials) => {
//     await login(credentials);
//   };

  return (
    // 해상도에 따라 md , lg 등이 존재
    <div className={`min-h-screen bg-gray-100 ${styles.parent}`}> 
      <div className={`w-96 p-6 bg-white shadow-md rounded-md ${styles.child}`}>
        <h2 className="text-2xl font-bold text-center mb-4">로그인</h2>
        <LoginButton /> 
        <Form />
      </div>
    </div> 
  );
};

export default LoginPages;