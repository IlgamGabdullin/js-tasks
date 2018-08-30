import assert from 'assert';
import { findMissing } from './arithmetic-progress';

describe("Find the missing term in an Arithmetic Progression", () => {
  it("findMissing([1, 3, 5, 9, 11]) should return 7)", () => {
    const result = findMissing([1, 3, 5, 9, 11]);
    assert.equal(result, 7);
  });

  it("findMissing([[1, 3, 4]) should return 2)", () => {
    const result = findMissing([1, 3, 4]);
    assert.equal(result, 2);
  });
});