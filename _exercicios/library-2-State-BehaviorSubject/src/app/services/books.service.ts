import { Injectable } from '@angular/core';
import { Book } from '../types/book';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  // state managment - single source of thrue
  private _books = new BehaviorSubject<Book[]>([
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
]);
  readonly books$ = this._books.asObservable();



  getReadBooks(): Observable<Book[]>{
    return this._books.pipe(
      map( b => b.filter( b => b.alreadyRead === true))
    )
  }
  getNotReadBooks(): Observable<Book[]>{
    return this._books.pipe(
      map( b => b.filter( b => b.alreadyRead === false))
    )
  }

  deleteBook(id: number){
    const updated = this._books.value.filter(b => b.id !== id)
    this._books.next(updated);
  }
  
}
