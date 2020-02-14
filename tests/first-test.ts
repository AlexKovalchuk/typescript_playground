import { hello, digPow, squareDigits } from '../src/scripts/hello-word';
import { expect, assert } from 'chai';
import 'mocha';


describe('Hello function', () => {
  it('should return hello world', () => {
    const result = hello();
    expect(result).to.equal('Hello world!');
  });
});

function dotest(n: number, p: number, expected: number) {
  assert.equal(digPow(n, p), expected);
}

describe("digPow tests:", function() {
  it("Hould return number if there are any result or -1 if not", function(done) {
      dotest(89, 1, 1);
      dotest(92, 1, -1);
      dotest(114, 3, 9);
      done()
  });
});

describe("squareDigits", function() {
  it("should pass a sample test", function() {
    assert.strictEqual(squareDigits(9119), 811181);
  });
});




