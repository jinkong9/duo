import React, { useState } from "react";
import Nav from "../Main/nav";
import Kclean from "./Modal/kclean";
import Kstorage from "./Modal/kstorage";
import Kessential from "./Modal/kessential";

export default function Kitchen() {
  const [ViewTip, setViewTip] = useState("Cleaning");
  const select = () => {
    if (ViewTip == "Cleaning") {
      return <Kclean />;
    } else if (ViewTip == "Essential") {
      return <Kessential />;
    } else if (ViewTip == "Storage") {
      return <Kstorage />;
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
    <div>
      <Nav />
      <a className="ml-10 text-2xl font-bold">Kitchen Tips !</a>
      <div className="flex items-left">
        <a
          className="m-10 cursor-pointer text-xl font-bold text-gray-500 overflow-hidden hover:text-black"
          onClick={handleClean}
        >
          Cleaning
        </a>
        <a
          className="m-10 cursor-pointer text-xl font-bold text-gray-500 overflow-hidden hover:text-black"
          onClick={handleEssentail}
        >
          Essential
        </a>
        <a
          className="m-10 cursor-pointer text-xl font-bold text-gray-500 overflow-hidden hover:text-black"
          onClick={handleStorage}
        >
          Storage
        </a>
      </div>
      {select()}
    </div>
  );
}
