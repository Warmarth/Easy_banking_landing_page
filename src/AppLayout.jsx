import React, { useState } from "react";
import {
  BrowserRouter as Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Stats from "./pages/Stat";
import Login from "./component/signIn";

function AppLayout() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  function logOut() {
    setUser(null);
    navigate("/");
  }

  return (
    <>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/posts" style={{ padding: 5 }}>
          Posts
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
        <span> | </span>
        {user && (
          <Link to="/stats" style={{ padding: 5 }}>
            Stats
          </Link>
        )}
        {!user && (
          <Link to="/login" style={{ padding: 5 }}>
            Login
          </Link>
        )}
        {user && (
          <span onClick={logOut} style={{ padding: 5, cursor: "pointer" }}>
            Logout
          </span>
        )}
      </nav>
      <Routes>
        {/* Define other routes here */}
        <Route path="/stats" element={<Stats user={user} />} />
        <Route path="/login" element={<Login onLogin={setUser} />} />
        {/* ... */}
      </Routes>
    </>
  );
}

export default AppLayout;
