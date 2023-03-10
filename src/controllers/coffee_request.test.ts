import request from "supertest";
import { app } from "../app";


describe("Test /coffee API endpoint request", () => {
  test("GET should return correct JSON object", async () => {
    const res = await request(app)
      .get("/coffee/")
      .query({ coffeeName: "Latte" });

    expect(res.statusCode).toEqual(200);
   
    expect(res.body).toEqual({
      drinkType: "Coffee",
      name: "Latte",
    });
  });
});
