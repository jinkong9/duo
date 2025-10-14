import api from "../Auth/api";

export interface JoinBody {
  nickname: string;
  email: string;
  age: string;
  password: string;
  check_password: string;
}

export const JoinAPI = async (info: JoinBody): Promise<void> => {
  await api.post("/members/register", info);
};
