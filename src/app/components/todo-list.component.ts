import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interface/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  selectedItem: Todo;
  constructor(public todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodo();
  }

  /**
   * @param item 
   * On Selecting todo item
   */
  onSelect(item: Todo) {
    this.selectedItem = {...item};
  }



}
