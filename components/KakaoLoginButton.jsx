import React from "react";
import kakaoIcon from "../assets/kakao_login_medium_narrow.png";

const KakaoLoginButton = ({ onClick }) => {

    return (
        // <button
        //   onClick={onClick}
        //   className="flex items-center justify-center w-full py-2 px-4 bg-yellow-400 text-black rounded-md shadow hover:bg-yellow-500"
        // >
        //   <img src={kakaoIcon} alt="카카오 로그인" className="w-6 h-6 mr-2" />
        //   카카오로 로그인
        // </button>

    //     <div
    //         onClick={onClick}
    //         className="w-40 h-12 bg-cover bg-no-repeat cursor-pointer"
    //         style={{ backgroundImage: `url(${kakaoIcon})` }}
    //     >
    //         {/* 텍스트나 아이콘 없이 배경 이미지로만 버튼을 표시 */}
    //         ㅇㄴㄻㄹㅇㅇㅁㄴㅇㄹㄹㅇㅁㅇㄴ
    //   </div>
    <div className="flex items-center justify-center w-full mt-4"> {/* flex로 가운데 정렬 */}
        <img
            onClick={onClick}
            src={kakaoIcon}
            alt="카카오 로그인"
            className="w-40 h-12 cursor-pointer transform transition-transform duration-300 hover:scale-110"
        />
    </div>
  );
};



export default KakaoLoginButton