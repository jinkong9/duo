import React, { useState } from "react";
import Nav from "../Main/nav";
import dayjs from "dayjs";
import axios, { AxiosError, type AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

interface Post {
  title: string;
  contents: string;
  date: string;
}

interface Postres {
  success: boolean;
}

export default function Writepost() {
  const api = axios.create({
    baseURL: "https://port-0-alive-mezqigela5783602.sel5.cloudtype.app/",
    withCredentials: true,
  });

  const daydate = dayjs().format("YYYY-MM-DD");
  const [post, setPost] = useState<Post>({
    title: "",
    contents: "",
    date: daydate,
  });

  const navigate = useNavigate();

  const submitPost = async () => {
    if (post.title || post.contents === "") {
      alert("제목과 내용에는 1글자 이상이 필요합니다.");
      return;
    }
    try {
      const res: AxiosResponse<Postres> = await api.post(
        "categories/{catergoryID}/boards",
        {
          title: post.title,
          content: post.contents,
          date: post.date,
        }
      );
      if (res.data.success === true) {
        console.log(res.data);
        alert("게시물 업로드 완료 !");
        navigate("/board");
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log("error", err.response?.data);
      }
    }
  };

  return (
    <div className="font-[--font-pretendard] min-h-screen bg-amber-100">
      <Nav />
      <div className="font-bold text-2xl flex justify-center">
        자신만의 팁을 알려주세요 !
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="bg-stone-100 border-3 rounded-lg w-300 h-20 mt-20 text-center font-bold pt-5 text-3xl">
          글쓰기 테스트
        </div>
        <div className="bg-stone-100 border-3 rounded-lg w-300 h-80 text-left font-semibold text-xl p-5 flex flex-col gap-y-5">
          <div className="text-right mb-4 mr-5">{daydate}</div>
          <div className="m-4">
            글쓰기 테스트글쓰기 테스트글쓰기 테스트글쓰기 테스트글쓰기
            테스트글쓰기 테스트글쓰기 테스트글쓰기 테스트글쓰기 테스트글쓰기
            테스트글쓰기 테스트
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-amber-200 font-semibold border border-2 p-2 rounded-xl mr-10 cursor-pointer hover:scale-105 overflow:hidden">
          작성하기
        </button>
      </div>
    </div>
  );
}
