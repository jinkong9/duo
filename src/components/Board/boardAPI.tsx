import api from "../Auth/api";

export interface board {
  id: number;
  title: string;
  createdAt: string;
}

interface ApiRespon<T> {
  success: boolean;
  data: T;
}

export const GetPost = async (categoryID: string): Promise<board[]> => {
  const res = await api.get<
    ApiRespon<{ content: board[]; totalElements: number }>
  >(`categories/${categoryID}/boards`);
  return res.data.data.content;
};
