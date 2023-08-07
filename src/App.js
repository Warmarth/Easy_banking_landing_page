import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import HomePage from "./pages/Home";
import Registartion from "./pages/Registartion";
import Port404 from "./pages/NoMatch";
import LogIn from "./pages/logIn";
import Post from "./pages/post";
import PostLists from "./pages/postLists";
import AppLayout from "./AppLayout";
import Stats from "./pages/Stat";

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

function App() {
  return (
    <Router className="bg-400-red">
      <Link to="/">Home</Link>
      <Link to="/signup"> Sign Up </Link>
      <Link to="/posts">Post </Link>
      <Link to="/login">LogIn</Link>
      <Link to="/stat">stat</Link>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostLists />} />
          <Route path=":slug" element={<Post />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Registartion />} />
        <Route path="*" element={<Port404 />} />
        <Route path="/applayout" element={<AppLayout />} />
        <Route path="/stat" element={<Stats />} />
      </Routes>
    </Router>
  );
}

export { BlogPosts };
export default App;
