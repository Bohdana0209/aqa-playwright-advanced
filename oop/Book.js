export default class Book {
    constructor (title, author, publicationDate) {
        this.title = title;
        this.author = author;
        this.publicationDate = publicationDate;
    }

    printInfo() {
        console.log (`${this.title} was written by ${this.author} in ${this.publicationDate}`);
    }

    get title() {
    return this._title;
  }

  set title(value) {
     if (value === "") {
        throw new Error('Title can not be empty');
     }
     this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
     if (value === "") {
        throw new Error('Author can not be empty');
     }
     this._author = value;
  }

  get publicationDate() {
    return this._publicationDate;
  }

  set publicationDate(value) {
     if (value <= 0) {
        throw new Error('Date must be real');
     }
     this._publicationDate = value;
  }
  
  static findOldestBook(books) {
    let oldest = books[0];
    for (let book of books) {
      if (book.year < oldest.year) {
        oldest = book;
      }
    }
    return oldest;
  }
}

