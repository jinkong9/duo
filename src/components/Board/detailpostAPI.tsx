import api from "../Auth/api";

export interface Detailboard {
  title: string;
  content: string;
  createdAt: string;
}

export interface GetCommentbody {
  commentId: number;
  content: string;
  createdAt: string;
  writer: {
    id: number;
    nickName: string;
  };
  editable: boolean;
}
export interface APIComment {
  data: {
    content: GetCommentbody[];
  };
}

interface Comments {
  comment: string;
}

export interface APINickName {
  data: {
    nickName: string;
  };
}

export interface NickName {
  nickName: string;
}

interface ApiRespon<T> {
  success: boolean;
  data: T;
}
export const GetDetailPost = async (postID: string): Promise<Detailboard> => {
  const res = await api.get<ApiRespon<Detailboard>>(`boards/${postID}`);
  return res.data.data;
};

export const GetNickName = async (): Promise<NickName> => {
  const res = await api.get<APINickName>("members/me");
  return res.data.data;
};

export const GetComments = async (
  postID: string
): Promise<GetCommentbody[]> => {
  const res = await api.get<
    ApiRespon<{ content: GetCommentbody[]; totalElements: number }>
  >(`boards/${postID}/comments`);
  return res.data.data.content;
};
