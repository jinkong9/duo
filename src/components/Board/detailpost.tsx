import React, { useState } from "react";
import Nav from "../Main/nav";
import axios from "axios";
import { useParams } from "react-router-dom";

interface post {
  title: string;
  content: string;
}

interface postresponse {
  title: string;
  contents: string;
}

interface board {
  id: number;
  title: string;
  content: string;
  date: string;
}

export default function DetailPost() {
  const { postID } = useParams();

  const dummy: board[] = [
    {
      id: 1,
      title: "일번제목입니다",
      content: "일번입니다일번입니다일번입니다일번입니다",
      date: "2025-09-01",
    },
    {
      id: 2,
      title: "이번제목입니다",
      content: "일번입니다일번입니다일번입니다일번입니다",
      date: "2025-09-02",
    },
    {
      id: 3,
      title: "삼번제목입니다",
      content: "일번입니다일번입니다일번입니다일번입니다",
      date: "2025-09-03",
    },
  ];

  const postid = dummy.find((p) => p.id === Number(postID));

  if (!postid) {
    return (
      <div className="font-[--font-pretendard] min-h-screen bg-amber-100">
        <Nav />
        <div className="text-center text-2xl mt-20">
          게시물을 찾을 수 없습니다.
        </div>
      </div>
    );
  }

  const api = axios.create({
    baseURL: "http://106.255.188.148:8082",
    withCredentials: true,
  });

  const [post, setPost] = useState<post>({
    title: "",
    content: "",
  });

  return (
    <div className="font-[--font-pretendard] min-h-screen bg-amber-100">
      <Nav></Nav>
      <div className="font-bold text-2xl flex justify-center">
        다른 사람들의 이야기를 들어봐요 !
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-stone-100 border-3 rounded-lg w-300 h-20 mt-20 text-center font-bold pt-5 text-3xl">
          {postid.title}
        </div>
        <div className="bg-stone-100 border-3 rounded-lg w-300 h-80 text-left font-semibold text-xl p-10 flex justify-center">
          {postid.content} {postid.date}
          <br className="md:hidden" />
        </div>
      </div>
    </div>
  );
}
