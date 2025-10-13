import React, { useEffect } from "react";
import icon from "../../assets/iconimg.png";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../Auth/api";
import {
  getMyPosts,
  getMyInfo,
  type MyPost,
  type Info,
} from "../Myinfo/myinfoAPI";

const ChangePwPage = () => {
  const width = 500;
  const height = 600;
  const left = window.screenX + (window.outerWidth - width) / 2;
  const top = window.screenY + (window.outerHeight - height) / 2;
  const feature = `width=${width}, height=${height}, left=${left}, top=${top}, resizable=no, scrollbar=yes`;
  window.open("/changepw", "ChangePwPage", feature);
};

export default function Myinfo() {
  const navigate = useNavigate();

  const {
    data: info,
    isLoading: infoLoading,
    isError: infoError,
    error: infoErr,
  } = useQuery<Info, AxiosError>({
    queryKey: ["myInfo"],
    queryFn: getMyInfo,
  });

  const {
    data: myPosts,
    isLoading: postsLoading,
    isError: postsError,
    error: postsErr,
  } = useQuery<MyPost[], AxiosError>({
    queryKey: ["myPosts"],
    queryFn: getMyPosts,
  });

  useEffect(() => {
    const handleChangePW = async (msg: MessageEvent) => {
      if (msg.data === "ChangePW") {
        console.log("비밀번호 변경 감지됨, 로그아웃 실행");

        try {
          const res = await api.delete("members/logout");
          console.log("로그아웃 성공", res);
        } catch (err) {
          if (err instanceof AxiosError) {
            console.log("로그아웃 에러", err.response);
          }
        }
        alert("비밀번호가 변경되었습니다! 다시 로그인 해주세요.");
        navigate("/login");
      }
    };
    window.addEventListener("message", handleChangePW);
    return () => {
      window.removeEventListener("message", handleChangePW);
    };
  }, [navigate]);

  if (infoLoading || postsLoading) {
    return (
      <div className="bg-amber-100 min-h-screen text-center text-2xl font-bold font-[--font-pretendard] pt-10 flex justify-center gap-6">
        <div className="w-11 h-11 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
        <div>불러오는 중...</div>
      </div>
    );
  }

  if (infoError || postsError) {
    console.error("get error", infoErr ?? postsErr);
    return (
      <div className="text-center mt-20 text-red-500">
        정보를 불러오는 중 오류가 발생했습니다.
      </div>
    );
  }

  return (
    <div className="bg-amber-100 min-h-screen font-[--font-pretendard]">
      <div className="flex flex-col justify-center items-center gap-y-30 pt-10">
        <div className="w-150 h-80 border ml-10 bg-amber-50 rounded-2xl text-center pt-2 font-bold">
          <p className="text-2xl">MY INFO</p>
          <div className="flex gap-x-12">
            <div className="overflow-hidden border rounded-full w-30 h-30 mt-14 ml-8 mr-10 flex justify-center">
              <img className="w-28 h-28" src={icon} alt="avartaIMG" />
            </div>

            <div className="flex flex-col mt-8 justify-center items-start font-semibold text-left gap-y-5">
              <div className="flex gap-x-10">
                <p>닉네임 </p>
                <p>:</p> <p>{info?.nickName}</p>
              </div>
              <div className="flex gap-x-10">
                <p>이메일 </p>
                <p>:</p> <p>{info?.email}</p>
              </div>
              <div className="flex gap-x-10">
                <p>가입일자 </p>
                <p>:</p> <p>{info?.joinedAt}</p>
              </div>
              <div className="flex gap-x-10">
                <p>내가 쓴 게시물 </p>
                <p>:</p> <p>{info?.boardCount}</p>
              </div>

              <div
                onClick={ChangePwPage}
                className="cursor-pointer hover:text-stone-700 overflow-hidden"
              >
                비밀번호 변경하기
              </div>
            </div>
          </div>
        </div>

        <div className="w-180 min-h-screen border bg-amber-50 flex flex-col items-center rounded-2xl gap-y-13">
          <p className="font-bold text-2xl mt-10 flex justify-center text-center">
            내가 쓴 글
          </p>

          {myPosts && myPosts.length > 0 ? (
            myPosts.map((item) => (
              <div
                key={item.boardId}
                className="border border-black w-150 h-10 rounded-2xl flex justify-center items-center gap-x-20"
              >
                <div className="font-bold">{item.title}</div>
                <p>-</p>
                <div className="font-bold">{item.createdAt}</div>
              </div>
            ))
          ) : (
            <div className="mt-10 text-gray-500">작성한 게시글이 없습니다.</div>
          )}
        </div>
      </div>
    </div>
  );
}
