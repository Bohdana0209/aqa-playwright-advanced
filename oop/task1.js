import Book from "./Book.js";
import EBook from "./EBook.js";

const firstBook = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const secondBook = new Book("The Midnight Library", "Matt Haig", 2020);
const thirdBook = new Book("The Hobbit", "J.R.R. Tolkien", 1937);

firstBook.printInfo();
secondBook.printInfo();
thirdBook.printInfo();

const firstEBook = new EBook("Pride and Prejudice", "Jane Austen", 1813, "EPUB")
firstEBook.printInfo();

const books = [firstBook, secondBook, thirdBook, firstEBook];

const oldest = Book.findOldestBook(books);
console.log("Найдавніша книга:", oldest.title);

const converted = EBook.fromBook(secondBook, "PDF"); 
converted.printInfo();