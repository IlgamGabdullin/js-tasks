import assert from 'assert';
import { PaginationHelper } from './PaginationHelper';

describe('PaginationHelper', () => {
  const helper = new PaginationHelper(['a', 'b', 'c', 'd'], 2);

  it('Method "itemCount"  should return 2', () => {
    assert.equal(helper.itemCount(), 2);
  });
});
