import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import axios, { AxiosError, type AxiosResponse } from "axios";

interface User {
  nickName: string;
}

interface ApiResponse {
  data: User;
}

interface AuthContextType {
  isLogging: boolean;
  user: User | null;
  isLoading: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const api = axios.create({
    baseURL: "https://port-0-alive-mezqigela5783602.sel5.cloudtype.app/",
    withCredentials: true,
  });

  const [isLogging, setIsLogging] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const res: AxiosResponse<ApiResponse> = await api.get("members/me");
        if (res.data && res.data.data) {
          setIsLogging(true);
          setUser(res.data.data);
        }
      } catch (err) {
        if (err instanceof AxiosError) {
          console.log("정보 불러오기 실패", err);
          setIsLogging(false);
          setUser(null);
        }
      } finally {
        setIsLoading(false);
      }
    };
    checkAuthStatus();
  }, []);

  const login = (userData: User) => {
    setIsLogging(true);
    setUser(userData);
  };

  const logout = async () => {
    try {
      const res = await api.delete("members/logout");
      console.log("뇸", res);
    } catch (error) {
      console.error("로그아웃 API 오류", error);
    } finally {
      setIsLogging(false);
      setUser(null);
    }
  };

  const value: AuthContextType = {
    isLogging,
    isLoading,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("range error");
  }
  return context;
}
