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
  const GoKitchen = () => {
    navigate("/kitchen");
  };
  const GoRestroom = () => {
    navigate("/restroom");
  };

  return (
    <div className="font-[--font-pretendard] relative p-3 mb-10 bg-emerald-600">
      <div className="text-left absolute flex">
        <Link
          to="/"
          className="overflow-hidden ml-5 text-xl text-center font-bold cursor-pointer"
        >
          ALIVE ALONE
        </Link>
        <a
          className="overflow-hidden ml-10 text-center cursor-pointer"
          onClick={GoKitchen}
        >
          KITCHEN
        </a>
      </div>
      <div className="text-right">
        <a className="mr-30 overflow-hidden cursor-pointer">내정보</a>
        <Link to="/login" className="overflow-hidden mr-10 cursor-pointer">
          Login
        </Link>
      </div>
    </div>
  );
}
