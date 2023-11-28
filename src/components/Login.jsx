import { useState } from "react";
import { loginUser } from "../API";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ setToken }) {
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
    setToken(nextToken);
    navigator("/account");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <Link to="/register">Don't have an account? Click here to sign in</Link>
      </form>
    </>
  );
}
