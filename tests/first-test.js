"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_word_1 = require("../src/hello-word");
var chai_1 = require("chai");
require("mocha");
describe('Hello function', function () {
    it('should return hello world', function () {
        var result = hello_word_1.hello();
        chai_1.expect(result).to.equal('Hello world!');
    });
});
//# sourceMappingURL=first-test.js.map