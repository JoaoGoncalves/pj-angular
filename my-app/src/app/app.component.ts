import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CopyrightDirective } from './copyright.directive';
import { APP_SETTINGS, appSettings } from './app.settings';
import { BehaviorSubject, filter, from, interval, map, Observable, of, Subject } from 'rxjs';
import { KeyLoggerComponent } from "./key-logger/key-logger.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, CopyrightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [{provide: APP_SETTINGS, useValue: appSettings}]
})
export class AppComponent {
  title = 'Ola Universo';
  settings = inject(APP_SETTINGS);

  title$ = new Observable( observer => {
    setInterval( () => observer.next(undefined), 1000)
  } )

  constructor(){
    this.title$.subscribe( this.setTitle );
    //this.testeOperators();
    this.testeSubject();
  }
  /* setTitle() {
    const timestamp = new Date();
    this.title = `${this.settings.title} <br> ${timestamp}`;
  } */
  
  private setTitle = () => {
    const timestamp = new Date();
    this.title = `${this.settings.title} <br> ${timestamp}`;
  }

  testeSubject(){
    /* console.log('--------- COLD Observable -----');

    let random$ = new Observable( obs => obs.next(Math.random()));

    let obs1 = random$.subscribe( num => console.log('OBS1: ', num));
    let obs2 = random$.subscribe( num => console.log('OBS2: ', num));
    let obs3 = random$.subscribe( num => console.log('OBS3: ', num));

    console.log('--------- HOT Observable -----');
    
    let random2$ = new BehaviorSubject(0);

    random2$.next(Math.random());

    let obsSub1 = random2$.subscribe( num => console.log('OBSSub1: ', num));
    let obsSub2 = random2$.subscribe( num => console.log('OBSSub2: ', num));
    let obsSub3 = random2$.subscribe( num => console.log('OBSSub3: ', num));
 */


    console.log('--------- Subject -----');

    let subject = new Subject();

    subject.next('a');
    subject.next('b');
    subject.next('c');
    subject.subscribe( val => console.log('recebeu (SUB): ', val ))
    subject.next('d');
    subject.next('e');
    subject.next('j');

    console.log('--------- BehaviorSubject -----');

    let bSubject = new BehaviorSubject('w');

    bSubject.next('a');
    bSubject.next('b');
    bSubject.next('c');
    bSubject.subscribe( val => console.log('recebeu (BEHSUB): ', val ))
    bSubject.next('d');
    bSubject.next('e');
    bSubject.next('j');


  }

  }
  /* testeOperators(){
    console.log('--- Operators ---------');

    let cervejas = [
      {nome:'Sagres', pais:'Portugal', preco: 1.90},
      {nome:'Stella', pais:'Belgica', preco: 3.90},
      {nome:'Trappe', pais:'Belgica', preco: 4.90},
      {nome:'Guiness', pais:'Irlanda', preco: 2.90},
      {nome:'Brahma', pais:'Brasil', preco: 1.50},
    ]; 

    let cervejas$ = from(cervejas);

    cervejas$.pipe(
      filter( cerveja => cerveja.preco > 2.5),
      map( cerveja => `Cerveja: ${cerveja.nome} - €${cerveja.preco}`)
    ).subscribe(
      cer => console.log(cer)
    )


  }
 */
  /* constructor(){

    console.log('------------- of() ------------------');
    of(1 ,2 ,'joao', true, 6, 9).subscribe( val => console.log(val));
    of(1 ,2 ,'joao', true, 6, 9).subscribe({
      next: val => console.log(val),
      error: err => console.error(err),
      complete: ()=> console.log('Fim da stream....'),
    });


    console.log('------------- from(array) ------------------');
    let nomes = ['joao', 'maria', 'antonio'];

    let nomes$ = from(nomes);

    nomes$.subscribe( val => console.log(val))

    //interval(2000).subscribe( v => console.log(v))

  } */

