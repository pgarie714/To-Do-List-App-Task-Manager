import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../interface/todo';

// Dummy Data
const todo = [{
    id: 1,
    title: "Super mart shopping",
    isCompleted: false
},
{
  id: 2,
  title: "Watch Marvel movies",
  isCompleted: true
}];

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList$: BehaviorSubject<Todo[]>;

  get todoList(): Todo[] {
    return this.todoList$.getValue();
  }

  constructor() { }

  updateTodoList(list: Todo[]) {
    this.todoList$.next(list);
  }

  getItemIndex(id) {
    return this.todoList.findIndex(item => item.id === id);
  }

  generateUniqueId() {
    return new Date().getTime();
  }

  updateItem(todo: Todo) {
    let itemIndex = this.getItemIndex(todo.id);
    if(itemIndex > -1){
      let list = this.todoList;
      list.splice(itemIndex, 1, todo);
      this.updateTodoList(list);
    }
    
  }

  addNewItem(todo: Todo) {
    let list = this.todoList;
    todo.id = this.generateUniqueId();
    list.push(todo);
    this.updateTodoList(list);
    
  }

  deleteItem(id: number) {
    let list = this.todoList;
    let itemIndex = this.getItemIndex(id);
    list.splice(itemIndex, 1);
    this.updateTodoList(list);

  }

  toggleItemComplete(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
    let list = this.todoList;
    let itemIndex = this.getItemIndex(todo.id);
    list.splice(itemIndex, 1, todo);
    this.updateTodoList(list);

  }


  getTodo() {
    if (!this.todoList$) {
      this.todoList$ = <BehaviorSubject<Todo[]>>new BehaviorSubject(todo);
    }
    return this.todoList$.getValue();
  }
  

  subscribetoTodos(): Observable<Todo[]> {
    return this.todoList$.asObservable();
  }


}
