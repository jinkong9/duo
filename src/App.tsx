import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/login";
import Main from "./components/Main/main";
import Kitchen from "./components/Kitchen/kitchen";
import Join from "./components/Join/join";
import Restroom from "./components/Restroom/restroom";
import Gohome from "./components/tail/gohome";
import Livingroom from "./components/Livingroom/livingroom";
import Post from "./Post/post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/join" element={<Join />} />
        <Route path="/restroom" element={<Restroom />} />
        <Route path="/livingroom" element={<Livingroom />} />
        <Route path="/go" element={<Gohome />} />
        <Route path="post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
