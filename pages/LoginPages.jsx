import React, { useState } from "react";
import Form from "../components/form";
import styles from "./LoginPages.module.css"; 
import KakaoLoginButton from "../components/KakaoLoginButton";

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

  const handleKakaoLogin = async (credentials) => {
    alert(JSON.stringify("카카오 로그인 테스트")); // alert 창에 JSON 문자열로 출력
  };



  return (
    // 해상도에 따라 md , lg 등이 존재
    <div className={styles.parent}> 
      <div className={styles.child}>
        <h2 className={styles.title}>로그인</h2>
        <Form  onSubmit={handleLogin}/>
        <KakaoLoginButton onClick={handleKakaoLogin} />
      </div>
    </div> 
  );
};

export default LoginPages;