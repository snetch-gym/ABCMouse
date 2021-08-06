"use strict";
const BaseTestCasePage = require('../../page_objects/base/BaseTestCase-page');

class LoginPage extends BaseTestCasePage {

    clickSignUp() {
        browser.execute('document.querySelector("body > route-view").shadowRoot.querySelector("#page-component").shadowRoot.querySelector("main-layout > home-header > authstate-context:nth-child(3) > signup-button").click()');
    }

    setEmail(){
        browser.execute(`document.querySelector("body > route-view").shadowRoot.querySelector('[id="page-component"]').shadowRoot.querySelector('main-layout').querySelector('#email').setAttribute('value', 'random@gmail.com');`);
    }
}
module.exports = new LoginPage();