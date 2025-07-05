import { AbstractBook } from "./AbstractBook";
export class Author {
    private _name: string;
    private _titles: AbstractBook[];
    constructor(name: string, titles: AbstractBook[] = []) {
        this._name = name;
        this._titles = titles;
    }
    get name() {
        return this._name;
    }
    get titles() {
        return this._titles;
    }
    addBook(book: AbstractBook) {
        this._titles.push(book);
    }
}
        
