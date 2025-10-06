import Book from "./Book.js";

export default class EBook extends Book {
    constructor (title, author, publicationDate, fileFormat) {
        super (title, author, publicationDate);
        this.fileFormat = fileFormat;
    }

    printInfo() {
        console.log(`You can download ${this.title} that was written by ${this.author} in ${this.publicationDate} in ${this.fileFormat} format`);
    }

    get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
     if (value === "") {
        throw new Error('File format must be real');
     }
     this._fileFormat = value;
}

static fromBook(bookInstance, format) {
    return new EBook(bookInstance.title, bookInstance.author, bookInstance.publicationDate, format);
  }
}
