import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CopyrightDirective } from './copyright.directive';
import { APP_SETTINGS, appSettings } from './app.settings';
import { from, of } from 'rxjs';


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

  constructor(){

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

    nomes$.subscribe( val => console.log(val))




  }

}
