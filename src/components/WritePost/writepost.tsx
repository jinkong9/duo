import React from "react";
import Nav from "../Main/nav";

export default function Writepost() {
  return (
    <div className="font-[--font-pretendard] min-h-screen bg-amber-100">
      <Nav />
      <div className="font-bold text-2xl flex justify-center">
        자신만의 팁을 알려주세요 !
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-stone-100 border-3 rounded-lg w-300 h-20 mt-20 text-center font-bold pt-5 text-3xl">
          글쓰기 테스트
        </div>
        <div className="bg-stone-100 border-3 rounded-lg w-300 h-80 text-left font-semibold text-xl p-10 flex justify-center">
          글쓰기 테스트글쓰기 테스트글쓰기 테스트글쓰기 테스트글쓰기
          테스트글쓰기 테스트글쓰기 테스트글쓰기 테스트글쓰기 테스트글쓰기
          테스트글쓰기 테스트
          <br className="md:hidden" />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-white border p-2 rounded-xl mr-10 cursor-pointer hover:scale-105 overflow:hidden">
          제출하기
        </button>
      </div>
    </div>
  );
}
