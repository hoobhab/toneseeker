import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="sidebar">
        <Link to="/">
            <div className="logo">
            <h1>ToneSeeker</h1>
            </div>
            </Link>
        <Link to="/new">
        <button type="button" className="sidebar-new"> Create Post </button>
        </Link>
        <Link to="/about">
        <button type="button" className="sidebar-about"> About Us </button>
        </Link>
      </div>
      <div className="sidebar-background"></div>
      <Outlet />
    </div>
  );
};

export default Layout;
