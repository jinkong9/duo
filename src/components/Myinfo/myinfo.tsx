import React, { useEffect, useState } from "react";
import Nav from "../Main/nav";
import icon from "../../assets/iconimg.png";
import axios, { AxiosError, type AxiosResponse } from "axios";
import { Link, useNavigate } from "react-router-dom";

interface GetTip {
  title: string;
  date: string;
  content: string;
}

interface UserData {
  nickName: string;
}

interface ApiRes {
  data: UserData;
}

const ChangePwPage = () => {
  const width = 500;
  const height = 600;
  const left = window.screenX + (window.outerWidth - width) / 2;
  const top = window.screenY + (window.outerHeight - height) / 2;
  const feature = `width=${width}, height=${height}, left=${left}, top=${top}, resizable=no, scrollbar=yes`;
  const page = window.open("/changepw", "ChangePwPage", feature);
};

export default function Myinfo() {
  const api = axios.create({
    baseURL: "https://port-0-alive-mezqigela5783602.sel5.cloudtype.app/",
    withCredentials: true,
  });

  const [nick, setNick] = useState<UserData | null>(null);

  useEffect(() => {
    const Getname = async () => {
      try {
        const res: AxiosResponse<ApiRes> = await api.get("members/me");
        if (res) {
          setNick(res.data.data);
        }
      } catch (err) {
        if (err instanceof AxiosError) {
          console.log(err.response);
        }
      }
    };
    Getname();
  }, []);

  return (
    <div className="bg-amber-100 min-h-screen font-[--font-pretendard] pt-10">
      <div className="flex flex-col justify-center items-center gap-y-30">
        <div className="w-150 h-80 border ml-10 bg-amber-50 rounded-2xl text-center pt-2 font-bold">
          <p className="text-2xl">MY INFO</p>
          <div className="flex gap-x-12">
            <div className="overflow-hidden border rounded-full w-30 h-30 mt-14 ml-8 mr-10 flex justify-center">
              <img className="w-28 h-28" src={icon} alt="avartaIMG"></img>
            </div>
            <div className="flex flex-col mt-8 justify-center items-start font-semibold text-left">
              <div className="flex gap-x-10">
                <p>닉네임 :</p> <p> {nick?.nickName}</p>
              </div>
              <br></br>
              <p>이메일 : </p>
              <br></br>
              <p>가입일자 : </p>
              <br></br>
              <p>내가 쓴 게시물 : </p>
              <br></br>
              <p
                onClick={ChangePwPage}
                className="cursor-pointer hover:text-stone-700 overflow-hidden"
              >
                비밀번호 변경하기
              </p>
            </div>
          </div>
        </div>
        <div className="w-180 min-h-screen border bg-amber-50 flex flex-col items-center rounded-2xl gap-y-13">
          <p className="font-bold text-2xl mt-10 flex justify-center text-center">
            내가 쓴 글
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
