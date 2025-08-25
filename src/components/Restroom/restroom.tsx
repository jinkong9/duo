import React, { useState } from "react";
import Nav from "../Main/nav";
import Rclean from "./Modal/rclear";
import Ressential from "./Modal/ressential";
import Rstorage from "./Modal/rstorage";
export default function Restroom() {
  const [ViewTip, setViewTip] = useState("Cleaning");
  const select = () => {
    if (ViewTip == "Cleaning") {
      return <Rclean />;
    } else if (ViewTip == "Essential") {
      return <Ressential />;
    } else if (ViewTip == "Storage") {
      return <Rstorage />;
    }
  };

  const handleClean = () => {
    setViewTip("Cleaning");
  };
  const handleEssentail = () => {
    setViewTip("Essential");
  };
  const handleStorage = () => {
    setViewTip("Storage");
  };

  return (
    <div className="font-[--font-pretendard]">
      <Nav />
      <a className="ml-10 text-2xl font-bold">욕실 Tips !</a>
      <div className="flex items-left">
        <a
          className={`m-10 cursor-pointer text-xl font-bold overflow-hidden hover:text-black
                     ${
                       ViewTip === "Cleaning" ? "text-black" : "text-gray-500"
                     }`}
          onClick={handleClean}
        >
          Cleaning
        </a>
        <a
          className={`m-10 cursor-pointer text-xl font-bold overflow-hidden hover:text-black
                     ${
                       ViewTip === "Essential" ? "text-black" : "text-gray-500"
                     }`}
          onClick={handleEssentail}
        >
          Essential
        </a>
        <a
          className={`m-10 cursor-pointer text-xl font-bold overflow-hidden hover:text-black
                     ${ViewTip === "Storage" ? "text-black" : "text-gray-500"}`}
          onClick={handleStorage}
        >
          Storage
        </a>
      </div>
      {select()}
    </div>
  );
}
