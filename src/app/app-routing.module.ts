import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { PostListComponent } from './components/post-list/post-list.component';


const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'detail', component: HeroDetailComponent },
  { path: 'bai-tap-1', component: PostListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
