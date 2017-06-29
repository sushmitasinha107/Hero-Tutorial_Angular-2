import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import {HeroDetailComponent} from './hero-detail.component'

import { AppComponent }  from './app.component';
import { HeroService } from './hero.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeroDetailComponent],
  bootstrap:    [ AppComponent ],
  providers: [HeroService]
})
export class AppModule { }