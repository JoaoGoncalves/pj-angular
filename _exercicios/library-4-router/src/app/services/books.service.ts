import { Injectable, inject } from '@angular/core';
import { Book } from '../types/book';
import { BehaviorSubject, filter, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private readonly http = inject(HttpClient);

  // 1. your single source-of-truth
  private _books = new BehaviorSubject<Book[]>([]);
  readonly books$ = this._books.asObservable();

  constructor(){
    this.getBooks();
  }

  getBooks(){
    this.http.get<Book[]>('https://my-json-server.typicode.com/JoaoGoncalves/biblio-api/books').subscribe(val => {
      this._books.next(val);
    })
  }


  // …and two simple filtered streams
  getReadBooks(): Observable<Book[]> {
    return this._books.pipe(
      map(b => b.filter(b => b.alreadyRead))
    );
  }

  getNotReadBooks(): Observable<Book[]> {
    return this._books.pipe(
      map(b => b.filter(b => !b.alreadyRead))
    );
  }

  // 3. mutators just push a new array
  deleteBook(id: number): void {
    const updated = this._books.value.filter(b => b.id !== id);
    this._books.next(updated);
  }





  
}
