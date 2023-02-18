const { Octokit } = require("@octokit/rest");

const octokit = new Octokit();

const getUsers = async (since) => {
  const { data, headers } = await octokit.request("GET /users", {
    since: since,
  });
  const link = headers.link;
  return { data, link };
};

const getUserDetails = async (username) => {
  const { data } = await octokit.request("GET /users/{username}", {
    username: username,
  });
  return data;
};

const getUserRepositories = async (username) => {
  const { data } = await octokit.request("GET /users/{username}/repos", {
    username: username,
  });
  return data;
};

module.exports = {
  getUsers,
  getUserDetails,
  getUserRepositories,
};
