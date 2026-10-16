import { useEffect, useState } from "react";
import PostSummary from "../components/PostSummary.jsx";

export const API = "http://localhost:5050/posts";

export default function Home() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch(API).then((r) => r.json()).then(setPosts).catch(() => setPosts([]));
  }, []);

  if (!posts) return <p>Loading…</p>;
  return (
    <>
      <h2>Latest Posts</h2>
      {posts.length ? posts.slice(0, 5).map((p) => <PostSummary key={p._id} post={p} />) : <p>No posts yet.</p>}
    </>
  );
}
