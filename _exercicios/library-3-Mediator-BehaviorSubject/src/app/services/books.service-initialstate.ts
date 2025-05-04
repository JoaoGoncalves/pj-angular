import { Injectable } from '@angular/core';
import { Book } from '../types/book';
import { BehaviorSubject, map, Observable, of } from 'rxjs';

interface BooksState {
  books: Book[],
}

const initialState: BooksState = {
  books: [
    {
      id: 0,
      title: 'Angular com Typescript',
      author: 'Yakov Fain',
      alreadyRead: true,
      imageUrl: 'angular.jpg',
      imageUrlGr: 'angularGr.png',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vitae inventore nostrum nobis! Quia, iure totam quaerat expedita laboriosam quo omnis culpa vero provident! Quis pariatur accusantium nesciunt recusandae praesentium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vitae inventore nostrum nobis! Quia, iure totam quaerat expedita laboriosam quo omnis culpa vero provident! Quis pariatur accusantium nesciunt recusandae praesentium.',
    },
    {
      id: 1,
      title: 'Blockchain com JS',
      author: 'Bina Ramahurty',
      alreadyRead: false,
      imageUrl: 'blockchain.jpg',
      imageUrlGr: 'blockchainGr.png',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vitae inventore nostrum nobis! Quia, iure totam quaerat expedita laboriosam quo omnis culpa vero provident! Quis pariatur accusantium nesciunt recusandae praesentium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vitae inventore nostrum nobis! Quia, iure totam quaerat expedita laboriosam quo omnis culpa vero provident! Quis pariatur accusantium nesciunt recusandae praesentium.',
    },
    {
      id: 2,
      title: 'DeepLearning com JS',
      author: 'Multiple Authors',
      alreadyRead: true,
      imageUrl: 'deeplearning.jpg',
      imageUrlGr: 'deeplearningGr.png',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vitae inventore nostrum nobis! Quia, iure totam quaerat expedita laboriosam quo omnis culpa vero provident! Quis pariatur accusantium nesciunt recusandae praesentium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vitae inventore nostrum nobis! Quia, iure totam quaerat expedita laboriosam quo omnis culpa vero provident! Quis pariatur accusantium nesciunt recusandae praesentium.',
    },
    {
      id: 3,
      title: 'Joy of Javascript',
      author: 'Luis Atencio',
      alreadyRead: true,
      imageUrl: 'joj.jpg',
      imageUrlGr: 'jojGr.png',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vitae inventore nostrum nobis! Quia, iure totam quaerat expedita laboriosam quo omnis culpa vero provident! Quis pariatur accusantium nesciunt recusandae praesentium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vitae inventore nostrum nobis! Quia, iure totam quaerat expedita laboriosam quo omnis culpa vero provident! Quis pariatur accusantium nesciunt recusandae praesentium.',
    },
    {
      id: 4,
      title: 'React Hooks',
      author: 'John Larsen',
      alreadyRead: false,
      imageUrl: 'reacthooks.jpg',
      imageUrlGr: 'reacthooksGr.png',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vitae inventore nostrum nobis! Quia, iure totam quaerat expedita laboriosam quo omnis culpa vero provident! Quis pariatur accusantium nesciunt recusandae praesentium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vitae inventore nostrum nobis! Quia, iure totam quaerat expedita laboriosam quo omnis culpa vero provident! Quis pariatur accusantium nesciunt recusandae praesentium.',
    },
    {
      id: 5,
      title: 'Typescript',
      author: 'Yakov Fain',
      alreadyRead: false,
      imageUrl: 'typescript.png',
      imageUrlGr: 'typescriptGr.png',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vitae inventore nostrum nobis! Quia, iure totam quaerat expedita laboriosam quo omnis culpa vero provident! Quis pariatur accusantium nesciunt recusandae praesentium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vitae inventore nostrum nobis! Quia, iure totam quaerat expedita laboriosam quo omnis culpa vero provident! Quis pariatur accusantium nesciunt recusandae praesentium.',
    },
  ]
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  // private subject guardar o state
  private _state$ = new BehaviorSubject<BooksState>(initialState);

  // public streams para as componentes
  readonly books$: Observable<Book[]>     = this._state$.asObservable().pipe(
    map(s => s.books)
  );
  readonly readBooks$: Observable<Book[]> = this._state$.asObservable().pipe(
    map(s => s.books.filter(b => b.alreadyRead))
  );
  readonly unreadBooks$: Observable<Book[]> = this._state$.asObservable().pipe(
    map(s => s.books.filter(b => !b.alreadyRead))
  );

    // internal getter for current state snapshot
    private get state(): BooksState {
      return this._state$.value;
    }
  
    // helper to patch state
    private setState(patch: Partial<BooksState>) {
      this._state$.next({ ...this.state, ...patch });
    }

    // load initial data (if you wanted to reload/reset)
    loadBooks(books: Book[]) {
      this.setState({ books: [...books] });
    }

    // delete action
    deleteBook(id: number) {
      const filtered = this.state.books.filter(b => b.id !== id);
      this.setState({ books: filtered });
    }
  
}
