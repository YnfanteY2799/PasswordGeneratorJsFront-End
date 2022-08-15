import { ReactElement } from "react";
import { Navbar, Footer } from "../../components/Index";
import { Outlet } from "react-router-dom";

export default function Home(): ReactElement {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
