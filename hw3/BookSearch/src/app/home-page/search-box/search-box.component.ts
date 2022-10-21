import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { debounceTime, filter, fromEvent, Subscription, switchMap } from 'rxjs';
import { BookSearchService } from '../services/book-search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.sass'],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @ViewChild('searchBox', { static: true }) searchBox!: ElementRef;
  private eventSubscription!: Subscription;

  constructor(private bookService: BookSearchService) {}

  ngOnInit(): void {
    this.eventSubscription = fromEvent(this.searchBox.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        filter((_) => {
          return this.searchBox.nativeElement.value.trim() !== '';
        }),
        switchMap((_) => {
          return this.bookService.getBookList(
            this.searchBox.nativeElement.value
          );
        })
      )
      .subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }
}
