import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
  useParams,
  useNavigate
} from "react-router-dom";
import HomePage from "./pages/Home";
import Registartion from "./pages/Registartion";
import Port404 from "./pages/NoMatch";
import LogIn from "./pages/logIn";
import Post from "./pages/post";
import PostLists from "./pages/postLists";

const BlogPosts = {
  "first-blog-post": {
    title: "First Blog Post",
    description: "Lorem ipsum dolor sit amet, consectetur adip.",
  },
  "second-blog-post": {
    title: "Second Blog Post",
    description: "Hello React Router v6",
  },
};

function Posts() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      <Outlet />
    </div>
  );
}

function Login({ onLogin }) {
  const [creds, setCreds] = useState({});
  const navigate = useNavigate();

  function handleLogin() {
    // For demonstration purposes only. Never use these checks in production!
    // Use a proper authentication implementation
    if (creds.username === "admin" && creds.password === "123") {
      onLogin && onLogin({ username: creds.username });
      navigate("/stats");
    }
  }
  return (
    <div style={{ padding: 10 }}>
      <br />
      <span>Username:</span>
      <br />
      <input
        type="text"
        onChange={(e) => setCreds({ ...creds, username: e.target.value })}
      />
      <br />
      <span>Password:</span>
      <br />
      <input
        type="password"
        onChange={(e) => setCreds({ ...creds, password: e.target.value })}
      />
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}



function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/signup"> Sign Up </Link>
      <Link to="/posts">Post </Link>
      <Link to="/login">LogIn</Link>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostLists />} />
          <Route path=":slug" element={<Post />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Registartion />} />
        <Route path="*" element={<Port404 />} />
      </Routes>
    </Router>
  );
}

export {BlogPosts}
export default App;
