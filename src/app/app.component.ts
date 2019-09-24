import {Component} from '@angular/core';

@Component({
  selector: 'zino-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = false;
  total = 200000;
  startPage = 1;
  limit = 10;

  constructor() {
  }

  goToPage(n: number): void {
    this.startPage = n;
    console.log(this.startPage);
  }

  onNext(): void {
    this.startPage++;
    console.log(this.startPage);
  }

  onPrev(): void {
    this.startPage--;
    console.log(this.startPage);
  }

  onFirst(): void {
    this.startPage = 1;
    console.log(this.startPage);
  }

  onLast(): void {
    this.startPage = Math.ceil(this.total / this.limit) || 0;
    console.log(this.startPage);
  }

}
