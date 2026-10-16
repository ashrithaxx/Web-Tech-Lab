import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "./Home.jsx";

export default function Archive() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(API).then((r) => r.json()).then(setPosts);
  }, []);

  return (
    <>
      <h2>Archive ({posts.length})</h2>
      <table>
        <thead><tr><th>Title</th><th>Author</th><th>Date</th></tr></thead>
        <tbody>
          {posts.map((p) => (
            <tr key={p._id}>
              <td><Link to={`/post/${p._id}`}>{p.title}</Link></td>
              <td>{p.author}</td>
              <td>{new Date(p.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
