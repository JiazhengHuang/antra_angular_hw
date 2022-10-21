import { Component, OnInit, Input } from '@angular/core';
import { BookSearchService } from '../services/book-search.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.sass'],
})
export class BookListComponent implements OnInit {
  constructor(public bookService: BookSearchService) {}

  ngOnInit(): void {}

  addToWish(bookname: string) {
    this.bookService.addBookToWishList(bookname);
  }
}
