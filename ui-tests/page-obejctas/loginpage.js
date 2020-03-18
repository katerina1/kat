import { Selector } from 'testcafe';

class LoginPage {
    constructor () {
        this.emailBox = Selector(("input[type='email']"));
        this.passwordBox  = Selector(("input[type='password']"));
        this.loginBtn = Selector('button').withText('Login');
        this.wlcm = Selector('article');
        this.ermsg = (Selector('#login-error-box'));
    }
}

export default new LoginPage();