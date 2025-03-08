import React, { useState } from "react";
import Form from "../components/form";
import LoginButton from "../components/LoginButton";
import styles from "./LoginPages.module.css"; 

//import { useAuth } from "../hooks/useAuth";
//   const { login, loading, error } = useAuth();

//   const handleLogin = async (credentials) => {
//     await login(credentials);
//   };

function KakaoButton ({onClick}) {
  const [email, setEmail] = useState("")
}

const LoginPages = () => {

  const handleLogin = async (credentials) => {
    console.log(credentials); // 콘솔에 출력
    alert(JSON.stringify(credentials)); // alert 창에 JSON 문자열로 출력
  };

  return (
    // 해상도에 따라 md , lg 등이 존재
    <div className={`min-h-screen bg-gray-100 ${styles.parent}`}> 
      <div className={`w-96 p-6 bg-white shadow-md rounded-md ${styles.child}`}>
        <h2 className="text-2xl font-bold text-center mb-4">로그인</h2>
        <LoginButton /> 
        <Form  onSubmit={handleLogin}/>
      </div>
    </div> 
  );
};

export default LoginPages;