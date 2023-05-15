import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CeastHeaderComponent } from './core/components/ceast-header/ceast-header.component';
import { CeastAboutComponent } from './core/components/ceast-about/ceast-about.component';
import { CeastWingiesComponent } from './core/components/ceast-wingies/ceast-wingies.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    CeastHeaderComponent,
    CeastAboutComponent,
    CeastWingiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
