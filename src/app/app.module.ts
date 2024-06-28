import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { AddEditItemComponent } from './components/add-edit-item/add-edit-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormatDate } from './pipes/app.pipes';


const COMPONENTS = [
  AppComponent,
  TodoListComponent,
  TodoComponent,
  AddEditItemComponent
];

const PIPES = [
  FormatDate
];


@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
