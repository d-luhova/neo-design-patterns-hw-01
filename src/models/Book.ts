import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";

export class Book extends AbstractBook {
    getDescription(): string {
        return `Physical book "${this.title}" by ${this.author.name} (${this.year})`;
    }
}