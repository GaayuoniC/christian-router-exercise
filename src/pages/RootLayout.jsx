import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <>
      <NavBar />
      <main>
        <p>Welcome to Campus Talents Movies!</p>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
