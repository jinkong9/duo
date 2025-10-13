import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError, type AxiosResponse } from "axios";
import api from "../Auth/api";

interface Best {
  boardId: number | null;
  title: string;
  createdAt: string;
}

interface APIBest {
  data: Best[];
}

export default function Header() {
  const navigate = useNavigate();
  const [bestTip, setBestTip] = useState<Best | null>(null);

  const start = () => {
    navigate("/board/1");
  };

  useEffect(() => {
    const GetBestTip = async () => {
      try {
        const res: AxiosResponse<APIBest> = await api.get("boards/best");
        console.log("BestTip", res.data.data);
        const Bestdata = res.data.data;
        if (Bestdata && Bestdata.length > 0) {
          setBestTip(Bestdata[0]);
        }
      } catch (err) {
        if (err instanceof AxiosError) {
          console.log("API 오류:", err.response);
        }
      }
    };
    GetBestTip();
  }, []);

  return (
    <header>
      <div className="flex justify-center items-center pt-15">
        <div className="w-300 h-150 items-center justify-center flex flex-col gap-y-5">
          <h2 className="font-bold text-2xl mt-10">BEST TIP</h2>
          <div className="w-200 h-100 border border-bg-[#FFE893] bg-[#FCFFC1] rounded-xl">
            <div className="text-center border-1 border-b-black p-4">
              {bestTip ? bestTip.title : "불러오는 중..."}
            </div>
            <div className="text-left p-5">
              {bestTip ? bestTip.createdAt : ""}
            </div>
          </div>
          <button
            onClick={start}
            className="hover:shadow-2xl hover:bg-stone-400 font-bold cursor-pointer bg-[#FCFFC1] p-4 rounded-full m-4"
          >
            Get Start
          </button>
        </div>
      </div>
    </header>
  );
}
