import credentials from "../fixtures/credentials";
import request from "../utils/request";


test("/api/login with incorrect credentials", async () => {

  let response = await request({
    method: "POST",
    url: "https://sprinkle-burn.glitch.me/api/login",
    body: credentials.invalid
  });

  expect(response.statusCode).toEqual(401);
  expect(response.body.errors[0].title).toEqual("Credentials are incorrect");
  expect(response.headers.get('Content-Type')).toMatch('application/json');

});

test("/api/login with correct credentials", async () => {
  
   let response = await request({
    method: "POST",
    url: "https://sprinkle-burn.glitch.me/api/login",
    body: credentials.valid
  });

  expect(response.statusCode).toEqual(200);
  expect(response.body.username).toEqual("Dr I Test");
  
  console.log(response.headers.get('Content-Type'));

});

