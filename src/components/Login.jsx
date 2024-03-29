import { useState } from "react";
import { loginUser } from "../API";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ setToken, token }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userObj = {
      email,
      password,
    };
    const nextToken = await loginUser(userObj);
    localStorage.setItem("token", token);
    setToken(nextToken);
    navigate("/account");
  };

  return (
    <>
      <form className="login" onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button>Login</button>
      </form>
      <div>
        <Link to="/register">Don't have an account? Click here to sign in</Link>
      </div>
    </>
  );
}
