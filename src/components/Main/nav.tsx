import React, { useState } from "react";

export default function Nav() {
  interface CheckLogin {
    check: string;
  }
  const [login, checkLogin] = useState<CheckLogin>({
    check: "Login",
  });
  return (
    <div className="relative p-5 mb-10 bg-gray-300">
      <div className="text-left absolute">
        <a>ALIVE ALONE</a>
      </div>
      <div className="text-right cursor-pointer">
        <a>Login</a>
      </div>
    </div>
  );
}
