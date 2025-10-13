import api from "../Auth/api";

export interface MyPost {
  boardId: number;
  title: string;
  createdAt: string;
  categoryId: number;
  categoryName: string;
}

export interface Info {
  nickName: string;
  email: string;
  joinedAt: string;
  boardCount: number;
}

interface ApiRespon<T> {
  success: boolean;
  data: T;
}

export const getMyPosts = async (): Promise<MyPost[]> => {
  const res = await api.get<
    ApiRespon<{ content: MyPost[]; totalElements: number }>
  >("members/myProfile/boards");
  return res.data.data.content;
};

export const getMyInfo = async (): Promise<Info> => {
  const res = await api.get<ApiRespon<Info>>("members/myProfile");
  return res.data.data;
};
