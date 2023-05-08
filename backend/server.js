const express = require("express");
const chats = require("./data/data.js");
const app = express();

app.get("/", (req, res) => {
  res.send("Pur app is ced0m");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const { id } = req.params;
  const singleChat = chats.find((c) => c._id === id);

  res.send(singleChat);
});
app.listen(3000, () => {
  console.log("Website on port 3000");
});
