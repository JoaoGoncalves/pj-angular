import { Component, output } from '@angular/core';

@Component({
  selector: 'app-book-filters',
  imports: [],
  templateUrl: './book-filters.component.html',
  styleUrl: './book-filters.component.css'
})
export class BookFiltersComponent {

  showRead    = output();
  showNotRead = output();
  showAll    = output();

  showReadBooks(){
    this.showRead.emit();
  }
  showNotReadBooks(){
    this.showNotRead.emit();
  }
  showAllBooks(){
    this.showAll.emit();
  }

}
  