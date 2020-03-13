import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';


const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'detail', component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
