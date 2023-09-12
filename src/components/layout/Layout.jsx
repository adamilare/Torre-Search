import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => (
  <>
    <NavBar />
    <section className="m-section">
      <Outlet />
    </section>
  </>
);

export default Layout;
