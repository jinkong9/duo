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
      main: "이센셜 청소하는법",
      sub: "싱크대는 습하므로 핑크색 곰팡이가 많이 낌",
      img: re,
    },
    {
      main: "전자레인지 청소하는법",
      sub: "전자레인지는 주변 음식물들이 타서 검게 변함",
      img: Kom,
    },
    {
      main: "이센션 청소하는법",
      sub: "싱크대와 마찬가지로 습해서 핑크 곰팡이 많이 낌",
      img: re,
    },
    {
      main: "후드 청소하는법",
      sub: "기름진 음식요리 후 후드가 기름때로 가득 참",
      img: Kom,
    },
  ];
  return (
    <div>
      <div className="font-[--font-pretendard] flex border">
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

export default Ressential;
