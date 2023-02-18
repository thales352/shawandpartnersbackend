const express = require("express");
const users = require("./api/users");

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/users", async (req, res) => {
  try {
    const since = req.query.since;
    const { data, link } = await users.getUsers(since);
    res.set("Link", link);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/users/:username/details", async (req, res) => {
  try {
    const username = req.params.username;
    const data = await users.getUserDetails(username);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/users/:username/repos", async (req, res) => {
  try {
    const username = req.params.username;
    const data = await users.getUserRepositories(username);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = server;
