import { Component, input, output } from '@angular/core';
import { Book } from '../../types/book';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  book = input<Book>();
  delete = output<number>();

  deleteBook(){
    this.delete.emit(this.book()!.id)
  }

}
