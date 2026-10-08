import { Outlet, Link } from "react-router-dom";
import { Cart } from "./cart";
// @ts-ignore: Allow importing CSS file without type declarations
import "./app.layout.css";

export const AppLayout = () => {
  return (
    <div className="layout">
      <div className="layout-content">
        <nav className="nav">
          <Link to="/">Kitties</Link> | <Link to="/page2">Puppies</Link>
        </nav>

        <Outlet />
      </div>

      <Cart />
    </div>
  );
};
