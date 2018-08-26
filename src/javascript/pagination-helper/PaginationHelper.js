export class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  // returns the number of items within the entire collection
  itemCount() {
    return this.collection.length;
  }

  // returns the number of pages
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  // returns the number of items on the current page.
  pageItemCount(pageIndex) {
    if(pageIndex * this.itemsPerPage > this.itemCount()) return -1;
    const isLastPage = pageIndex === this.pageCount() - 1;
    return isLastPage ? this.itemCount() % this.itemsPerPage : this.itemsPerPage;
  }

  // determines what page an item is on.
  pageIndex(itemIndex) {
    if (itemIndex > this.itemCount() - 1 || itemIndex < 0) return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}