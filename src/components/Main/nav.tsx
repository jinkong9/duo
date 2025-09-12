import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/context";

export default function Nav() {
  const { isLoading, isLogging, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    if (!isLogging) {
      navigate("/login");
      return;
    }
    await logout();
  };

  return (
    <div className="font-[--font-pretendard] relative p-4 bg-stone-300">
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
          to="/board"
          className="overflow-hidden ml-10 font-bold text-center cursor-pointer hover:scale-110"
        >
          WITH
        </Link>
      </div>

      <div className="text-right flex justify-end">
        <p className="overflow-hidden mr-20 font-bold">
          {isLoading
            ? "불러오는중.."
            : isLogging && user
            ? `${user.nickName}님 환영합니다 !`
            : "로그인이 필요합니다."}
        </p>
        <Link
          to="/myinfo"
          className="overflow-hidden mr-15 cursor-pointer font-bold"
        >
          내정보
        </Link>
        <p
          className="overflow-hidden cursor-pointer mr-10 font-bold"
          onClick={handleLogout}
        >
          {isLogging ? "Logout" : "Login"}
        </p>
      </div>
    </div>
  );
}
