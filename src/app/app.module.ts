import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DateComponent } from './date/date.component';
import { TaskComponent } from './task/task.component';
import { InputTaskComponent } from './input-task/input-task.component';
import { SnackBoxComponent } from './snack-box/snack-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DateComponent,
    TaskComponent,
    InputTaskComponent,
    SnackBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
