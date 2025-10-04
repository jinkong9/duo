import axios, {
  type AxiosInstance,
  type AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

declare module "axios" {
  export interface InternalAxiosRequestConfig {
    retry?: boolean;
  }
}

interface FailedStepPromise {
  resolve: () => void;
  reject: (error: AxiosError) => void;
}

interface ErrorResponseData {
  ErrorCode: string;
  message: string;
}

const api: AxiosInstance = axios.create({
  baseURL: "https://port-0-alive-mezqigela5783602.sel5.cloudtype.app/",
  withCredentials: true,
});

let isRefreshing: boolean = false;
let failedStep: FailedStepPromise[] = [];

const processQueue = (error: AxiosError | null) => {
  failedStep.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve();
    }
  });
  failedStep = [];
};

api.interceptors.response.use(
  (res: AxiosResponse) => res, //성공시 실행
  async (err: AxiosError<ErrorResponseData>) => {
    const originalRequest = err.config as InternalAxiosRequestConfig; //실패시 실행
    if (
      err.response?.data?.ErrorCode === "AUTH_TOKEN_INVALID" && //엑세스 만료시
      !originalRequest.retry //재시도요청 아닐시
    ) {
      if (isRefreshing) {
        //현재 토큰 재발급중이면
        return new Promise<void>((resolve, reject) => {
          failedStep.push({ resolve: () => resolve(), reject }); // resolve, reject 큐에 추가
        }).then(() => api(originalRequest)); //재발급 종료 후 진행
      }
      originalRequest.retry = true; //재시도 처리중
      isRefreshing = true; // 재발급 시작

      try {
        await api.post("auth/reissue"); // 리프레시 토큰 요청
        processQueue(null); // 토큰 재발급이 성공하면, 큐에 쌓여있던 모든 요청을 다시 실행
        return api(originalRequest); // 원래 실패했던 요청 다시 실행합니다.
      } catch (refreshErr) {
        processQueue(refreshErr as AxiosError); // 리프레시 토큰 요청 자체도 실패시 모든 요청 실패
        return Promise.reject(refreshErr);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(err); // 엑세스토큰 만료가 아닌 다른 모든 에러는 그대로 반환
  }
);

export default api;
