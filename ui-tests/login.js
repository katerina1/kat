import { Selector } from "testcafe";
import credentials from "../fixtures/credentials";
import loginpage from "./page-objects/loginpage";

fixture ('Login Page').page('https://sprinkle-burn.glitch.me/');

test("Can not login with correct credentials", async t => {

          await t
            .typeText(loginpage.emailBox, 'jsnow@drugdev.com')
            .typeText(loginpage.passwordBox, 'winteriscoming')
            .click(loginpage.loginBtn)

        // Use the assertion to check if the actual  text is equal to the expected one
        .expect(loginpage.ermsg.textContent).contains('Credentials are incorrect');
});

test("Can login with correct credentials", async t => {
      
          await t
            .typeText(loginpage.emailBox, 'test@drugdev.com')
            .typeText(loginpage.passwordBox, 'supers3cret')
            .click(loginpage.loginBtn)

        // Use the assertion to check if the actual text is equal to the expected one
        .expect(loginpage.wlcm.textContent).contains('Welcome Dr I Test');

});

test("Cannot login with blank credentials", async t => {
  
          await t
          .click(loginpage.loginBtn)

  // Use the assertion to check if the actual  text is equal to the expected one
      .expect(loginpage.ermsg.textContent).eql('Credentials are incorrect');
});


