import axios, { AxiosError, type AxiosResponse } from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Join {
  nickname: string;
  email: string;
  age: string;
  password: string;
  check_password: string;
}

interface JoinRes {
  success: boolean;
  status: number;
}

export default function Join() {
  const api = axios.create({
    baseURL: "https://port-0-alive-mezqigela5783602.sel5.cloudtype.app/",
    withCredentials: true,
  });

  const [info, setInfo] = useState<Join>({
    nickname: "",
    email: "",
    age: "",
    password: "",
    check_password: "",
  });

  const [agree, setAgree] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleJoin = async () => {
    if (
      !info.nickname ||
      !info.email ||
      !info.age ||
      !info.password ||
      !info.check_password
    ) {
      alert("모든 정보를 입력해주세요 !");
      return;
    }
    if (info.password !== info.check_password) {
      alert("비밀번호를 확인해주세요 !");
      return;
    }
    if (!agree) {
      alert("개인정보 활용 동의하지 않을 시 회원가입이 불가능합니다.");
      return;
    }
    try {
      const res: AxiosResponse<JoinRes> = await api.post("/members/register", {
        email: info.email,
        nickName: info.nickname,
        age: Number(info.age),
        pw: info.password,
      });
      if (res.data.success === true) {
        console.log("회원가입 성공", res.data);
        alert("회원가입이 완료됐습니다.");
        navigate("/login");
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log("err.data", err.response?.data);
        console.log("err.status", err.response?.status);
      }
    }
  };

  return (
    <div className="font-[--font-pretendard] flex flex-col justify-center items-center  w-full min-h-screen bg-amber-100">
      <p className="mb-15 font-bold text-black text-4xl text-center pt-10">
        회원가입
      </p>
      <div className="flex flex-col border border-black-300 rounded-2xl p-10 bg-amber-50">
        <div className="w-150 h-120 flex flex-col items-center">
          <div className="flex flex-col gap-6 items-center justify-center p-7">
            <label className="flex items-center justify-between w-full mb-4">
              <span className="w-28 text-left font-bold">닉네임</span>
              <input
                className="flex-1 border border-black bg-white rounded-full p-3 hover:scale-102 hover:shadow-lg"
                type="text"
                id="nickname"
                name="nickname"
                placeholder="닉네임"
                value={info.nickname}
                onChange={handleChange}
              ></input>
            </label>
            <label className="flex items-center justify-between w-full mb-4">
              <span className="w-28 text-left font-bold">나이</span>
              <input
                className="flex-1 border border-black bg-white rounded-full p-3 hover:scale-102 hover:shadow-lg"
                type="text"
                id="age"
                name="age"
                placeholder="나이"
                value={info.age}
                onChange={handleChange}
              ></input>
            </label>
            <label className="flex items-center justify-between w-full mb-4">
              <span className="w-28 text-left font-bold">이메일</span>
              <input
                className="flex-1 border border-black bg-white rounded-full p-3 hover:scale-102 hover:shadow-lg"
                type="email"
                id="email"
                name="email"
                placeholder="E-Mail"
                value={info.email}
                onChange={handleChange}
              ></input>
            </label>
            <label className="flex items-center justify-between w-full mb-4">
              <span className="w-28 text-left font-bold">비밀번호</span>
              <input
                className="flex-1 border border-black bg-white rounded-full p-3 hover:scale-102 hover:shadow-lg"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={info.password}
                onChange={handleChange}
              ></input>
            </label>
            <label className="flex items-center justify-between w-full mb-4">
              <span className="w-28 text-left font-bold">비밀번호 확인</span>
              <input
                className="flex-1 border border-black bg-white rounded-full p-3 hover:scale-102 hover:shadow-lg"
                type="password"
                id="check_password"
                name="check_password"
                placeholder="Check_Password"
                value={info.check_password}
                onChange={handleChange}
              ></input>
            </label>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <label>
            개인정보활용 동의
            <input
              className="cursor-pointer hover:scale-115 hover:shadow-lg shadow-lg p-2 ml-2"
              type="checkbox"
              checked={agree}
              onChange={(e) => {
                setAgree(e.target.checked);
              }}
            ></input>
          </label>
        </div>
        <div className="flex justify-center items-center mt-5">
          <button
            onClick={handleJoin}
            className="cursor-pointer hover:scale-102 hover:shadow-lg bg-amber-300 border border-black-100 rounded-full pl-4.5 pr-4.5 pt-3 pb-3"
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}
