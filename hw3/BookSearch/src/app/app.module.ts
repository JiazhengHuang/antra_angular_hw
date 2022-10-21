import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishListComponent } from './home-page/wish-list/wish-list.component';
import { SearchBoxComponent } from './home-page/search-box/search-box.component';
import { BookListComponent } from './home-page/book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WishListComponent,
    SearchBoxComponent,
    BookListComponent,
    NavBarComponent,
    HomePageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
