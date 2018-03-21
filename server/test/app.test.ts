import request from "supertest";
import { app } from "../src/";
import "jest";

describe(".env", () => {
  test("should exist", () => {

    expect(process.env.PORT);
  });
});

describe("index.ts app.listen(PORT)", () => {

  it("should return 404", (done) => {
    request(app).get("/random")
      .expect(404, done);
  });

  it("should return 401 Unauthorized request Folder", (done) => {
    request(app).get("/api/folder")
      .expect(401);

    request(app).get("/api/folder/someID")
      .expect(401, done);
  });

  it("should return 401 Unauthorized request File", (done) => {
    request(app).get("/api/file")
      .expect(401);

    request(app).get("/api/folder/file")
      .expect(401, done);
  });

  it("should return 200 request User", (done) => {
    request(app)
      .post("/user/register")
      .send({
        "name": "besamelo",
        "surname": "s",
        "email": "e",
        "username": "dd",
        "password": "123hola"
      })
      .expect(200, done);
  });
});