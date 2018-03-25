import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    PipeDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
