const LoginPage = require('../../page_objects/login/login-page');
const {assert} = require('chai');


describe('Login', () => {
    // This hook runs before each test
    beforeEach(() => {
        //Navigate to base url from wdio.conf
        browser.url('./');
    });

    // This hook runs after each test
    afterEach(() => {
        // Deleting cookies after each session will allow us to have new session before next test starts
        browser.deleteCookies();
    });

    it('Sign Up to ABCmouse', () => {
        // Clicking on Sign Up button
        LoginPage.clickSignUp();

        // Waiting for redirecting to needed page
        browser.waitUntil( () => {
            return browser.getUrl() === 'https://www.abcmouse.com/abc/prospect-register/';
        });

        // Set email (this step is not executing thooo) I can't figure out how to setValue using JS path 
        //Setting attribute will add new value to HTML, but system don't recognize the value so Next steps wouldn't execute, the test will fail here =(
        LoginPage.setEmail();


        // Click on Submit button
        LoginPage.clickSubmitBtn();

        // verify that needed page is returned
        browser.waitUntil( () => {
            return browser.getUrl() === 'https://www.abcmouse.com/abc/subscription/';
        });

        //Verify that on subscription page, “Become a Member!” text is rendered. ( I can't get access to this element also) but normally using CSS selectors I'll make  assertion like that.
        let pageTag = browser.execute('document.querySelector("body > route-view").shadowRoot.querySelector("#page-component").shadowRoot.querySelector("#page-content > h1")')
        assert.equal(pageTag.getText(), 'Become a Member!', 'Text is different or does not exist')
    });
});