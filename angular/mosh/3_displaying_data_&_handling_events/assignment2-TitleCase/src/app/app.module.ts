import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { TitlePipe } from './title.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TitlecaseComponent,
    TitlePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
