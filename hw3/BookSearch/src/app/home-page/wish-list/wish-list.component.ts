import { Component, OnInit } from '@angular/core';
import { BookSearchService } from '../services/book-search.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.sass'],
})
export class WishListComponent implements OnInit {
  constructor(public bookService: BookSearchService) {}

  ngOnInit(): void {}

  onClickWishes(bookname: string) {
    console.log('clicked');
    this.bookService.removeBookFromWishList(bookname);
  }
}
