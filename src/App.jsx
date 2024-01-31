import { useState, useEffect } from "react";
import bookLogo from "./assets/books.png";
import Account from "./components/Account";
import Login from "./components/Login";
import Books from "./components/Books";
import Register from "./components/Register";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import SingleBook from "./components/SingleBook";
import BookCards from "./components/BookCards";
import { getUser } from "./API";
import Navigations from "./components/Navigations";
import "./index.css";

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  async function fetchUser() {
    const nextUser = await getUser(token);
    setUser(nextUser);
  }
  useEffect(() => {
    const localToken = localStorage.getItem("token");
    setToken(localToken);
  }, []);

  useEffect(() => {
    if (!token) return;
    fetchUser();
  }, [token]);

  return (
    <>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Book Buddies
      </h1>
      <Navigations token={token} setToken={setToken} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route
          path="/book/:bookId"
          element={
            <SingleBook user={user} token={token} fetchUser={fetchUser} />
          }
        />
        <Route
          path="/Account"
          element={<Account user={user} fetchUser={fetchUser} token={token} />}
        />
        <Route
          path="/login"
          element={<Login setToken={setToken} token={token} />}
        />
        <Route
          path="/Register"
          element={<Register setToken={setToken} token={token} />}
        />
        {/* <Route path="/books" element={<Books />} />  */}
      </Routes>
    </>
  );
}

export default App;
