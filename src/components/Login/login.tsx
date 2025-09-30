import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosError, type AxiosResponse } from "axios";
import { useAuth } from "../Auth/context";

export default function Login() {
  interface Login {
    email: string;
    pw: string;
  }

  interface LoginRes {
    success: boolean;
    status: number;
    data: {
      nickName: string;
    };
  }

  const api = axios.create({
    baseURL: "https://port-0-alive-mezqigela5783602.sel5.cloudtype.app/",
    withCredentials: true,
  });

  const [info, setInfo] = useState<Login>({
    email: "",
    pw: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handlelogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!info.email || !info.pw) {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const res: AxiosResponse<LoginRes> = await api.post("/members/login", {
        email: info.email,
        pw: info.pw,
      });
      if (res.data.success) {
        login(res.data.data);
        navigate("/");
      } else {
        alert("로그인 실패");
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log(err.response?.data?.message);
        alert(err.response?.data?.message);
      }
    }
  };

  return (
    <div className="font-[--font-pretendard] bg-amber-100 w-full min-h-screen">
      <p className="active:scale-95 font-bold text-black text-5xl text-center pt-7">
        Login
      </p>
      <form onSubmit={handlelogin}>
        <div className="mt-10 flex justify-center items-center">
          <div className="w-150 h-100 rounded-3xl border border-stone-400 mt-10 p-5 flex flex-col items-center justify-center">
            <div className="flex items-baseline gap-x-4 mb-6">
              <label className="flex items-center justify-between w-full mb-4">
                <span className="w-18 text-center font-bold">E-Mail</span>
                <input
                  className="flex-1 border border-black bg-white rounded-full p-5"
                  type="email"
                  id="email"
                  value={info.email}
                  placeholder="이메일을 적어주세요"
                  onChange={(e) => {
                    setInfo({
                      ...info,
                      email: e.target.value,
                    });
                  }}
                ></input>
              </label>
            </div>
            <div className="flex items-baseline gap-x-4">
              <label className="flex items-center justify-between w-full mb-7">
                <span className="w-18 text-center font-bold">PW</span>
                <input
                  className="flex-1 border border-black bg-white rounded-full p-5"
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
              </label>
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
