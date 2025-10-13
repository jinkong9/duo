import React from "react";
import Header from "./header";
import Maincontent from "./maincontent";
import Footer from "./footer";
//https://colorhunt.co/
export default function Main() {
  return (
    <div className="font-[--font-pretendard] bg-[#FFE893] min-h-screen">
      <Header />
      <Maincontent />
      <Footer />
    </div>
  );
}
