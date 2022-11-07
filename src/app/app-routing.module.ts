import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
import { FlagsComponent } from './flags/flags.component';

const routes: Routes = [
  {
    path: '',
    component: FlagsComponent
  },
  {
    path: 'favorite',
    component: FavoriteComponent
  },
  {
    path: 'learn-more',
    component: FavoriteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
