import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CopyrightDirective } from './copyright.directive';
import { APP_SETTINGS, appSettings } from './app.settings';
import { from, interval, Observable, of } from 'rxjs';
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

  title$ = new Observable( observer => {
    setInterval( () => observer.next(undefined), 1000)
  } )

  constructor(){
    this.title$.subscribe( this.setTitle );
    this.testeOperators();
  }
  /* setTitle() {
    const timestamp = new Date();
    this.title = `${this.settings.title} <br> ${timestamp}`;
  } */
  
  private setTitle = () => {
    const timestamp = new Date();
    this.title = `${this.settings.title} <br> ${timestamp}`;
  }


  testeOperators(){
    console.log('----------- Operators ------------');
  }

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

}
