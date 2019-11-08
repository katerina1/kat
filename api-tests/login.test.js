import credentials from "../fixtures/credentials";
import request from "../utils/request";

test("/api/login with correct credentials", async () => {
  let response = await request({
    method: "POST",
    url: "https://sprinkle-burn.glitch.me/api/login",
    body: credentials.invalid
  });
  fail("Not yet implemented");
});

test("/api/login correct credentials", async () => {
  fail("Not yet implemented");
});
