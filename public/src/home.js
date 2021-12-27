function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  //create counter
  //loop through books
  //add one to counter each time book is not returned
  let borrowedBooks = 0 ;
for (let key of books) {
if (key.borrows[0].returned === false) {
borrowedBooks++;
}
}
return borrowedBooks
}

function getMostCommonGenres(books) {
  
}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
