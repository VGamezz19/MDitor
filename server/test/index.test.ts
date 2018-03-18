import request from "supertest";
import { app } from "../src/";
import "jest";

describe("index.ts app.listen(PORT)", () => {
  it("should return 404", (done) => {
    request(app).get("/random")
      .expect(404, done);
  });
  it("should return 200", (done) => {
    request(app).get("/")
      .expect(200, done);
  });
});
