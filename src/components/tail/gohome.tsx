import React from "react";

export default function Gohome() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div
        className="
      w-[500px] border border-black rounded-full
      text-xl md:text-4xl lg:text-5xl 
      font-[--font-pretendard] 
      text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
      shadow-lg hover:shadow-2xl
      transition-all duration-700 ease-in-out
      hover:scale-300 
      animate-bounce overflow-hidden
      text-center
    "
      >
        집에 가고싶다 <br />
        <br />
        퇴근할래요
      </div>
    </div>
  );
}
