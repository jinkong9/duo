import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  interface Login {
    email: string | number;
    pw: string | number;
  }

  const api = axios.create({
    baseURL: "http://106.255.188.148:8082",
    withCredentials: true,
  });

  const [info, setInfo] = useState<Login>({
    email: "",
    pw: "",
  });

  const handlelogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!info.email || !info.pw) {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const res = await api.post("/members/login", {
        email: info.email,
        pw: info.pw,
      });
      console.log(res);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div className="font-[--font-pretendard] bg-amber-100 w-full min-h-screen">
      <p className="active:scale-95 font-bold text-black text-5xl text-center hover:text-amber-700 mt-4 pt-7">
        Login
      </p>
      <form onSubmit={handlelogin}>
        <div className="mt-10 flex justify-center items-center">
          <div className="w-[500px] h-[400px] rounded-3xl border border-black-100 mt-10 p-5 flex flex-col items-center justify-center mt-10">
            <div className="flex items-baseline gap-x-4">
              <label className="font-bold text-right">email</label>
              <input
                className="rounded-full bg-white font-bold text-center border border-black-100 p-5 mt-10"
                type="email"
                id="email"
                value={info.email}
                placeholder="E-Mail을 적어주세요"
                onChange={(e) => {
                  setInfo({
                    ...info,
                    email: e.target.value,
                  });
                }}
              ></input>
            </div>
            <div className="flex items-baseline gap-x-4">
              <label className="font-bold  text-right">PW </label>
              <input
                className="rounded-full bg-white font-bold text-center border border-black-100 p-5 mt-10 mb-10"
                type="password"
                id="pw"
                value={info.pw}
                placeholder="비밀번호를 적어주세요"
                onChange={(e) => {
                  setInfo({
                    ...info,
                    pw: e.target.value,
                  });
                }}
              ></input>
            </div>
            <button
              className="cursor-pointer hover:shadow-xl bg-amber-300 border border-black-100 rounded-full pl-7 pr-7 pt-3 pb-3 mb-10"
              type="submit"
            >
              Login
            </button>
            <p className="text-sm">
              계정이 없으신가요?{" "}
              <Link className="text-amber-700 text-sm" to="/join">
                회원가입
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
