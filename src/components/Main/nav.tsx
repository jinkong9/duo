import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosError, type AxiosResponse } from "axios";

export default function Nav() {
  // interface CheckLogin {
  //   check: string;
  // }
  // const [login, checkLogin] = useState<CheckLogin>({
  //   check: "Login",
  // });

  interface Logout {
    success: boolean;
  }

  const api = axios.create({
    baseURL: "https://port-0-alive-mezqigela5783602.sel5.cloudtype.app/",
    withCredentials: true,
  });

  const handlelogout = async () => {
    try {
      const res: AxiosResponse<Logout> = await api.delete("members/logout");
      if (res.data.success === true) {
        console.log(res.data);
        window.location.reload();
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log("error", err.response);
      }
    }
  };

  return (
    <div className="font-[--font-pretendard] relative p-4 mb-10 bg-stone-300">
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
        <p
          className="overflow-hidden w-20 mr-10 cursor-pointer font-bold"
          onClick={handlelogout}
        >
          Logout
        </p>
        <Link
          to="/myinfo"
          className="overflow-hidden mr-15 cursor-pointer font-bold"
        >
          내정보
        </Link>
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
