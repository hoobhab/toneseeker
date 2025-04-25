import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="header-bar">
        <nav>
            <Link style={{ color: "black", margin: "0px" }} to="/">
            <div className="logo">
            <h1>ToneSeeker</h1>
            </div>
            </Link>
        </nav>
      </div>
      <div className="sidebar">
        <Link to="/">
        <button className="sidebar-home"> Home </button>
        </Link>
        <Link to="/new">
        <button type="button" className="sidebar-new"> Create Post </button>
        </Link>
        <Link to="/about">
        <button type="button" className="sidebar-about"> About Us </button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
