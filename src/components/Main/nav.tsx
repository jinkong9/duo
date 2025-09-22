import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/context";
import axios, { AxiosError, type AxiosResponse } from "axios";

interface AuthRes {
  success: boolean;
}

interface CategoryItem {
  id: number;
  name: string;
  boardCount: number;
}

interface CategoryResponse {
  data: CategoryItem[];
}

export default function Nav() {
  const { isLoading, isLogging, user, logout } = useAuth();
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const navigate = useNavigate();

  const api = axios.create({
    baseURL: "https://port-0-alive-mezqigela5783602.sel5.cloudtype.app/",
    withCredentials: true,
  });
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res: AxiosResponse<CategoryResponse> = await api.get(
          "categories"
        );
        console.log("Categories", res.data.data);
        setCategories(res.data.data);
      } catch (err) {
        console.log("카테고리 로딩 실패:", err);
      }
    };
    fetchCategories();
  }, []);

  const Authpage = async () => {
    try {
      const res: AxiosResponse<AuthRes> = await api.get("members/me");
      if (res.data.success === true) {
        console.log(res.data);
        navigate("/myinfo");
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log(err.response);
        alert("로그인이 필요합니다.");
        return;
      }
    }
  };

  const handleLogout = async () => {
    if (!isLogging) {
      navigate("/login");
      return;
    }
    await logout();
  };

  return (
    <div className="font-[--font-pretendard] relative p-4 bg-stone-300">
      <div className="text-left absolute flex space-x-8">
        <Link
          to="/"
          className="overflow-hidden ml-5 text-xl text-center font-bold cursor-pointer"
        >
          ALIVE ALONE
        </Link>
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/board/${category.id}`}
            className="font-bold text-center cursor-pointer hover:scale-110"
          >
            {category.name}
          </Link>
        ))}
        {/* <Link
          to="/board"
          className="overflow-hidden font-bold text-center cursor-pointer hover:scale-110"
        >
          WITH
        </Link> */}
      </div>

      <div className="text-right flex justify-end">
        <p className="overflow-hidden mr-20 font-bold">
          {isLoading
            ? "불러오는중.."
            : isLogging && user
            ? `${user.nickName}님 환영합니다 !`
            : ""}
        </p>
        <p
          onClick={Authpage}
          className="overflow-hidden mr-15 cursor-pointer font-bold"
        >
          내정보
        </p>
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
