import React, { type FC } from "react";
import Kom from "../../../assets/kom.png";
import re from "../../../assets/react.svg";

const Ressential: FC = () => {
  interface Topic {
    main: string;
    sub: string;
    img: string;
  }
  const CTopic: Topic[] = [
    {
      main: "락스",
      sub: "핑크색 물 때와 냄새를 제거해주는 필수템 !",
      img: re,
    },
    {
      main: "변기전용 일회용 카트리지",
      sub: "하나씩 뽑아쓰는 카트리지로 편한 처리와 강한 청소력 !",
      img: Kom,
    },
    {
      main: "스퀴즈",
      sub: "습한 화장실 바닥으로부터 탈출 가능 !",
      img: re,
    },
    {
      main: "머리카락 전용 망",
      sub: "자주막히는 배수구, 이제는 천천히 ..",
      img: Kom,
    },
  ];
  return (
    <div>
      <div className="font-[--font-pretendard] flex border">
        <img
          className="w-[300px] h[300px] mt-5 mb-5 ml-5 mr-15"
          src={CTopic[0].img}
          alt="락스"
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
          alt="카트리지"
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
          alt="스퀴즈"
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
          alt="망"
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

export default Ressential;
