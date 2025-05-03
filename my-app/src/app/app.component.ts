import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CopyrightDirective } from './copyright.directive';
import { APP_SETTINGS, appSettings } from './app.settings';
import { filter, from, interval, map, Observable, of } from 'rxjs';
import { KeyLoggerComponent } from "./key-logger/key-logger.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, CopyrightDirective, KeyLoggerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [{provide: APP_SETTINGS, useValue: appSettings}]
})
export class AppComponent {
  title = 'Ola Universo';
  settings = inject(APP_SETTINGS);

  /* title$ = new Observable( observer => {
    setInterval( ()=> observer.next(undefined), 1000);
  }) */
  title$ = interval(500);

  constructor(){
    this.title$.subscribe(this.setTitle);
  }

  private setTitle = () => {
    const timestamp = new Date();
    this.title = `${this.settings.title} <br> ${timestamp}`;

  }

 /*  constructor(){

    console.log('------------- of() ------------------');
    //of(1 ,2 ,'joao', true, 6, 9).subscribe( val => console.log(val));
    of(1 ,2 ,'joao', true, 6, 9).subscribe({
      next: val => console.log(val),
      error: err => console.error(err),
      complete: ()=> console.log('Fim da stream....'),
    });


    console.log('------------- from(array) ------------------');
    let nomes = ['joao', 'maria', 'antonio'];
    let nomes$ = from(nomes);
    nomes$.subscribe( val => console.log(val));

    const numbers$ = interval(1000);
    numbers$.subscribe( n => console.log('Numero: ', n ));

    console.log("---------- operators ---------")
    
    let cervejas = [
      {nome:'Sagres', pais:'Portugal', preco: 1.90},
      {nome:'Stella', pais:'Belgica', preco: 3.90},
      {nome:'Trappe', pais:'Belgica', preco: 4.90},
      {nome:'Guiness', pais:'Irlanda', preco: 2.90},
      {nome:'Brahma', pais:'Brasil', preco: 1.50},
    ];

    let cervejas$ = from(cervejas);

    cervejas$.pipe(
      filter(cerveja => cerveja.preco > 2.5),
      map( cerveja => `Cerveja: ${cerveja.nome} - €${cerveja.preco}`)
    ).subscribe({
      next: cerveja => console.log(cerveja),
      error: err => console.log(err),
      complete: ()=> console.log('Acabaram os Chopinhos, muda para o Vinho...')
    });

    console.log("-------------------")

  } */

}
