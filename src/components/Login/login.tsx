import React, { useState } from "react";
import type { Info } from "../../Model/logintype";

export default function Login() {
  //   const [info, setInfo] = useState<Info>({
  //     name: "",
  //     age: 0,
  //     id: "",
  //     pw: "",
  //   });
  interface Login {
    name: string;
    age: number | null;
    id: string | number;
    pw: string | number;
  }
  const [info, setInfo] = useState<Login>({
    name: "",
    age: null,
    id: "",
    pw: "",
  });
  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <p className="font-bold text-gray-800 text-5xl text-center hover:text-blue-700 mt-4 pt-7">
        Login
      </p>
      <div className="mt-10 flex justify-center">
        <div className="w-[800px] rounded-3xl border border-black-100 p-5 flex flex-col items-center justify-center mt-10">
          <div className="flex items-baseline gap-x-4 mt-10">
            <label className="font-bold w-20 text-right">NAME</label>
            <input
              className="rounded-full font-bold text-center border border-black-100 p-5 mt-10"
              type="text"
              id="name"
              value={info.name}
              placeholder="이름을 적어주세요"
              onChange={(e) => {
                setInfo({
                  ...info,
                  name: e.target.value,
                });
              }}
            ></input>
          </div>
          <div className="flex items-baseline gap-x-4">
            <label className="font-bold w-20 text-right">AGE</label>
            <input
              className="rounded-full font-bold text-center border border-black-100 p-5 mt-10"
              type="number"
              id="name"
              value={info.age ?? ""}
              placeholder="나이를 적어주세요"
              onChange={(e) => {
                const val = e.target.value;
                setInfo({
                  ...info,
                  age: val === "" ? 0 : Number(val),
                });
              }}
            ></input>
          </div>
          <div className="flex items-baseline gap-x-4">
            <label className="font-bold w-20 text-right">ID</label>
            <input
              className="rounded-full font-bold text-center border border-black-100 p-5 mt-10"
              type="text"
              id="id"
              value={info.id}
              placeholder="아이디를 적어주세요"
              onChange={(e) => {
                setInfo({
                  ...info,
                  id: e.target.value,
                });
              }}
            ></input>
          </div>
          <div className="flex items-baseline gap-x-4">
            <label className="font-bold w-20 text-right">PW </label>
            <input
              className="rounded-full font-bold text-center border border-black-100 p-5 mt-10 mb-10"
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
            className="bg-yellow-200 border border-black-100 rounded-full pl-9 pr-9 pt-4 pb-4 mb-10"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
