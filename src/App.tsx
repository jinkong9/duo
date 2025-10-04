import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/login";
import Main from "./components/Main/main";
import Join from "./components/Join/join";
import Restroom from "./components/Restroom/restroom";
import Gohome from "./components/tail/gohome";
import Board from "./components/Board/board";
import DetailPost from "./components/Board/detailpost";
import Writepost from "./components/WritePost/writepost";
import Myinfo from "./components/Myinfo/myinfo";
import Changepw from "./components/ChangePW/changepw";
import Nav from "./components/Main/nav";
import { AuthProvider } from "./components/Auth/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout/layout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/join" element={<Join />} />
              <Route path="/restroom" element={<Restroom />} />
              <Route path="/go" element={<Gohome />} />
              <Route path="/board/:categoryID" element={<Board />} />
              <Route path="/board/:categoryID/write" element={<Writepost />} />
              <Route
                path="/board/:categoryID/:postID"
                element={<DetailPost />}
              />
              <Route path="/myinfo" element={<Myinfo />} />
            </Route>
            <Route path="/changepw" element={<Changepw />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
