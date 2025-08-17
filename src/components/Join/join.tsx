import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Join() {
  interface Join {
    name: string;
    email: string | number;
    password: string | number;
    check_password: string | number;
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

  const [agree, setAgree] = useState<boolean>();
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
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h3>회원가입</h3>
      <div className="flex flex-col border border-gray-300 rounded-lg p-10 bg-white">
        <div className="w-100 flex flex-col items-center">
          <div className="flex flex-col items-center justify-center  border border-black p-20">
            <label className="flex items-center justify-between w-full mb-4">
              <span className="w-28 text-left">이름</span>
              <input
                className="flex-1 border border-gray-300 rounded-xl p-2"
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
                className="flex-1 border border-gray-300 rounded-xl p-2"
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
                className="flex-1 border border-gray-300 rounded-xl p-2"
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
                className="flex-1 border border-gray-300 rounded-xl p-2"
                type="password"
                id="checkpw"
                name="checkpw_box"
                placeholder="Check_Password"
                value={info.check_password}
                onChange={(e) => {
                  setInfo({
                    ...info,
                    name: e.target.value,
                  });
                }}
              ></input>
            </label>
            <button className="border border-black-100">제출하기</button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <label>
            개인정보활용 동의
            <input
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
