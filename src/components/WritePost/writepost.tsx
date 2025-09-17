import React, { useState, type ChangeEvent } from "react";
import Nav from "../Main/nav";
import dayjs from "dayjs";
import axios, { AxiosError, type AxiosResponse } from "axios";
import { useNavigate, useParams } from "react-router-dom";

interface Post {
  title: string;
  content: string;
}

interface Postres {
  success: boolean;
}

export default function Writepost() {
  const api = axios.create({
    baseURL: "https://port-0-alive-mezqigela5783602.sel5.cloudtype.app/",
    withCredentials: true,
  });

  const { categoryID } = useParams<{ categoryID: string }>();
  const daydate = dayjs().format("YYYY-MM-DD");
  const [post, setPost] = useState<Post>({
    title: "",
    content: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  const submitPost = async () => {
    if (!post.title.trim() || !post.content.trim()) {
      alert("제목과 내용에는 1글자 이상이 필요합니다.");
      return;
    }
    try {
      const res: AxiosResponse<Postres> = await api.post(
        `categories/${categoryID}/boards`,
        {
          title: post.title,
          content: post.content,
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
      <div className="font-bold text-2xl flex justify-center pt-10"></div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="bg-stone-100 border-3 rounded-lg w-300 h-20 mt-20 text-center font-bold text-3xl">
          <input
            className="w-full h-full border rounded-lg text-center"
            type="text"
            name="title" // 👈 name 속성 추가
            value={post.title} // 👈 state와 연결
            onChange={handleInputChange} // 👈 변경 이벤트 핸들러 연결
            placeholder="제목을 입력하세요"
          />
        </div>
        <div className="bg-stone-100 border-3 rounded-lg w-300 h-80 text-left font-semibold text-xl flex flex-col gap-y-5">
          <div className="text-right mr-5">{daydate}</div>
          <div className="h-70">
            <input
              className="w-full h-full border rounded-lg p-5"
              type="text"
              name="content"
              value={post.content}
              onChange={handleInputChange}
              placeholder="내용을 입력하세요"
            ></input>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={submitPost}
          className="bg-amber-200 font-semibold border border-2 p-2 rounded-xl mr-10 cursor-pointer hover:scale-105 overflow:hidden"
        >
          작성하기
        </button>
      </div>
    </div>
  );
}
