import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

interface board {
  id: number;
  title: string;
  content: string;
  date: string;
}

export default function Main() {
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
    {
      id: 4,
      title: "사번제목입니다",
      content: "일번입니다일번입니다일번입니다일번입니다",
      date: "2025-09-03",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "1%",
    arrows: true,
  };

  const navigate = useNavigate();
  const start = () => {
    navigate("/board");
  };

  return (
    <div className="font-[--font-pretendard] bg-amber-100 min-h-screen">
      <div className="flex justify-center items-center pt-15">
        <div className="w-300 h-150 bg-stone-200 items-center justify-center flex flex-col gap-y-5">
          <h2 className="font-bold text-2xl mt-10">TODAY'S BEST TIP</h2>
          <div className="w-200 h-100 border border-black">
            <div className="text-center border-2 border-b-black p-4">
              {dummy[0].title}
            </div>
            <div className="text-left p-5">{dummy[0].content}</div>
          </div>
          <button
            onClick={start}
            className="hover:shadow-2xl hover:bg-stone-400 font-bold cursor-pointer bg-stone-300 p-4 rounded-full m-4"
          >
            Get Start
          </button>
        </div>
      </div>
      <div>
        <h2 className="mt-10 text-center font-bold text-2xl">
          자취생을 위한 다양한 꿀팁 서비스
        </h2>
      </div>
      <div className="w-full max-w-350 mx-auto my-10 p-10 bg-stone-300 shadow-lg rounded-lg text-center text-xl font-bold">
        오늘의 TIP{" "}
        <Slider {...settings}>
          {dummy.map((item) => (
            <div key={item.id} className="border-gray-300 rounded-3xl p-3">
              <div className="bg-white h-10 border-b text-center flex items-center justify-center p-7">
                <p className="text-xl font-bold">{item.title}</p>
              </div>
              <div className="bg-white h-50 text-center text-sm line-clamp-4 flex items-center justify-center p-2">
                {item.content}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mt-20">
        <h2 className="font-bold text-2xl text-center mb-20">
          {" "}
          항상 도움이 되고 옆에서 함께하는 서비스가 되기위해 노력하겠습니다.
        </h2>
      </div>
      <br></br>
      <footer className="bg-amber-50 flex items-center justify-center border h-[200px]">
        <div className="font-bold text-2xl text-center">
          Copyright@ ALIVE ALONE
        </div>
      </footer>{" "}
    </div>
  );
}
