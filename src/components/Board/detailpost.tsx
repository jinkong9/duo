import React, { useEffect, useState, type ChangeEvent } from "react";
import { AxiosError, type AxiosResponse } from "axios";
import { useParams } from "react-router-dom";
import api from "../Auth/api";

interface APIBoard {
  data: board;
}

interface board {
  title: string;
  content: string;
  createdAt: string;
}

interface GetComment {
  commentId: number;
  content: string;
  createdAt: string;
  writer: {
    id: number;
    nickName: string;
  };
  editable: boolean;
}
interface APIComment {
  data: {
    content: GetComment[];
  };
}

interface Comments {
  comment: string;
}

interface APIme {
  data: {
    nickName: string;
  };
}

export default function DetailPost() {
  const CommnetHeader = ["NickName", "Comment", "date", "댓글수정"];
  const { postID } = useParams<{ postID: string }>();
  const [post, setPost] = useState<board | null>(null);
  const [nick, setNick] = useState<string>("");
  const [getcomment, setgetComment] = useState<GetComment[]>([]);
  const [comment, setComment] = useState<Comments>({ comment: "" });
  const [editID, setEditiD] = useState<number | null>(null);
  const [editComment, setEditComment] = useState<string>("");
  const [menu, setMenu] = useState<number | null>(null);

  useEffect(() => {
    const GetPost = async () => {
      try {
        const res: AxiosResponse<APIBoard> = await api.get(`boards/${postID}`);
        setPost(res.data.data);
      } catch (err) {
        if (err instanceof AxiosError) {
          console.log("err", err.response);
        }
      }
    };
    GetPost();
  }, [postID]);

  useEffect(() => {
    const nick = async () => {
      try {
        const res: AxiosResponse<APIme> = await api.get("members/me");
        console.log("닉네임", res.data.data.nickName);
        setNick(res.data.data.nickName);
      } catch (err) {
        if (err instanceof AxiosError) {
          console.log("me오류", err.response?.data);
        }
      }
    };
    nick();
  }, []);

  useEffect(() => {
    const GetComment = async () => {
      try {
        const res: AxiosResponse<APIComment> = await api.get(
          `boards/${postID}/comments`
        );
        setgetComment(res.data.data.content);
        console.log("댓글", res);
      } catch (err) {
        if (err instanceof AxiosError) {
          console.log("오류", err);
        }
      }
    };
    GetComment();
  }, []);

  const handleWriteComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setComment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const WriteComment = async () => {
    if (!comment.comment.trim()) {
      alert("1자 이상 남겨주세요.");
      return;
    }
    try {
      const res = await api.post(`comments/${postID}`, {
        content: comment.comment,
      });
      console.log(res);
      setComment({ comment: "" });
      setgetComment((prev) => [...prev, res.data.data]);
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log("댓글오류", err.response);
      }
    }
  };

  const EditComment = async (id: number) => {
    try {
      await api.patch(`comments/${id}`, { content: editComment });
      setgetComment((prev) =>
        prev.map((comment) =>
          comment.commentId === id
            ? { ...comment, content: editComment }
            : comment
        )
      );
      setEditiD(null);
      setEditComment("");
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log("수정 오류", err.response);
      }
    }
  };

  const DeleteComment = async (id: number) => {
    try {
      await api.delete(`comments/${id}`);
      setgetComment((prev) => prev.filter((c) => c.commentId !== id));
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log("삭제 오류", err.response);
      }
    }
  };

  return (
    <div className="font-[--font-pretendard] min-h-screen bg-amber-100">
      <div className="font-bold text-2xl flex justify-center pt-10">
        다른 사람들의 이야기를 들어봐요 !
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-stone-100 border-3 rounded-lg w-300 h-20 mt-20 text-center font-bold pt-5 text-3xl">
          {post?.title}
        </div>
        <div className="bg-stone-100 border-3 rounded-lg w-300 h-80 text-left font-semibold p-5 flex flex-col gap-5">
          <div className="w-full text-right text-l">{post?.createdAt}</div>
          <div className="w-full text-left text-xl p-2 whitespace-pre-line">
            {post?.content}
          </div>
        </div>
        <div className="w-270 mx-auto bg-white mt-5 border-2 flex flex-col mb-5">
          <div className="text-center border-2 p-5 bg-stone-500">댓글쓰기</div>
          <div className="flex flex-row h-15">
            <textarea
              className="w-255 h-full border p-5 resize-none"
              name="comment"
              value={comment.comment}
              onChange={handleWriteComment}
              placeholder="타인을 비방하는 글이나 욕설은 금지합니다."
              wrap="soft"
            ></textarea>
            <button
              onClick={WriteComment}
              className="bg-stone-300 w-15 cursor-pointer"
            >
              완료
            </button>
          </div>
        </div>
        <div className="w-270 mx-auto bg-white mt-10 border-2 flex flex-col mb-5">
          <div className="text-center border-2 p-5 bg-stone-500">COMMENT</div>
          <table className="w-full text-center border-collapse">
            <thead className="bg-stone-300 border-b-2">
              <tr>
                {CommnetHeader.map((item) => (
                  <th key={item} className="p-4 font-semibold">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {getcomment.map((item) => (
                <tr key={item.commentId} className="border-b hover:bg-gray-50">
                  <td className="p-4">{item.writer.nickName}</td>
                  <td className="p-4">
                    {editID === item.commentId ? (
                      <input
                        className="border p-2 w-full"
                        value={editComment}
                        onChange={(e) => setEditComment(e.target.value)}
                      />
                    ) : (
                      item.content
                    )}
                  </td>

                  <td className="p-4">{item.createdAt}</td>
                  <td className="p-4 relative">
                    {item.writer.nickName === nick && (
                      <div className="inline-block text-left">
                        <button
                          className="p-2 cursor-pointer overflow-hidden"
                          onClick={() =>
                            setMenu(
                              menu === item.commentId ? null : item.commentId
                            )
                          }
                        >
                          ⋮
                        </button>
                        {menu === item.commentId && (
                          <div className="absolute right-0 mt-2 w-28 bg-white border rounded shadow-lg z-10">
                            <button
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => {
                                setEditiD(item.commentId);
                                setEditComment(item.content);
                                setMenu(null);
                              }}
                            >
                              수정하기
                            </button>
                            <button
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500 cursor-pointer"
                              onClick={() => {
                                DeleteComment(item.commentId);
                                setMenu(null);
                              }}
                            >
                              삭제하기
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                    {editID === item.commentId && (
                      <div className="flex gap-2 mt-2">
                        <button
                          className="px-3 py-1 bg-amber-400 text-white rounded cursor-pointer"
                          onClick={() => EditComment(item.commentId)}
                        >
                          저장
                        </button>
                        <button
                          className="px-3 py-1 bg-gray-300 rounded  cursor-pointer"
                          onClick={() => {
                            setEditiD(null);
                            setEditComment("");
                          }}
                        >
                          취소
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
