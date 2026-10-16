import { Link } from "react-router-dom";

export default function PostSummary({ post: { _id, title, author, body, date } }) {
  return (
    <article className="card">
      <h3><Link to={`/post/${_id}`}>{title}</Link></h3>
      <small>{author || "Anonymous"} · {new Date(date).toLocaleDateString()}</small>
      <p>{body.length > 120 ? body.slice(0, 120) + "…" : body}</p>
    </article>
  );
}
