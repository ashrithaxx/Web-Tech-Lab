import "./loadEnvironment.mjs";
import express from "express";
import cors from "cors";
import posts from "./routes/posts.mjs";

const app = express();
app.use(cors(), express.json());
app.use("/posts", posts);

const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`Server running on port ${port}`));
