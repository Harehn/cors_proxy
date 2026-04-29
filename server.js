// server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

app.use(cors()); // allow your frontend

app.get("/api/proxy", async (req, res) => {
  try {
	//res.send("Hello World");
	let url = process.env.API_URL;
	//res.send(url);
    const response = await fetch(url);
    const data = await response.json(); // or .json()
	let headlines = data["articles"];
	let num_of_headlines = 5
	headlines = headlines.slice(0,num_of_headlines);
    res.send(headlines);
  } catch (err) {
    res.status(500).json({ error: "Proxy failed" });
  }
});

app.listen(10000, () => console.log("Running"));