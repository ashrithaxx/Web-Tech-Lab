import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./Home.jsx";

export default function Create() {
  const [form, setForm] = useState({ title: "", author: "", body: "" });
  const [err, setErr] = useState("");
  const nav = useNavigate();
  const set = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    res.ok ? nav("/") : setErr((await res.json()).error);
  }

  return (
    <form onSubmit={submit}>
      <h2>New Post</h2>
      {err && <p className="err">{err}</p>}
      <input name="title" placeholder="Title" value={form.title} onChange={set} />
      <input name="author" placeholder="Author" value={form.author} onChange={set} />
      <textarea name="body" rows="8" placeholder="Write something…" value={form.body} onChange={set} />
      <button>Publish</button>
    </form>
  );
}
