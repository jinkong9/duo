import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  // interface CheckLogin {
  //   check: string;
  // }
  // const [login, checkLogin] = useState<CheckLogin>({
  //   check: "Login",
  // });

  const navigate = useNavigate();

  return (
    <div className="font-[--font-pretendard] relative p-5 mb-10 bg-stone-300">
      <div className="text-left absolute flex">
        <Link
          to="/"
          className="overflow-hidden ml-5 text-xl text-center font-bold cursor-pointer"
        >
          ALIVE ALONE
        </Link>
        <Link
          to="/kitchen"
          className="overflow-hidden ml-10 font-bold text-center cursor-pointer hover:scale-110"
        >
          주방
        </Link>
        <Link
          to="/restroom"
          className="overflow-hidden ml-10 font-bold text-center cursor-pointer hover:scale-110"
        >
          욕실
        </Link>
        <Link
          to="/livingroom"
          className="overflow-hidden ml-10 font-bold text-center cursor-pointer hover:scale-110"
        >
          거실
        </Link>
        <Link
          to="/post"
          className="overflow-hidden ml-10 font-bold text-center cursor-pointer hover:scale-110"
        >
          WITH
        </Link>
      </div>
      <div className="text-right">
        <a className="mr-30 overflow-hidden cursor-pointer font-bold">내정보</a>
        <Link
          to="/login"
          className="overflow-hidden mr-10 cursor-pointer font-bold"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
