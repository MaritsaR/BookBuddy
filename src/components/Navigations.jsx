/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { Link } from "react-router-dom";
import "../index.css";

export default function Navigations({ token, setToken, setUser }) {
  return (
    <div className="nav-bar">
      <Link to="/"> Home </Link>
      <Link to="/account"> Account </Link>
      <Link to="/login"> Login </Link>
      <Link to="/register"> Register </Link>
      {token && (
        <Link
          to="/login"
          onClick={() => {
            setUser(null);
            localStorage.removeItem("token");
            setToken(null);
          }}
        >
          Logout
        </Link>
      )}
    </div>
  );
}
