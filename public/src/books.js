
function findAuthorById(authors, id) {
  const findAuthor = authors.find(author => author.id === id)
  return findAuthor
}

function findBookById(books, id) {
  const findBook = books.find(book => book.id === id)
  return findBook
}

function partitionBooksByBorrowedStatus(books) {
  //return array with two arrays [borrowed, returned]
  //loop through books
  let result = [];
  let borrowed = books.filter(book => book.borrows[0].returned === false);
  let returned = books.filter(book => book.borrows[0].returned === true);
  result.push(borrowed, returned)
  return result
}

function getBorrowersForBook(book, accounts) {
  //access first 10 of book.borrows
  //returns array of accounts and return status
  let result = [];
  book.borrows.map(borrowed => {
    let account = accounts.find(el => el.id === borrowed.id);
    account.returned = borrowed.returned;
    result.push(account);

  });

  return result.slice(0, 10);

  }
  
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
