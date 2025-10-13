import api from "../Auth/api";

export interface JoinBody {
  nickname: string;
  email: string;
  age: string;
  password: string;
  check_password: string;
}

export interface JoinRes {
  success: boolean;
  status: number;
}

export const JoinAPI = async (info: JoinBody): Promise<void> => {
  const res = await api.post("/members/register", info);
};
