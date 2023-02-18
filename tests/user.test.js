const request = require("supertest");
const app = require("../src/server");

describe("API endpoints", () => {
  test("GET /api/users?since={number} responds with JSON and status 200", async () => {
    const response = await request(app).get("/api/users?since=0");
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.headers.link).toMatch(/next/);
  });

  test("GET /api/users/:username/details responds with JSON and status 200", async () => {
    const response = await request(app).get("/api/users/octocat/details");
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("location");
  });

  test("GET /api/users/:username/repos responds with JSON and status 200", async () => {
    const response = await request(app).get("/api/users/octocat/repos");
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty("name");
    expect(response.body[0]).toHaveProperty("description");
    expect(response.body[0]).toHaveProperty("html_url");
    expect(response.body[0]).toHaveProperty("language");
  });
});
