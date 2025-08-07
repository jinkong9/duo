import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/login";
import Main from "./components/Main/main";
import Kitchen from "./components/Kitchen/kitchen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kitchen" element={<Kitchen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
