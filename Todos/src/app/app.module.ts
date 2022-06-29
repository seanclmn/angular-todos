import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './shared/todo/todo.component';

import { TodosService } from './todos.service'

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
