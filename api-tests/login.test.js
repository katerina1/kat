import credentials from "../fixtures/credentials";
import request from "../utils/request";


test("/api/login with incorrect credentials", async () => {

  let response = await request({
    method: "POST",
    url: "https://sprinkle-burn.glitch.me/api/login",
    body: credentials.invalid
  });

  expect(response.statusCode).toEqual(401);

});

test("/api/login with correct credentials", async () => {
  
   let response = await request({
    method: "POST",
    url: "https://sprinkle-burn.glitch.me/api/login",
    body: credentials.valid
  });

  expect(response.statusCode).toEqual(200);

});

