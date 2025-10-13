import axios, { AxiosError, type AxiosResponse } from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Auth/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { JoinAPI, type JoinBody } from "./joinAPI";

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
  const [info, setInfo] = useState<Join>({
    nickname: "",
    email: "",
    age: "",
    password: "",
    check_password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [agree, setAgree] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const register = useMutation({
    mutationFn: JoinAPI,
    onSuccess: () => {
      console.log("회원가입 성공");
      alert("회원가입이 완료됐습니다 !");
      navigate("/login");
    },
    onError: (err) => {
      // 4. 타입 가드를 사용하여 안전하게 서버 에러 처리
      if (axios.isAxiosError(err)) {
        const errorData = err.response?.data as {
          errorCode?: string;
          message?: string;
        };
        if (errorData?.errorCode === "DUPLICATE_EMAIL") {
          // 이메일 중복 시, email 필드에 에러 메시지 설정
          setErrors((prev) => ({
            ...prev,
            email: "이미 사용 중인 이메일입니다.",
          }));
        } else {
          // 그 외 서버 에러는 alert으로 표시
          alert(errorData?.message || "알 수 없는 오류가 발생했습니다.");
        }
      } else {
        // Axios 에러가 아닌 경우
        alert("예기치 못한 오류가 발생했습니다.");
      }
    },
  });

  const handleJoin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    register.mutate(info);
  };

  return (
    <div className="font-[--font-pretendard] flex flex-col justify-center items-center  w-full min-h-screen bg-amber-100">
      <p className="mb-15 font-bold text-black text-4xl text-center pt-10">
        회원가입
      </p>
      <form
        onSubmit={handleJoin}
        className="flex flex-col border border-black-300 rounded-2xl p-10 bg-amber-50"
      >
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
            type="submit"
            className="cursor-pointer hover:scale-102 hover:shadow-lg bg-amber-300 border border-black-100 rounded-full pl-4.5 pr-4.5 pt-3 pb-3"
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}
