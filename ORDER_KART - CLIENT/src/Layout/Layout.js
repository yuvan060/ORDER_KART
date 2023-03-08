import { Outlet, Link } from "react-router-dom";
import "./styleLayout.css";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/layout/home">Place Order</Link>
          </li>
          <li>
            <Link to="/layout/get">List Order</Link>
          </li>
          <li>
            <Link to="/layout/delete">Delete Order</Link>
          </li>
          <li>
            <Link to="/layout/update">Update Order</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
