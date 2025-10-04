import api from "./api";

export interface LoginBody {
  email: string;
  pw: string;
}

export interface User {
  nickName: string;
}

interface ApiRespon<T> {
  success: boolean;
  data: T;
}

export const LoginAPI = async (info: LoginBody): Promise<void> => {
  await api.post("members/login", info);
};

export const Getme = async (): Promise<User> => {
  const res = await api.get<ApiRespon<User>>("members/me");
  return res.data.data;
};

export const LogoutAPI = async (): Promise<void> => {
  await api.delete("members/logout");
};
