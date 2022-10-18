import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FilterPipe } from './filter.pipe';
import { SortFirstNamePipe } from './sort-first-name.pipe';

@NgModule({
  declarations: [AppComponent, BodyComponent, FilterPipe, SortFirstNamePipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
