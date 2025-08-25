import React from "react";
import Nav from "./nav";
import { FaHome, FaCoins, FaCalendarAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Main() {
  interface Extra {
    id: number;
    extra: string;
    emo: React.JSX.Element;
  }

  const extraImg: Extra[] = [
    {
      id: 1,
      extra: "자취방에서 유용하게",
      emo: <FaHome />,
    },
    {
      id: 2,
      extra: "자취생을 위해 절약하며 ",
      emo: <FaCoins />,
    },
    {
      id: 3,
      extra: "모든 것을 계획적으로",
      emo: <FaCalendarAlt />,
    },
    {
      id: 4,
      extra: "다른 사람들과 공유",
      emo: <FaPeopleGroup />,
    },
  ];

  const navigate = useNavigate();
  const start = () => {
    navigate("/kitchen");
  };

  return (
    <div>
      <div className="font-[--font-pretendard] bg-amber-100 min-h-screen">
        <Nav />
        <div className="relative items-center justify-center flex">
          <img
            className="w-[800px] h-[500px] object-cover z-0"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_CKHoARum6olaE82TFQ94QlEBxDYUzW5S4lQ61ASGGhcOxSx_6jcnmnNP6e-kP7q-IvFAmmWp5vw3yHmUT-p6Ndw5Gcl7DyD7ozKjBGAP_pvmp3ewlYjDY8PUu-hnQtYZKt6P07DAi2uOQzvtOwyGRj0eLGovr_cWIYxADThK9kbEUyaxgjFIf2bgWPgEPag9DvSURJinlk73vF1QvwgUKQI8oKYVI7zsq-VJ5xVLKeXQBqJLeARhIAoUf3S6Gimx2rVKBmVvUawF"
            alt="main pic"
          ></img>
          <h2 className="absolute top-[350px] font-bold text-2xl">
            ALIVE ALONE !
          </h2>
          <button
            onClick={start}
            className="hover:shadow-2xl hover:bg-stone-400 font-bold cursor-pointer absolute bg-stone-300 top-[400px] p-6 rounded-full z-10"
          >
            Get Start
          </button>
        </div>
        <div>
          <h2 className="mt-10 text-center font-bold text-2xl">
            자취생을 위한 다양한 꿀팁 서비스
          </h2>
        </div>
        <div className="flex items-center justify-center mt-10 grid-cols-2 gap-15">
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center border max-h-[350px] max-w-[350px] p-30 text-center bg-gray-200 rounded-4xl font-bold"
            >
              {extraImg[i].emo} <br></br>
              {extraImg[i].extra}
            </div> //배열로 그림만 넣을거면 유지
          ))}
        </div>
        <div className="mt-20">
          <h2 className="font-bold text-2xl text-center mb-20">
            {" "}
            항상 도움이 되고 옆에서 함께하는 서비스가 되기위해 노력하겠습니다.
          </h2>
        </div>
        <br></br>
      </div>
      <footer className="bg-amber-50 flex items-center justify-center border h-[200px]">
        <div className="font-bold text-2xl text-center">
          Copyright@ ALIVE ALONE
        </div>
      </footer>
    </div>
  );
}
