import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../types/book';
import { BookFiltersComponent } from '../book-filters/book-filters.component';
import { BookComponent } from '../book/book.component';
import { BooksService } from '../../services/books.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-book-list',
  imports: [BookFiltersComponent, BookComponent, AsyncPipe],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  private booksService = inject(BooksService);
  books$ = this.booksService.books$;


  showAllBooks(){
    this.books$ = this.booksService.books$;
  }
  showReadBooks(){
    this.books$ = this.booksService.getReadBooks();
  }
  showNotReadBooks(){
    this.books$ = this.booksService.getNotReadBooks();
  }




}
