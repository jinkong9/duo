import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Join() {
  interface Join {
    name: string;
    email: string;
    password: string;
    check_password: string;
  }

  const api = axios.create({
    baseURL: "",
    withCredentials: true,
  });

  const [info, setInfo] = useState<Join>({
    name: "",
    email: "",
    password: "",
    check_password: "",
  });

  const [agree, setAgree] = useState<boolean | null>();
  const navigate = useNavigate();

  const handleJoin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!info.name || !info.email || !info.password || !info.check_password) {
      alert("모든 정보를 입력해주세요 !");
      return;
    }
    if (info.password !== info.check_password) {
      alert("비밀번호를 확인해주세요 !");
      return;
    }
    if (agree == false) {
      alert("개인정보 활용 동의하지 않을 시 회원가입이 불가능합니다.");
    }
    //try로 api 연결
  };

  return (
    <div className="font-[--font-pretendard] flex flex-col justify-center items-center  w-full min-h-screen bg-amber-100">
      <p className="mb-15 font-bold text-black text-5xl text-center hover:text-amber-700 mt-4 pt-4">
        회원가입
      </p>
      <div className="flex flex-col border border-black-300 rounded-2xl p-10 bg-amber-100">
        <div className="w-[500px] h-[420px] flex flex-col items-center">
          <div className="flex flex-col gap-3 items-center justify-center p-7">
            <label className="flex items-center justify-between w-full mb-4">
              <span className="w-28 text-left">이름</span>
              <input
                className="flex-1 border border-black bg-white rounded-full p-3"
                type="text"
                id="name"
                name="name_box"
                placeholder="Name"
                value={info.name}
                onChange={(e) => {
                  setInfo({
                    ...info,
                    name: e.target.value,
                  });
                }}
              ></input>
            </label>
            <label className="flex items-center justify-between w-full mb-4">
              <span className="w-28 text-left">이메일</span>
              <input
                className="flex-1 border border-black bg-white rounded-full p-3"
                type="text"
                id="email"
                name="email_box"
                placeholder="E-Mail"
                value={info.email}
                onChange={(e) => {
                  setInfo({
                    ...info,
                    email: e.target.value,
                  });
                }}
              ></input>
            </label>
            <label className="flex items-center justify-between w-full mb-4">
              <span className="w-28 text-left">비밀번호</span>
              <input
                className="flex-1 border border-black bg-white rounded-full p-3"
                type="password"
                id="pw"
                name="pw_box"
                placeholder="Password"
                value={info.password}
                onChange={(e) => {
                  setInfo({
                    ...info,
                    password: e.target.value,
                  });
                }}
              ></input>
            </label>
            <label className="flex items-center justify-between w-full mb-4">
              <span className="w-28 text-left">비밀번호 확인</span>
              <input
                className="flex-1 border border-black bg-white rounded-full p-3"
                type="password"
                id="checkpw"
                name="checkpw_box"
                placeholder="Check_Password"
                value={info.check_password}
                onChange={(e) => {
                  setInfo({
                    ...info,
                    check_password: e.target.value,
                  });
                }}
              ></input>
            </label>
            <button className="cursor-pointer hover:shadow-xl bg-amber-300 border border-black-100 rounded-full pl-4 pr-4 pt-3 pb-3">
              회원가입
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <label>
            개인정보활용 동의
            <input
              className="cursor-pointer shadow-lg p-2"
              type="checkbox"
              checked={agree === true}
              onChange={() => {
                setAgree(true);
              }}
            ></input>
          </label>
          <label>
            동의하지 않음
            <input
              className="cursor-pointer shadow-lg"
              type="checkbox"
              checked={agree === false}
              onChange={() => {
                setAgree(false);
                alert("동의하지 않을 시 회원가입 불가능합니다.");
              }}
            ></input>
          </label>
        </div>
      </div>
    </div>
  );
}
