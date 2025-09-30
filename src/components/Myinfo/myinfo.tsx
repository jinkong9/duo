import React, { useEffect, useState } from "react";
import Nav from "../Main/nav";
import icon from "../../assets/iconimg.png";
import axios, { AxiosError, type AxiosResponse } from "axios";
import { Link, useNavigate } from "react-router-dom";

interface MyPost {
  boardId: number;
  title: string;
  createdAt: string;
  categoryId: number;
  categoryName: string;
}

interface APIMyPost {
  data: { content: MyPost[] };
  totalElements: number;
}

interface Info {
  nickName: string;
  email: string;
  joinedAt: string;
  boardCount: number;
}

interface APIInfo {
  data: Info;
}

const ChangePwPage = () => {
  const width = 500;
  const height = 600;
  const left = window.screenX + (window.outerWidth - width) / 2;
  const top = window.screenY + (window.outerHeight - height) / 2;
  const feature = `width=${width}, height=${height}, left=${left}, top=${top}, resizable=no, scrollbar=yes`;
  window.open("/changepw", "ChangePwPage", feature);
};

export default function Myinfo() {
  const api = axios.create({
    baseURL: "https://port-0-alive-mezqigela5783602.sel5.cloudtype.app/",
    withCredentials: true,
  });

  const navigate = useNavigate();

  const [info, setInfo] = useState<Info>({
    nickName: "",
    email: "",
    joinedAt: "",
    boardCount: 0,
  });
  const [myPost, setMypost] = useState<MyPost[]>([]);

  useEffect(() => {
    const GetMyPost = async () => {
      const res: AxiosResponse<APIMyPost> = await api.get(
        "members/myProfile/boards"
      );
      console.log("My post", res.data.data);
      setMypost(res.data.data.content);
    };
    GetMyPost();
  }, []);

  useEffect(() => {
    const GetMyInfo = async () => {
      try {
        const res: AxiosResponse<APIInfo> = await api.get("members/myProfile");
        console.log("내정보", res.data.data);
        setInfo(res.data.data);
      } catch (err) {
        if (err instanceof AxiosError) {
          console.log("내정보 오류", err.response);
        }
      }
    };
    GetMyInfo();
  }, []);

  useEffect(() => {
    const ChangePW = async (msg: MessageEvent) => {
      if (msg.data === "ChangePW") {
        console.log("success get msg");
        try {
          const res = await api.delete("members/logout");
          console.log("success logout", res);
        } catch (err) {
          if (err instanceof AxiosError) {
            console.log("logout err", err.response);
          }
        }
        alert("비밀번호가 변경되었습니다 ! 다시 로그인 해주세요.");
        navigate("/login");
      }
    };
    window.addEventListener("message", ChangePW);
    return () => {
      window.removeEventListener("message", ChangePW);
    };
  }, [navigate]);
  return (
    <div className="bg-amber-100 min-h-screen font-[--font-pretendard] pt-10">
      <div className="flex flex-col justify-center items-center gap-y-30">
        <div className="w-150 h-80 border ml-10 bg-amber-50 rounded-2xl text-center pt-2 font-bold">
          <p className="text-2xl">MY INFO</p>
          <div className="flex gap-x-12">
            <div className="overflow-hidden border rounded-full w-30 h-30 mt-14 ml-8 mr-10 flex justify-center">
              <img className="w-28 h-28" src={icon} alt="avartaIMG"></img>
            </div>
            <div className="flex flex-col mt-8 justify-center items-start font-semibold text-left gap-y-5">
              <div className="flex gap-x-10">
                <p>닉네임 </p>
                <p>:</p> <p>{info.nickName}</p>
              </div>
              <div className="flex gap-x-10">
                <p>이메일 </p>
                <p>:</p> <p>{info.email}</p>
              </div>
              <div className="flex gap-x-10">
                <p>가입일자 </p>
                <p>:</p> <p>{info.joinedAt}</p>
              </div>
              <div className="flex gap-x-10">
                <p>내가 쓴 게시물 </p>
                <p>:</p> <p>{info.boardCount}</p>
              </div>
              <div
                onClick={ChangePwPage}
                className="cursor-pointer hover:text-stone-700 overflow-hidden"
              >
                비밀번호 변경하기
              </div>
            </div>
          </div>
        </div>
        <div className="w-180 min-h-screen border bg-amber-50 flex flex-col items-center rounded-2xl gap-y-13">
          <p className="font-bold text-2xl mt-10 flex justify-center text-center">
            내가 쓴 글
          </p>

          {myPost.map((item) => (
            <div
              key={item.boardId}
              className="border border-black w-150 h-10 rounded-2xl flex justify-center items-center gap-x-20"
            >
              <div className="font-bold">{item.title}</div>
              <p>-</p>
              <div className="font-bold">{item.createdAt}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
