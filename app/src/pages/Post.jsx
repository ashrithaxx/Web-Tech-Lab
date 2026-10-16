import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "./Home.jsx";

export default function Post() {
  const { id } = useParams();
  const nav = useNavigate();
  const [post, setPost] = useState(null);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    fetch(`${API}/${id}`).then((r) => (r.ok ? r.json() : null)).then(setPost);
  }, [id]);

  const set = (e) => setPost({ ...post, [e.target.name]: e.target.value });

  async function save() {
    await fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    setEdit(false);
  }

  async function remove() {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    nav("/archive");
  }

  if (post === null) return <p>Post not found.</p>;
  return edit ? (
    <>
      <input name="title" value={post.title} onChange={set} />
      <input name="author" value={post.author} onChange={set} />
      <textarea name="body" rows="8" value={post.body} onChange={set} />
      <button onClick={save}>Save</button>
      <button className="ghost" onClick={() => setEdit(false)}>Cancel</button>
    </>
  ) : (
    <>
      <h2>{post.title}</h2>
      <small>{post.author || "Anonymous"} · {new Date(post.date).toLocaleDateString()}</small>
      <p className="body">{post.body}</p>
      <button onClick={() => setEdit(true)}>Edit</button>
      <button className="danger" onClick={remove}>Delete</button>
    </>
  );
}
