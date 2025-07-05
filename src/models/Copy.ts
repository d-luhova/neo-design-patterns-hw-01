import { AbstractBook } from "./AbstractBook";
export class Copy {
    private _book: AbstractBook;
    private _isAvailable: boolean;
    constructor(book: AbstractBook, isAvailable: boolean = true) {
        this._book = book;
        this._isAvailable = isAvailable;
      }
    
    get book() {
        return this._book;
    }
    
    isCopyAvailable(): boolean {
        return this._isAvailable;
    }
    
    borrow(): boolean {
        if (!this._isAvailable) return false;
        this._isAvailable = false;
        return true;
    }
    
    returnCopy() {
        this._isAvailable = true;
    } 
}