//Task-1
var books = { title: "Book1", author: "Author1", year: 2001 };
console.log(books);

//Task-2
console.log("Title of the book is", books.title, "and author is", books.author);

//Task-3
books.getTitleAndAuthor = function () {
  return this.title + " " + this.author;
};
console.log(books.getTitleAndAuthor());

//Task-4
books.getYear = function (year) {
  this.year = year;
  return this.year;
};
console.log(books.getYear(2004));

//Task-5
var Library = {
  name: "Fictional",
  books: [
    { title: "Book1", author: "Author1", year: 2004 },
    { title: "Book2", author: "Author2", year: 2005 },
    { title: "Book3", author: "Author3", year: 2006 },
    { title: "Book4", author: "Author4", year: 2007 },
  ],
};
console.log(Library);

//Task-6
console.log(Library.name);

Library.books.forEach((book) => {
  console.log(book.title);
});

//Task-7
books.getTitleAndYear = function () {
  return this.title + " " + this.year;
};
console.log(books.getTitleAndYear());

//Task-8
for (const key in Library) {
  if (Library.hasOwnProperty.call(Library, key)) {
    if (key === "books") {
      Library.books.forEach((book) => {
        console.log(
          key + "-> " + book.title + " " + book.author + " " + book.year
        );
      });
    } else {
      console.log(key + " -> " + Library[key]);
    }
  }
}
//Task-9
console.log(Object.keys(Library));
console.log(Object.values(Library));
