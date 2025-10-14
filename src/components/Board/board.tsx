import React, { useEffect, useState } from "react";
import { AxiosError, type AxiosResponse } from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import api from "../Auth/api";
import { useAuth } from "../Auth/context";
import { useQuery } from "@tanstack/react-query";
import { GetPost, type board } from "./boardAPI";

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

  const {
    data: posts,
    isLoading: postsLoading,
    isError: postsError,
    error: postsErr,
  } = useQuery<board[], AxiosError>({
    queryKey: ["getPosts", categoryID],
    queryFn: () => GetPost(categoryID!),
    enabled: !!categoryID,
  });

  if (postsLoading) {
    return (
      <div className="bg-amber-100 min-h-screen text-center text-2xl font-bold font-[--font-pretendard] pt-10 flex justify-center gap-6">
        <div className="w-11 h-11 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
        <div>불러오는 중...</div>
      </div>
    );
  }

  if (postsError) {
    console.error("get error", postsErr);
    return (
      <div className="bg-amber-100 min-h-screen text-center text-2xl font-bold font-[--font-pretendard] pt-10">
        정보를 불러오는 중 오류가 발생했습니다.
      </div>
    );
  }

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
              {posts?.map((item) => (
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
