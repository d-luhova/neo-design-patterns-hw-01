import { Copy } from "./Copy";

export class Reader {
    private _id: string;
    private _name: string;
    private _borrowedCopies: Copy[];
    constructor(id: string, name: string, borrowedCopies: Copy[] = []) {
        this._id = id;
        this._name = name;
        this._borrowedCopies = borrowedCopies;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get borrowedCopies() {
        return this._borrowedCopies;
    }
    borrowCopy(copy: Copy): boolean {
        if (copy.borrow()) {
          this._borrowedCopies.push(copy);
          return true;
        }
        return false;
    }
    returnCopy(copy: Copy) {
        this._borrowedCopies = this._borrowedCopies.filter(c => c !== copy);
        copy.returnCopy();
    }
      
}