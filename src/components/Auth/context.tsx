import { createContext, useContext, type ReactNode } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Getme, LoginAPI, LogoutAPI, type LoginBody } from "./members";

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
  login: (info: LoginBody) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: Getme,
    retry: false,
    staleTime: Infinity,
  });

  const login = useMutation({
    mutationFn: LoginAPI,
    onSuccess: () => {
      console.log("로그인 성공");
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
    onError: (err: Error) => {
      console.error("로그인 실패", err);
      alert("이메일이나 비밀번호를 확인해주세요.");
    },
  });

  const logout = useMutation({
    mutationFn: LogoutAPI,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["me"] });
      console.log("로그아웃성공");
    },
  });

  const value: AuthContextType = {
    user: user || null,
    isLogging: !!user,
    isLoading,
    login: (info) => login.mutate(info),
    logout: () => logout.mutate(),
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
