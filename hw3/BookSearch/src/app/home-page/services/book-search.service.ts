import { RootObject, Book } from '../interface/book.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookSearchService {
  private readonly searchApi = 'https://www.googleapis.com/books/v1/volumes?q=';

  private books = [];
  private books$ = new BehaviorSubject<any>(this.books);
  booklist$ = this.books$.asObservable();

  private wishlist: any = [];
  private wishlist$ = new BehaviorSubject<any>(this.books);
  wishes$ = this.wishlist$.asObservable();

  constructor(private readonly http: HttpClient) {}

  getBookList(bookname: string) {
    return this.http.get<RootObject>(this.searchApi + bookname).pipe(
      filter((res: RootObject) => {
        return res.totalItems !== 0;
      }),
      map(({ items }: RootObject): any => {
        if (items && items.length) {
          return items.map(({ volumeInfo }: Book) => {
            const book: any = {
              bookname: volumeInfo.title,
              publisher: volumeInfo.publisher,
              publishdate: volumeInfo.publishedDate,
              description: volumeInfo.description,
            };
            if (volumeInfo.imageLinks) {
              book.bookpic = volumeInfo.imageLinks.thumbnail || '';
            }
            return book;
          });
        }
      }),
      tap((books: any) => {
        this.books = books;
        this.books$.next(this.books);
      })
    );
  }

  addBookToWishList(bookname: string) {
    this.wishlist.push(bookname);
    this.wishlist$.next(this.wishlist);
  }

  removeBookFromWishList(bookname: string) {
    this.wishlist = this.wishlist.filter((item: string) => {
      item !== bookname;
    });
    this.wishlist$.next(this.wishlist);
  }
}
