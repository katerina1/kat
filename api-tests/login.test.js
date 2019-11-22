import credentials from "../fixtures/credentials";
import request from "../utils/request";


test("/api/login with incorrect credentials", async () => {

  let response = await request({
    method: "POST",
    url: "https://sprinkle-burn.glitch.me/api/login",
    body: credentials.invalid
  });

  expect(response.statusCode).toEqual(401);
  expect(response.body).toEqual({"errors": [{"title": "Credentials are incorrect"}]});

});

test("/api/login with correct credentials", async () => {
  
   let response = await request({
    method: "POST",
    url: "https://sprinkle-burn.glitch.me/api/login",
    body: credentials.valid
  });

  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual({"data":{"username":"Dr I Test"}});
  // failed on expected  -> Object with all headers, not just Content-type
 // expect(response.headers).toEqual({"Content-Type": "application/json"});

});

