import assert from 'assert';
import { validBraces } from './validBraces';

describe("ValidBraces function", () => {
  it("validBraces('()' should return true)", () => {
    const result = validBraces('()');
    assert.equal(result, true);
  });

  it("validBraces('()[]{}' should return true)", () => {
    const result = validBraces('()[]{}');
    assert.equal(result, true);
  });

  it("validBraces('()[{}]' should return true)", () => {
    const result = validBraces('()[{}]');
    assert.equal(result, true);
  });

  it("validBraces('(){[}]' should return false)", () => {
    const result = validBraces('(){[}]');
    assert.equal(result, false);
  });

  it("validBraces('[(])' should return false)", () => {
    const result = validBraces('[(])');
    assert.equal(result, false);
  });
});