import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { MovieListComponent } from './page/movie-list/movie-list.component';
import { TvShowListComponent } from './page/tv-show-list/tv-show-list.component';
import { GenersComponent } from './page/geners/geners.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'movieList', component:MovieListComponent},
  {path:'tvShowList', component:TvShowListComponent},
  {path:'geners',component:GenersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
