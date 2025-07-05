import { Author } from "./Author";
export abstract class AbstractBook {
    private _title: string;
    private _year: number;
    private _author: Author;
    constructor(title: string, year: number, author: Author) {
        this._title = title;
        this._year = year;
        this._author = author;
        this._author.addBook(this)
    }
    get title() {
        return this._title;
    }
    get year() {
        return this._year;
    }  
    get author() {
        return this._author;
    }
    abstract getDescription(): string;
}