import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../types/book';
import { BookFiltersComponent } from '../book-filters/book-filters.component';
import { BookComponent } from '../book/book.component';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-list',
  imports: [BookFiltersComponent, BookComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  private booksService = inject(BooksService);

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  showAllBooks(){
    this.books = this.booksService.getBooks();
  }
  showReadBooks(){
    this.books = this.booksService.getReadBooks();
  }
  showNotReadBooks(){
    this.books = this.booksService.getNotReadBooks();
  }

  deleteBook(id: number){
    this.books = this.booksService.deleteBook(id);
  }




}
