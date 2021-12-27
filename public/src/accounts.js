function findAccountById(accounts, id) {
  const result = accounts.find(account => account.id === id)
  return result
}

function sortAccountsByLastName(accounts) {
const accByLastName = accounts.sort((lastNameA, lastNameB) => lastNameA.name.last.toLowerCase() < lastNameB.name.last.toLowerCase()?-1:1)
return accByLastName
}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0;
  for (let book of books) {
const {borrows} = book ;
for(let i = 0; i < borrows.length; i++) {
  if(borrows[i].id === account.id) {
    totalBorrows++
  }
}
  }
  return totalBorrows
}

function getBooksPossessedByAccount(account, books, authors) {
  //loop through books 
  //find books checked out with id matching account
  //push book into empty array
  //
  //booksFiltered.index.author =  authors[authorId].name

/*  
const booksFiltered = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === account.id) 
for (let book of booksFiltered) {
  for (let author of authors) {
    if (book.authorId === author.id) {
      book.author = author.name
    }
  }
  return booksFiltered
}
*/

const borrowed = books.filter(book => account.id === book.borrows[0].id) ;
borrowed.forEach(book => book.author = authors.find(author => book.authorId === author.id))
return borrowed


}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
