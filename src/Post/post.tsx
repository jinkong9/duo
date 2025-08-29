import React from "react";
import Nav from "../components/Main/nav";

export default function Post() {
  return (
    <div className="font-[--font-pretendard] min-h-screen bg-amber-100">
      <Nav></Nav>
      <div className="font-bold text-2xl flex justify-center">
        다른 사람들의 이야기를 들어봐요 !
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-stone-100 border-3 rounded-lg w-350 h-30 mt-20 text-center font-bold p-10 text-3xl">
          안녕하세요
        </div>
        <div className="bg-stone-100 border-3 rounded-lg w-350 h-120 text-center font-semibold p-10 text-2xl @container">
          주방에서는 싱크대가 너무습해서 문제이고 화장실에서는 변기는 핑크색
          물때가 생기고 냄새도 자주나고 배수대는 머리카락으로 계속 막히고 너무
          문제고 거실은 머리카락이 매일 떨어지고 먼지도 자주 생기고 비오면 너무
          습하고 난리야
          <br className="md:hidden" />
        </div>
      </div>
    </div>
  );
}
