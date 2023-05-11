const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:Pg@967061@localhost:5432/individual_db')

async function selectAllBooks() {

  let data = await db.many("SELECT * FROM book")

  return data;
}

async function insertBook(title, catagory, year) {

  await db.none(`INSERT INTO book (authorId, title, year, catagory)` +
                `VALUES (1,'${title}','${year}', '${catagory}')`);
}

async function updateBook(authorId, title, year, catagory) {

  await db.none(`UPDATE book SET authorId = '${authorId}', year = '${year}', catagory = '${catagory}' WHERE book_id = ${bookId}`);
}

async function selectBookByKeyword(keyword) {

  let data = await db.any(`SELECT * FROM book WHERE title LIKE '${keyword}%'`);

  return data;
}

async function selectAllloanbooks() {

  let data = await db.many("SELECT * FROM loanbooks")

  return data;
}

async function deleteBook(bookId) {

  await db.none(`DELETE FROM book WHERE book_id = ${bookId}`);
}

module.exports = {
    selectAllBooks,
    selectBookByKeyword,
    insertBook,
    updateBook,
    deleteBook
}