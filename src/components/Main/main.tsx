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
      extra: "1번입니다. ",
      emo: <FaHome />,
    },
    {
      id: 2,
      extra: "2번입니다. ",
      emo: <FaCoins />,
    },
    {
      id: 3,
      extra: "3번입니다. ",
      emo: <FaCalendarAlt />,
    },
    {
      id: 4,
      extra: "4번입니다. ",
      emo: <FaPeopleGroup />,
    },
  ];

  const navigate = useNavigate();
  const start = () => {
    navigate("/kitchen");
  };

  return (
    <div>
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
          className=" hover:bg-blue-500 cursor-pointer absolute bg-blue-200 top-[400px] p-6 rounded-full z-10"
        >
          Get Start
        </button>
      </div>
      <div>
        <h2 className="mt-10 text-center font-bole text-2xl">
          HELLO YURA HELLO YURA HELLO YURA HELLO YURA HELLO YURA
        </h2>
      </div>
      <div className="flex items-center justify-center mt-10 grid-cols-2 gap-15">
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center border p-20 text-center bg-gray-200 rouded-full"
          >
            {extraImg[i].emo} <br></br>
            {extraImg[i].extra}
          </div> //배열로 그림만 넣을거면 유지
        ))}
      </div>
      <div className="mt-20">
        <h2 className="font-bold text-2xl text-center">
          {" "}
          HELLO YURA HELLO YURA HELLO YURA HELLO YURA HELLO YURA
        </h2>
      </div>
      <br></br>
      <footer className="border h-[300px]">
        <div>
          <h3 className="font-bold text-2xl text-center">
            HELLO YURA HELLO YURA HELLO YURA HELLO YURA HELLO YURA
          </h3>
        </div>
      </footer>
    </div>
  );
}
