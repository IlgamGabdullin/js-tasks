export class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  // returns the number of items within the entire collection
  itemCount() {
    return 2;
  }

  // returns the number of pages
  pageCount() {}

  // returns the number of items on the current page.
  pageItemCount(pageIndex) {}

  // determines what page an item is on.
  pageIndex(itemIndex) {}
  
}