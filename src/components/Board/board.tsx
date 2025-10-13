import React, { useEffect, useState } from "react";
import { type AxiosResponse } from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import api from "../Auth/api";
import { useAuth } from "../Auth/context";

interface board {
  id: number;
  title: string;
  createdAt: string;
}

interface BoardAPI {
  data: {
    content: board[];
  };
}

export default function Board() {
  const header = ["ID", "TITLE", "DATE"];
  const [post, setPost] = useState<board[]>([]);
  const { isLogging } = useAuth();

  const navigate = useNavigate();
  const { categoryID } = useParams<{ categoryID: string }>();

  const GoPost = (postID: number) => {
    navigate(`/board/${categoryID}/${postID}`);
  };
  const WritePost = () => {
    if (isLogging) {
      navigate(`/board/${categoryID}/write`);
    } else {
      alert("로그인이 필요합니다. ");
      navigate("/login");
    }
  };

  useEffect(() => {
    const GetPost = async () => {
      try {
        const res: AxiosResponse<BoardAPI> = await api.get(
          `categories/${categoryID}/boards`
        );
        console.log("s", res);
        setPost(res.data.data.content);
      } catch (err) {
        console.log("err", err);
      }
    };
    GetPost();
  }, [categoryID]);

  return (
    <div className="font-[--font-pretendard] min-h-screen bg-amber-100">
      <div className="pt-10">
        <p className="text-center font-bold text-2xl">TIPS BOARD</p>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => {
            WritePost();
          }}
          className="bg-amber-200 border p-2 rounded-2xl mr-10 cursor-pointer hover:bg-amber-100 hover:scale-105 overflow:hidden"
        >
          작성하기
        </button>
      </div>
      <div className="p-4 sm:p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full text-center border-collapse">
            <thead className="bg-gray-100 border-b-2 border-gray-200">
              <tr>
                {header.map((item) => (
                  <th key={item} className="p-4 font-semibold text-gray-600">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {post.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                  onClick={() => {
                    GoPost(item.id);
                  }}
                >
                  <td className="p-4">{item.id}</td>
                  <td className="p-4">{item.title}</td>
                  <td className="p-4">{item.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
