import { useState } from "react";
import { registerUser } from "../API";
import { Link, useNavigate } from "react-router-dom";

export default function Register({ setToken, token }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userObj = {
      firstName,
      lastName,
      email,
      password,
    };
    const nextToken = await registerUser(userObj);
    localStorage.setItem("token", token);
    setToken(nextToken);
    navigate("/account");
  };

  return (
    <>
      <form className="register" onSubmit={handleSubmit}>
        <h2>Register!</h2>
        <label>
          First Name:
          <input
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        <label>
          email:
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
        <button>Register</button>
        <Link to="/register">Don't have an account? Click here to sign up</Link>
      </form>
    </>
  );
}
