import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ImageZoomModule} from 'angular2-image-zoom';

import { AppComponent } from './app.component';
import { ZoomComponent } from './zoom/zoom.component';

@NgModule({
  declarations: [
    AppComponent,
    ZoomComponent
  ],
  imports: [
    BrowserModule,
    ImageZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
