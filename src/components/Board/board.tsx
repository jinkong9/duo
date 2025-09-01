import React, { useMemo, useState } from "react";
import Nav from "../Main/nav";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

interface board {
  id: number;
  title: string;
  date: string;
}

export default function Board() {
  const header = ["ID", "TITLE", "DATE"];
  const dummy: board[] = [
    { id: 1, title: "일번제목입니다", date: "2025-09-01" },
    { id: 2, title: "이번제목입니다", date: "2025-09-02" },
    { id: 3, title: "삼번제목입니다", date: "2025-09-03" },
  ];

  const navigate = useNavigate();
  const GoPost = (id: number) => {
    navigate(`/board/${id}`);
  };
  const WritePost = () => {
    navigate("/board/write");
  };

  return (
    <div className="font-[--font-pretendard] min-h-screen bg-amber-100">
      <Nav></Nav>
      <div>
        <p className="text-center font-bold text-2xl">TIPS BOARD</p>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => {
            WritePost();
          }}
          className="bg-white border p-2 rounded-xl mr-10 cursor-pointer hover:scale-105 overflow:hidden"
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
              {dummy.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                  onClick={() => {
                    GoPost(item.id);
                  }}
                >
                  <td className="p-4">{item.id}</td>
                  <td className="p-4">{item.title}</td>
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
