import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListHeroComponent } from './list-hero/list-hero.component';
import { HeroComponent } from './hero/hero.component';
import { HeroFormComponent } from './hero-form/hero-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ListHeroComponent,
    HeroComponent,
    HeroFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
