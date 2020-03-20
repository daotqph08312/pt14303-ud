import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListHeroComponent } from './list-hero/list-hero.component';
import { HeroComponent } from './hero/hero.component';
import { HeroFormComponent } from './hero-form/hero-form.component';


const routes: Routes = [
  { path: '', component: ListHeroComponent },
  { path: 'detail-hero', component: HeroComponent },
  { path: 'hero-form', component: HeroFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
