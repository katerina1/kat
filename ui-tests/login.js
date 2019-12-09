import { Selector } from "testcafe";
import credentials from "../fixtures/credentials";

fixture ('Login Page').page('https://sprinkle-burn.glitch.me/');

test("Can not login with correct credentials", async t => {
  
        const emailBox = Selector(("input[type='email']"));
        const passwordBox = Selector(("input[type='password']"));
        const loginBtn = Selector('button').withText('Login');

          await t
            .typeText(emailBox, 'jsnow@drugdev.com')
            .typeText(passwordBox, 'winteriscoming')
            .click(loginBtn)

        // Use the assertion to check if the actual  text is equal to the expected one
        .expect(Selector('#login-error-box').innerText).eql('Credentials are incorrect');
});

test("Can login with correct credentials", async t => {
      
        const emailBox = Selector(("input[type='email']"));
        const passwordBox = Selector(("input[type='password']"));
        const loginBtn = Selector('button').withText('Login');
        
        const welcome = Selector('article').withText('Welcome Dr I Test');

          await t
          .typeText(emailBox, 'test@drugdev.com')
          .typeText(passwordBox, 'supers3cret')
          .click(loginBtn)

        // Use the assertion to check if the actual text is equal to the expected one
        .expect(welcome.textContent).contains('Welcome Dr I Test');

});


