import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Create from "./pages/Create.jsx";
import Post from "./pages/Post.jsx";
import Archive from "./pages/Archive.jsx";

export default function App() {
  return (
    <>
      <nav>
        <b>Blog Manager</b>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/archive">Archive</NavLink>
        <NavLink to="/create">New Post</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/create" element={<Create />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </main>
    </>
  );
}
