function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  const reducer = (previousValue, currentBook) => {
    const {borrows} = currentBook
    if (borrows[0].returned === false) previousValue++
    return previousValue
  }
  const borrowedBooks = books.reduce(reducer, 0)
  return borrowedBooks
}

let helper = function (element) {
  element.sort((obj1, obj2) => (obj1.count > obj2.count ? -1 : 1));
};
function getMostCommonGenres(books) {
  let result = [];
  books.forEach((book) => {
    let created = result.findIndex((genreObj) => genreObj.name === book.genre);
    //check to see if object is already created
    if (created > 0) {
      result[created].count++;
    } else {
      //else push in the whole new object
      result.push({ name: book.genre, count: 1 });
    }
    helper(result);
  });
  return result.slice(0, 5);
}

function getMostPopularBooks(books) {
  const mostPop = books.map(book => ({name: book.title, count: book.borrows.length}))

  return mostPop.sort((obj1, obj2) => obj1.count > obj2.count ? -1 : 1 ).slice(0, 5);
}
function getMostPopularAuthors(books, authors) {
  //It returns an array containing five objects or fewer that represents the most popular authors whose books have been checked out the most. 
  //Popularity is represented by finding all of the books written by the author and then adding up the number of times those books have been borrowed.
 let authorCounts = {}
 let authorList =[]
  for (let author of authors) {
   for (let book of books) {
     if (author.id === book.authorId) {
       let current = authorCounts[`${author.name.first} ${author.name.last}`]
       if(current) {
        authorCounts[`${author.name.first} ${author.name.last}`] = current + book.borrows.length
       }
       else {
        authorCounts[`${author.name.first} ${author.name.last}`] = book.borrows.length
       } 
     }
   }
 }
for (let item in authorCounts) {
  authorList.push({name: item, count: authorCounts[item]})
}
 return authorList.sort((highCount, lowCount) => lowCount.count - highCount.count).slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
