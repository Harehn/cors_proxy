// server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

app.use(cors()); // allow your frontend

app.get("/api/proxy", async (req, res) => {
  try {
	//res.send("Hello World");
	res.send(process.env.API_URL);
    const response = await fetch(process.env.API_URL);
    const data = await response.text(); // or .json()

    res.send(data);
  } catch (err) {
    res.status(500).json({ error: "Proxy failed" });
  }
});

app.listen(10000, () => console.log("Running"));