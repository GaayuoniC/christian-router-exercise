import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <>
      <NavBar />
      <main>
        <h1>Welcome to Campus Talents Movies!</h1>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
