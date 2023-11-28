import { useState } from "react";
import bookLogo from "./assets/books.png";
import Account from "./components/Account";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Book Buddies
      </h1>
      <div>
        <Link to="/account">Account</Link>
      </div>

      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/Account" element={<Account token={token} />} />
        <Route path="/Register" element={<Register setToken={setToken} />} />
      </Routes>
    </>
  );
}

export default App;
