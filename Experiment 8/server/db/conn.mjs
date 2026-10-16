import "../loadEnvironment.mjs";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.ATLAS_URI);
await client.connect();
console.log("MongoDB connected");

export default client.db(process.env.DB_NAME || "blog");
