import React from "react";
import Nav from "../Main/nav";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
