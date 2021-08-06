"use strict";
class BaseTestCasePage {
    get btnSubmit() { return ('document.querySelector("body > route-view").shadowRoot.querySelector("#page-component").shadowRoot.querySelector("#submit-button").click()'); }

    clickSubmitBtn() {
        browser.execute(this.btnSubmit);
    }
}
module.exports = BaseTestCasePage;
