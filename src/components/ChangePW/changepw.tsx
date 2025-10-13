import React, { useState } from "react";
import { AxiosError, type AxiosResponse } from "axios";
import api from "../Auth/api";

interface ChangPW {
  oldPW: string;
  newPW: string;
  ConfirmPW: string;
}

interface ChangePWres {
  status: number;
  success: boolean;
}

export default function Changepw() {
  const [pw, setPw] = useState<ChangPW>({
    oldPW: "",
    newPW: "",
    ConfirmPW: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPw((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePopUp = () => {
    if (window.opener) {
      window.opener.postMessage("ChangePW", "*");
    }
    window.close();
  };

  const handlePW = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pw.oldPW === pw.newPW) {
      alert("기존 비밀번호와 다르게 설정해주세요.");
      return;
    }
    if (!pw.oldPW || !pw.newPW || !pw.ConfirmPW) {
      alert("모든 칸을 채워주세요.");
      return;
    }
    if (pw.newPW !== pw.ConfirmPW) {
      alert("새로운 비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      const res: AxiosResponse<ChangePWres> = await api.patch(
        "members/password",
        {
          oldPassword: pw.oldPW,
          newPassword: pw.newPW,
        }
      );
      console.log("good", res.data);
      if (res.data.success === true) {
        handlePopUp();
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log("비번바꾸기 오류", err.response);
      }
    }
  };

  return (
    <div className="bg-amber-100 min-h-screen font-[--font-pretendard]">
      <div className="text-center font-bold mb-10">
        <p className="pt-5 text-xl">비밀번호 변경</p>
      </div>
      <form
        onSubmit={handlePW}
        className="flex flex-col justify-center items-center gap-3"
      >
        <p>*기존 비밀번호를 입력해주세요 .</p>
        <div>
          <input
            className="border border-gray-200 hover:border-black rounded-2xl p-3 bg-white"
            type="password"
            id="oldPW"
            name="oldPW"
            placeholder="비밀번호를 입력해주세요."
            onChange={handleChange}
          ></input>
        </div>
        <p className="mt-4">*새 비밀번호를 입력해주세요 .</p>
        <div>
          <input
            className="border border-gray-200 hover:border-black rounded-2xl p-3 bg-white"
            type="password"
            id="newPW"
            name="newPW"
            placeholder="새로운 비밀번호를 입력해주세요."
            onChange={handleChange}
          ></input>
        </div>
        <p className="mt-4">*새 비밀번호를 한번 더 입력해주세요 .</p>
        <div>
          <input
            className="border border-gray-200 hover:border-black rounded-2xl p-3 mb-6 bg-white"
            type="password"
            id="ConfirmPW"
            name="ConfirmPW"
            placeholder="새로운 비밀번호를 다시입력해주세요."
            onChange={handleChange}
          ></input>
        </div>
        <button
          className="bg-amber-200 cursor-pointer hover:scale-105 hover:shadow-md border rounded-2xl w-20 h-10"
          type="submit"
        >
          제출하기
        </button>
      </form>
    </div>
  );
}
