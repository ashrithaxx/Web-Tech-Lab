import express from "express";
import { ObjectId } from "mongodb";
import db from "../db/conn.mjs";

const router = express.Router();
const col = db.collection("posts");
const byId = (id) => (ObjectId.isValid(id) ? { _id: new ObjectId(id) } : null);
const pick = ({ title, author, body }) => ({ title, author, body });

router.get("/", async (_, res) => {
  res.json(await col.find().sort({ date: -1 }).toArray());
});

router.get("/:id", async (req, res) => {
  const q = byId(req.params.id);
  const post = q && (await col.findOne(q));
  post ? res.json(post) : res.status(404).json({ error: "Post not found" });
});

router.post("/", async (req, res) => {
  const post = pick(req.body);
  if (!post.title || !post.body)
    return res.status(400).json({ error: "Title and body are required" });
  const r = await col.insertOne({ ...post, date: new Date() });
  res.status(201).json({ _id: r.insertedId, ...post });
});

router.patch("/:id", async (req, res) => {
  const q = byId(req.params.id);
  const r = q && (await col.updateOne(q, { $set: pick(req.body) }));
  r?.matchedCount ? res.json({ updated: true }) : res.status(404).json({ error: "Post not found" });
});

router.delete("/:id", async (req, res) => {
  const q = byId(req.params.id);
  const r = q && (await col.deleteOne(q));
  r?.deletedCount ? res.json({ deleted: true }) : res.status(404).json({ error: "Post not found" });
});

export default router;
