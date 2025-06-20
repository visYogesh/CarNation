// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "./Navbar";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
