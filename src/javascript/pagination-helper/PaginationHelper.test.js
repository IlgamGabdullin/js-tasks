import assert from 'assert';
import { PaginationHelper } from './PaginationHelper';

describe('PaginationHelper', () => {
  const itemsPerPage = 4;
  const helper = new PaginationHelper(['a','b','c','d','e','f'], itemsPerPage);

  it("Method 'itemCount' should return 6", () => {
    assert.equal(helper.itemCount(), 6);
  });

  it("Method 'pageCount' should return 2", () => {
    assert.equal(helper.pageCount(), 2);
  });

  describe('PaginationHelper.pageItemCount() method', () => {
    it("pageItemCount(0) should return 4", () => {
      const items = helper.pageItemCount(0);
      assert.equal(items, 4);
    });

    it("pageItemCount(1) should return 2 (as last page)", () => {
      const items = helper.pageItemCount(1);
      assert.equal(items, 2);
    });

    it("pageIemCount(2) should return -1 (page is invalid)", () => {
      const items = helper.pageItemCount(2);
      assert.equal(items, -1);
    });
  });

  describe("PaginationHelper.pageIndex() method", () => {
    it("pageIndex(5) should return 1 (zero based index)", () => {
      const page = helper.pageIndex(5);
      assert.equal(page, 1);
    });

    it("pageIndex(2) should return 0", () => {
      const page = helper.pageIndex(2);
      assert.equal(page, 0);
    });

    it("pageIndex(20) should return -1", () => {
      const page = helper.pageIndex(20);
      assert.equal(page, -1);
    });

    it("pageIndex(-20) should return -1", () => {
      const page = helper.pageIndex(-20);
      assert.equal(page, -1);
    });
  });
});
