import React from "react";
import Nav from "../Main/nav";
import icon from "../../assets/iconimg.png";
import axios from "axios";

interface GetTip {
  title: string;
  date: string;
  content: string;
}

export default function Myinfo() {
  const api = axios.create({
    baseURL: "https://port-0-alive-mezqigela5783602.sel5.cloudtype.app/",
    withCredentials: true,
  });
  return (
    <div className="bg-amber-100 min-h-screen font-[--font-pretendard]">
      <Nav />
      <div className="flex gap-x-50">
        <div className="w-120 h-70 border ml-10 bg-white rounded-2xl text-center pt-2 font-bold">
          <p className="text-2xl">MY INFO</p>
          <div className="flex gap-x-12">
            <div className="overflow-hidden border rounded-full w-30 h-30 mt-10 ml-8  flex justify-center">
              <img className="w-28 h-28" src={icon} alt="avartaIMG"></img>
            </div>
            <div className="flex flex-col mt-10 justify-center items-start font-semibold text-left">
              <p>나의 이메일 : </p>
              <br></br>
              <p>가입일자 : </p>
              <br></br>
              <p>내가 쓴 게시물 : </p>
            </div>
          </div>
        </div>
        <div className="w-180 min-h-screen border flex flex-col items-center rounded-2xl gap-y-13">
          <p className="font-bold text-2xl mt-10 flex justify-center text-center">
            MY TIP
          </p>
          <div className="border w-150 h-50 flex justify-center rounded-2xl">
            <p className="flex items-center">글내용글내용글내용글내용</p>
          </div>
          <div className="border w-150 h-50 flex justify-center rounded-2xl">
            <p className="flex items-center">글내용글내용글내용글내용</p>
          </div>
        </div>
      </div>
    </div>
  );
}
