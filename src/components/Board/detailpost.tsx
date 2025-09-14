import React, { useState } from "react";
import Nav from "../Main/nav";
import axios from "axios";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

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

interface Comment {
  id: number;
  nickName: string;
  comment: string;
  date: string;
}

export default function DetailPost() {
  const { postID } = useParams();

  const date = dayjs().format("YYYY-MM-DD");
  const CommnetHeader = ["NickName", "Comment", "date"];
  const dummycomment: Comment[] = [
    {
      id: 1,
      nickName: "진콩",
      comment: "우아 정말 좋은 꿀팁이네요 !",
      date: "2025-09-14",
    },
    {
      id: 2,
      nickName: "유라콩",
      comment: "우아 정말 예쁘고 아름다운 꿀팁이네요 !",
      date: "2025-09-14",
    },
    {
      id: 3,
      nickName: "성진콩",
      comment: "정말로 좋좋좋좋은 꿀팁이네요 !",
      date: "2025-09-14",
    },
    {
      id: 4,
      nickName: "성진콩",
      comment: "정말로 좋좋좋좋은 꿀팁이네요 !",
      date: "2025-09-14",
    },
    {
      id: 5,
      nickName: "성진콩",
      comment: "정말로 좋좋좋좋은 꿀팁이네요 !",
      date: "2025-09-14",
    },
    {
      id: 6,
      nickName: "성진콩",
      comment: "정말로 좋좋좋좋은 꿀팁이네요 !",
      date: "2025-09-14",
    },
  ];

  const dummy: board[] = [
    {
      id: 1,
      title: "일번제목입니다",
      content:
        "일번입니다일번입니다일번입니다일번입니다일번입니다일번입니다일번입니다일번입니다일번입니다일번입니다일번입니다일번입니다일번입니다일번입니다일번입니다일번입니다",
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
      <div className="font-bold text-2xl flex justify-center pt-10">
        다른 사람들의 이야기를 들어봐요 !
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-stone-100 border-3 rounded-lg w-300 h-20 mt-20 text-center font-bold pt-5 text-3xl">
          {postid.title}
        </div>
        <div className="bg-stone-100 border-3 rounded-lg w-300 h-80 text-left font-semibold p-5 flex flex-col gap-5">
          <div className="w-full text-right text-l">{postid.date}</div>
          <div className="w-full text-left text-xl p-2">{postid.content}</div>
        </div>
        <div className="w-270 mx-auto bg-white mt-20 border-2 flex flex-col mb-5">
          <div className="text-center border-2 p-5 bg-stone-500">COMMENT</div>
          <table className="w-full text-center border-collapse">
            <thead className="bg-stone-300 border-b-2">
              <tr>
                {CommnetHeader.map((item) => (
                  <th key={item} className="p-4 font-semibold">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dummycomment.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">{item.nickName}</td>
                  <td className="p-4">{item.comment}</td>
                  <td className="p-4">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
