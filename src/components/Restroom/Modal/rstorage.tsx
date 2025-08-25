import React, { type FC } from "react";
import Kom from "../../../assets/kom.png";
import re from "../../../assets/react.svg";

const Rstorage: FC = () => {
  interface Topic {
    main: string;
    sub: string;
    img: string;
  }
  const CTopic: Topic[] = [
    {
      main: "탈모샴푸",
      sub: "젊은 사람들도 방심할 수 없는 불치병",
      img: Kom,
    },
    {
      main: "린스",
      sub: "푸석한 머리결로부터 조금 회생이 가능한 물품",
      img: re,
    },
    {
      main: "바디워시",
      sub: "땀냄새로부터 안녕할 수 있는 필수템",
      img: Kom,
    },
    {
      main: "클렌징오일",
      sub: "선크림, 화장품, 미세먼지까지 지우는 세안템",
      img: re,
    },
  ];
  return (
    <div className="font-[--font-pretendard] ">
      <div className="flex border">
        <img
          className="w-[300px] h[300px] mt-5 mb-5 ml-5 mr-15"
          src={CTopic[0].img}
          alt="싱크대"
        ></img>
        <div className="mt-10 text-left">
          <a className="text-xl font-bold">{CTopic[0].main}</a>
          <br></br>
          <br></br>
          <a className="font-semibold text-gray-500">{CTopic[0].sub}</a>
        </div>
      </div>
      <div className="flex border">
        <img
          className="w-[300px] h[300px] mt-5 mb-5 ml-5 mr-15"
          src={CTopic[1].img}
          alt="싱크대"
        ></img>
        <div className="mt-10 text-left">
          <a className="text-xl font-bold">{CTopic[1].main}</a>
          <br></br>
          <br></br>
          <a className="font-semibold text-gray-500">{CTopic[1].sub}</a>
        </div>
      </div>
      <div className="flex border">
        <img
          className="w-[300px] h[300px] mt-5 mb-5 ml-5 mr-15"
          src={CTopic[2].img}
          alt="싱크대"
        ></img>
        <div className="mt-10 text-left">
          <a className="text-xl font-bold">{CTopic[2].main}</a>
          <br></br>
          <br></br>
          <a className="font-semibold text-gray-500">{CTopic[2].sub}</a>
        </div>
      </div>
      <div className="flex border">
        <img
          className="w-[300px] h[300px] mt-5 mb-5 ml-5 mr-15"
          src={CTopic[3].img}
          alt="싱크대"
        ></img>
        <div className="mt-10 text-left">
          <a className="text-xl font-bold">{CTopic[3].main}</a>
          <br></br>
          <br></br>
          <a className="font-semibold text-gray-500">{CTopic[3].sub}</a>
        </div>
      </div>
    </div>
  );
};

export default Rstorage;
