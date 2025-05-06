import { Component, inject, input, output } from '@angular/core';
import { Book } from '../../types/book';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  private booksService = inject(BooksService);

  book = input<Book>();

  deleteBook(){
    this.booksService.deleteBook(this.book()!.id)
  }

}
