import { Author } from "./Author";
import { AbstractBook } from "./AbstractBook";
import { Copy } from "./Copy";
import { Reader } from "./Reader";
import { Book } from "./Book";
import { EBook } from "./EBook";

export class Library {
    private _authors: Author[];
    private _books: AbstractBook[];
    private _copies: Copy[];
    private _readers: Reader[];
    constructor
        (authors: Author[] = [], 
        books: AbstractBook[] = [], 
        copies: Copy[] = [], 
        readers: Reader[] = []
    ) {
        this._authors = authors;
        this._books = books;
        this._copies = copies;
        this._readers = readers;
    }
    addAuthor(author: Author): void {
        if (!this._authors.includes(author)) this._authors.push(author);
    }
    
    addBook(book: AbstractBook): void {
        if (!this._books.includes(book)) this._books.push(book);
    }
    
    addCopy(copy: Copy): void {
        if (!this._copies.includes(copy)) this._copies.push(copy);
    }
    
    addReader(reader: Reader): void {
        if (!this._readers.includes(reader)) this._readers.push(reader);
    }
    
    getAvailableCopies(): Copy[] {
        return this._copies.filter(copy => copy.isCopyAvailable());
    }
    
    findBooksByAuthor(author: Author): AbstractBook[] {
        return this._books.filter(book => book.author === author);
    }
}