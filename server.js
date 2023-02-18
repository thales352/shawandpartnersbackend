const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 3000;

// GET - /api/users?since={number}
app.get("/api/users", async (req, res) => {
  try {
    const since = req.query.since || 0;
    const response = await axios.get(
      `https://api.github.com/users?since=${since}`
    );
    const data = response.data;
    const linkHeader = response.headers.link;
    res.set("link", linkHeader);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// GET - /api/users/:username/details
app.get("/api/users/:username/details", async (req, res) => {
  try {
    const username = req.params.username;
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// GET - /api/users/:username/repos
app.get("/api/users/:username/repos", async (req, res) => {
  try {
    const username = req.params.username;
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
