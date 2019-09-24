import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'zino-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() startPage: number;
  @Input() total: number;
  @Input() limit: number;
  @Input() loading: boolean;
  @Input() pagesToShow: number;

  @Output() goPrev = new EventEmitter<boolean>();
  @Output() goNext = new EventEmitter<boolean>();
  @Output() goPage = new EventEmitter<number>();
  @Output() goFirst = new EventEmitter<boolean>();
  @Output() goLast = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  getMin(): number {
    return ((this.limit * this.startPage) - this.limit) + 1;
  }

  getMax(): number {
    let max = this.limit * this.startPage;
    if (max > this.total) {
      max = this.total;
    }
    return max;
  }

  onPage(n: number): void {
    this.goPage.emit(n);
  }

  onPrev(): void {
    this.goPrev.emit(true);
  }

  onNext(next: boolean): void {
    this.goNext.emit(next);
  }

  onFirst(): void {
    this.goFirst.emit(true);
  }

  onLast(): void {
    this.goLast.emit(true);
  }

  totalPages(): number {
    return Math.ceil(this.total / this.limit) || 0;
  }

  lastPage(): boolean {
    return this.limit * this.startPage >= this.total;
  }

  getPages(): number[] {
    const c = Math.ceil(this.total / this.limit);
    const p = this.startPage || 1;
    const pagesToShow = this.pagesToShow || 9;
    const pages: number[] = [];
    pages.push(p);
    const times = pagesToShow - 1;
    for (let i = 0; i < times; i++) {
      if (pages.length < pagesToShow) {
        if (Math.min.apply(null, pages) > 1) {
          pages.push(Math.min.apply(null, pages) - 1);
        }
      }
      if (pages.length < pagesToShow) {
        if (Math.max.apply(null, pages) < c) {
          pages.push(Math.max.apply(null, pages) + 1);
        }
      }
    }
    pages.sort((a, b) => a - b);
    return pages;
  }

}
