import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { WishListComponent } from './home-page/wish-list/wish-list.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'wishlist', component: WishListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
